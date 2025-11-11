import { getPool } from './_db.js';

export default async function handler(req, res) {
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  try {
    const pool = getPool();

    const [courses] = await pool.query(`
      SELECT id, title, slug, description, level, created_at
      FROM courses
      ORDER BY id ASC
    `);

    for (const course of courses) {
      const [modules] = await pool.query(
        `SELECT id, course_id, title, sort_order
         FROM modules
         WHERE course_id = ?
         ORDER BY sort_order ASC, id ASC`,
        [course.id]
      );

      for (const mod of modules) {
        const [lessons] = await pool.query(
          `SELECT id, module_id, title, content_url, duration_min, sort_order
           FROM lessons
           WHERE module_id = ?
           ORDER BY sort_order ASC, id ASC`,
          [mod.id]
        );
        mod.lessons = lessons;
      }

      course.modules = modules;
    }

    res.status(200).end(JSON.stringify(courses));
  } catch (e) {
    console.error(e);
    res.status(500).end(JSON.stringify({ error: 'internal_error' }));
  }
}
