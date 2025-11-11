import { getPool } from './_db.js';
export default async function handler(req, res) {
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  try {
    const pool = getPool();
    const [rows] = await pool.query('SELECT 1 AS ok');
    res.status(200).end(JSON.stringify({ db_ok: rows[0]?.ok === 1 }));
  } catch (e) {
    res.status(500).end(JSON.stringify({ db_ok: false, error: String(e.message || e) }));
  }
}
