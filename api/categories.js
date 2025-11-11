import { getPool } from './_db.js';

export default async function handler(req, res) {
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  try {
    const pool = getPool();
    const url = new URL(req.url, 'http://localhost'); // parse query
    const userId = Number(url.searchParams.get('userId') ?? url.searchParams.get('userid') ?? 1);

    const [rows] = await pool.query(
      `SELECT id, user_id, name, ctype
       FROM categories
       WHERE user_id IS NULL OR user_id = ?
       ORDER BY ctype ASC, name ASC`,
      [userId]
    );

    res.status(200).end(JSON.stringify(rows));
  } catch (e) {
    console.error(e);
    res.status(500).end(JSON.stringify({ error: 'internal_error' }));
  }
}
