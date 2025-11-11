import jwt from 'jsonwebtoken';
import { getPool } from '../_db.js';
import { parseCookies } from './_tokens.js';

export default async function handler(req, res) {
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  try {
    const cookies = parseCookies(req);
    const token = cookies['access_token'];
    const accessSecret = process.env.JWT_ACCESS_SECRET;

    let userId = null;

    // Prefer cookie-based JWT if present
    if (token && accessSecret) {
      try {
        const payload = jwt.verify(token, accessSecret);
        userId = payload.sub;
      } catch (e) {
        console.warn('Invalid access token:', e.message || e);
        res.status(401).end(JSON.stringify({ error: 'invalid_token', details: String(e.message || e) }));
        return;
      }
    }

    // Developer fallback: when JWT secrets / cookie are not available, allow identifying user by header or body
    // but only outside production environments.
    if (!userId) {
      if (process.env.VERCEL_ENV === 'production') {
        res.status(401).end(JSON.stringify({ error: 'no_token' }));
        return;
      }

      // try header first
      const devIdHeader = req.headers && (req.headers['x-dev-user-id'] || req.headers['x-dev-user-email']);
      if (devIdHeader) {
        // header may be numeric id or email; if numeric use as id, else look up by email
        const maybeId = Number(devIdHeader);
        if (!Number.isNaN(maybeId) && maybeId > 0) {
          userId = maybeId;
        } else {
          // lookup by email
          const pool = getPool();
          const [rows] = await pool.query('SELECT id FROM users WHERE email = ? LIMIT 1', [devIdHeader]);
          if (rows.length) userId = rows[0].id;
        }
      }

      // if still no userId, and this is a PATCH, try reading body.userId
      if (!userId && req.method === 'PATCH') {
        const body = await new Promise((resolve, reject) => {
          let data = '';
          req.on('data', c => (data += c));
          req.on('end', () => { try { resolve(data ? JSON.parse(data) : {}); } catch (e) { reject(e); } });
          req.on('error', reject);
        });
        if (body && body.userId) {
          const maybeId = Number(body.userId);
          if (!Number.isNaN(maybeId) && maybeId > 0) userId = maybeId;
        }
      }

      if (!userId) {
        res.status(401).end(JSON.stringify({ error: 'no_token' }));
        return;
      }
    }
    const pool = getPool();

    if (req.method === 'GET') {
      const [rows] = await pool.query('SELECT u.id, u.name, u.email, u.role, u.created_at, p.bio FROM users u LEFT JOIN profiles p ON p.user_id = u.id WHERE u.id = ? LIMIT 1', [userId]);
      if (!rows.length) {
        res.status(404).end(JSON.stringify({ error: 'not_found' }));
        return;
      }
      const row = rows[0];
      let profile = {};
      try { profile = row.bio ? JSON.parse(row.bio) : {}; } catch (e) { profile = {}; }
      const user = { id: row.id, name: row.name, email: row.email, role: row.role, created_at: row.created_at, profile };
      res.status(200).end(JSON.stringify({ ok: true, user }));
      return;
    }

    if (req.method === 'PATCH') {
      const body = await new Promise((resolve, reject) => {
        let data = '';
        req.on('data', c => (data += c));
        req.on('end', () => { try { resolve(data ? JSON.parse(data) : {}); } catch (e) { reject(e); } });
        req.on('error', reject);
      });
      const { name, profile } = body;
      if (name) {
        await pool.query('UPDATE users SET name = ? WHERE id = ?', [name, userId]);
      }
      if (profile && typeof profile === 'object') {
        const bio = JSON.stringify(profile);
        // upsert into profiles table
        await pool.query(`INSERT INTO profiles (user_id, bio, updated_at) VALUES (?, ?, NOW()) ON DUPLICATE KEY UPDATE bio = VALUES(bio), updated_at = NOW()`, [userId, bio]);
      }
      const [rows] = await pool.query('SELECT u.id, u.name, u.email, u.role, u.created_at, p.bio FROM users u LEFT JOIN profiles p ON p.user_id = u.id WHERE u.id = ? LIMIT 1', [userId]);
      const row = rows[0];
      let updatedProfile = {};
      try { updatedProfile = row.bio ? JSON.parse(row.bio) : {}; } catch (e) { updatedProfile = {}; }
      const user = { id: row.id, name: row.name, email: row.email, role: row.role, created_at: row.created_at, profile: updatedProfile };
      res.status(200).end(JSON.stringify({ ok: true, user }));
      return;
    }

    res.status(405).end(JSON.stringify({ error: 'method_not_allowed' }));
  } catch (e) {
    console.error(e);
    res.status(401).end(JSON.stringify({ error: 'invalid_token', details: String(e.message || e) }));
  }
}
