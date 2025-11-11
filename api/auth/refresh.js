import jwt from 'jsonwebtoken';
import { createAccessToken, parseCookies, setAuthCookies } from './_tokens.js';

export default async function handler(req, res) {
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  try {
    const cookies = parseCookies(req);
    const token = cookies['refresh_token'];
    const refreshSecret = process.env.JWT_REFRESH_SECRET;
    const accessSecret = process.env.JWT_ACCESS_SECRET;
    if (!token || !refreshSecret || !accessSecret) {
      res.status(401).end(JSON.stringify({ error: 'no_token_or_secrets' }));
      return;
    }
    const payload = jwt.verify(token, refreshSecret);
    const { sub, email } = payload;
    const newAccess = createAccessToken({ sub, email }, accessSecret);
    const newRefresh = token; // keep same refresh token until expiry
    setAuthCookies(res, newAccess, newRefresh, process.env.VERCEL_ENV === 'production');
    res.status(200).end(JSON.stringify({ ok: true }));
  } catch (e) {
    console.error(e);
    res.status(401).end(JSON.stringify({ error: 'invalid_refresh', details: String(e.message || e) }));
  }
}
