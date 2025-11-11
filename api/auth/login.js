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

    const { email, password } = body;
    if (!email || !password) {
      res.status(400).end(JSON.stringify({ error: 'missing_fields' }));
      return;
    }

    const pool = getPool();
    const [rows] = await pool.query('SELECT id, name, email, password_hash FROM users WHERE email = ? LIMIT 1', [email]);
    if (!rows.length) {
      res.status(401).end(JSON.stringify({ error: 'invalid_credentials' }));
      return;
    }
    const user = rows[0];
    const ok = await bcrypt.compare(password, user.password_hash);
    if (!ok) {
      res.status(401).end(JSON.stringify({ error: 'invalid_credentials' }));
      return;
    }

    const accessSecret = process.env.JWT_ACCESS_SECRET;
    const refreshSecret = process.env.JWT_REFRESH_SECRET;

    // If JWT secrets are missing, allow a developer fallback in non-production so preview deployments
    // or local dev can still receive a user object (but cookies won't be set). In production we keep strict behavior.
    if (!accessSecret || !refreshSecret) {
      if (process.env.VERCEL_ENV === 'production') {
        res.status(500).end(JSON.stringify({ error: 'missing_jwt_secrets' }));
        return;
      }

      console.warn('JWT secrets missing — returning dev user object (no cookies will be set)');
      res.status(200).end(JSON.stringify({ ok: true, user: { id: user.id, name: user.name, email: user.email }, devAuth: true }));
      return;
    }

    const accessToken = createAccessToken({ sub: user.id, email: user.email }, accessSecret);
    const refreshToken = createRefreshToken({ sub: user.id, email: user.email }, refreshSecret);
    setAuthCookies(res, accessToken, refreshToken, process.env.VERCEL_ENV === 'production');

    res.status(200).end(JSON.stringify({ ok: true, user: { id: user.id, name: user.name, email: user.email } }));
  } catch (e) {
    console.error(e);
    res.status(500).end(JSON.stringify({ error: 'internal_error', details: String(e.message || e) }));
  }
}
