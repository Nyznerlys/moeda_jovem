import bcrypt from 'bcryptjs';
import { getPool } from '../_db.js';
import { createAccessToken, createRefreshToken, setAuthCookies } from './_tokens.js';

export default async function handler(req, res) {
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  if (req.method !== 'POST') {
    res.status(405).end(JSON.stringify({ error: 'method_not_allowed' }));
    return;
  }

  try {
    const body = await new Promise((resolve, reject) => {
      let data = '';
      req.on('data', c => (data += c));
      req.on('end', () => { try { resolve(data ? JSON.parse(data) : {}); } catch (e) { reject(e); } });
      req.on('error', reject);
    });

    const { email, password, name } = body;
    if (!email || !password) {
      res.status(400).end(JSON.stringify({ error: 'missing_fields' }));
      return;
    }

    const pool = getPool();
    const [rows] = await pool.query('SELECT id FROM users WHERE email = ? LIMIT 1', [email]);
    if (rows.length) {
      res.status(409).end(JSON.stringify({ error: 'user_exists' }));
      return;
    }

    const password_hash = await bcrypt.hash(password, 10);
    const displayName = name || String(email).split('@')[0];
    const [result] = await pool.query('INSERT INTO users (name, email, password_hash) VALUES (?, ?, ?)', [displayName, email, password_hash]);
    const userId = result.insertId;

    // create tokens
    const accessSecret = process.env.JWT_ACCESS_SECRET;
    const refreshSecret = process.env.JWT_REFRESH_SECRET;

    // Developer fallback when JWT secrets are missing (only outside production).
    if (!accessSecret || !refreshSecret) {
      if (process.env.VERCEL_ENV === 'production') {
        res.status(500).end(JSON.stringify({ error: 'missing_jwt_secrets' }));
        return;
      }

      console.warn('JWT secrets missing — returning dev user object (no cookies will be set)');
      res.status(201).end(JSON.stringify({ ok: true, user: { id: userId, email, name: displayName }, devAuth: true }));
      return;
    }

    const accessToken = createAccessToken({ sub: userId, email }, accessSecret);
    const refreshToken = createRefreshToken({ sub: userId, email }, refreshSecret);
    setAuthCookies(res, accessToken, refreshToken, process.env.VERCEL_ENV === 'production');

    res.status(201).end(JSON.stringify({ ok: true, user: { id: userId, email, name: displayName } }));
  } catch (e) {
    console.error(e);
    res.status(500).end(JSON.stringify({ error: 'internal_error', details: String(e.message || e) }));
  }
}
