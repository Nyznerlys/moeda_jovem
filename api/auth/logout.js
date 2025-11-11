import { clearAuthCookies } from './_tokens.js';

export default async function handler(req, res) {
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  if (req.method !== 'POST') {
    res.status(405).end(JSON.stringify({ error: 'method_not_allowed' }));
    return;
  }
  try {
    clearAuthCookies(res, process.env.VERCEL_ENV === 'production');
    res.status(200).end(JSON.stringify({ ok: true }));
  } catch (e) {
    console.error(e);
    res.status(500).end(JSON.stringify({ error: 'internal_error' }));
  }
}
