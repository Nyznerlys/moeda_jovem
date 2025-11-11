import { getPool } from './_db.js';

export default async function handler(req, res) {
  res.setHeader('Content-Type', 'application/json; charset=utf-8');

  if (req.method !== 'PATCH') {
    res.status(405).end(JSON.stringify({ error: 'method_not_allowed' }));
    return;
  }

  try {
    const pool = getPool();

    const url = new URL(req.url, 'http://localhost');
    const lessonId = Number(url.pathname.split('/').slice(-2, -1)[0]); // pega o :id (antes de /progress)

    const body = await new Promise((resolve, reject) => {
      let data = '';
      req.on('data', c => (data += c));
      req.on('end', () => {
        try { resolve(data ? JSON.parse(data) : {}); }
        catch (err) { reject(err); }
      });
      req.on('error', reject);
    });

    const userId = Number(body.userId ?? 1);
    const status = String(body.status ?? 'em_andamento');
    const last_pos = Number(body.last_pos ?? 0);

    await pool.query(
      `INSERT INTO lesson_progress (user_id, lesson_id, status, last_pos)
       VALUES (?, ?, ?, ?)
       ON DUPLICATE KEY UPDATE status=VALUES(status), last_pos=VALUES(last_pos)`,
      [userId, lessonId, status, last_pos]
    );

    res.status(200).end(JSON.stringify({ ok: true }));
  } catch (e) {
    console.error(e);
    res.status(500).end(JSON.stringify({ error: 'internal_error' }));
  }
}
