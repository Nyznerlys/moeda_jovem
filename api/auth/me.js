import jwt from 'jsonwebtoken';
import { getPool } from '../_db.js';
import { parseCookies } from './_tokens.js';

export default async function handler(req, res) {
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  try {
    const cookies = parseCookies(req);
    const token = cookies['access_token'];
    const accessSecret = process.env.JWT_ACCESS_SECRET;
    if (!token) {
      res.status(401).end(JSON.stringify({ error: 'no_token' }));
      return;
    }
    if (!accessSecret) {
      res.status(500).end(JSON.stringify({ error: 'missing_jwt_secret' }));
      return;
    }

    const payload = jwt.verify(token, accessSecret);
    const userId = payload.sub;
    const pool = getPool();

    if (req.method === 'GET') {
      const [rows] = await pool.query('SELECT id, name, email, role, created_at FROM users WHERE id = ? LIMIT 1', [userId]);
      if (!rows.length) {
        res.status(404).end(JSON.stringify({ error: 'not_found' }));
        return;
      }
      res.status(200).end(JSON.stringify({ ok: true, user: rows[0] }));
      return;
    }

    if (req.method === 'PATCH') {
      const body = await new Promise((resolve, reject) => {
        let data = '';
        req.on('data', c => (data += c));
        req.on('end', () => { try { resolve(data ? JSON.parse(data) : {}); } catch (e) { reject(e); } });
        req.on('error', reject);
      });
      const { name } = body;
      if (!name) {
        res.status(400).end(JSON.stringify({ error: 'missing_name' }));
        return;
      }
      await pool.query('UPDATE users SET name = ? WHERE id = ?', [name, userId]);
      const [rows] = await pool.query('SELECT id, name, email, role, created_at FROM users WHERE id = ? LIMIT 1', [userId]);
      res.status(200).end(JSON.stringify({ ok: true, user: rows[0] }));
      return;
    }

    res.status(405).end(JSON.stringify({ error: 'method_not_allowed' }));
  } catch (e) {
    console.error(e);
    res.status(401).end(JSON.stringify({ error: 'invalid_token', details: String(e.message || e) }));
  }
}
