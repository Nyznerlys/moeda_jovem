import { getPool } from './_db.js';

export default async function handler(req, res) {
  res.setHeader('Content-Type', 'application/json; charset=utf-8');

  if (req.method !== 'POST') {
    res.status(405).end(JSON.stringify({ error: 'method_not_allowed' }));
    return;
  }

  try {
    const pool = getPool();

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
    const quizId = Number(body.quizId);
    const score = Number(body.score ?? 0);
    const totalQuestions = Number(body.totalQuestions ?? 0);

    if (!quizId) {
      res.status(400).end(JSON.stringify({ error: 'invalid_quiz_id' }));
      return;
    }

    // Inserir tentativa de quiz
    const [result] = await pool.query(
      `INSERT INTO quiz_attempts (user_id, quiz_id, score, finished_at)
       VALUES (?, ?, ?, NOW())`,
      [userId, quizId, score]
    );

    const attemptId = result.insertId || null;

    // (Opcional) se o front enviar respostas detalhadas, podemos inserir na tabela answers
    if (Array.isArray(body.answers) && attemptId) {
      const answers = body.answers.filter(a => a.questionId && a.optionId).map(a => [attemptId, a.questionId, a.optionId, !!a.isCorrect]);
      if (answers.length) {
        // usar INSERT IGNORE para evitar erro por PK composta duplicada
        await pool.query(
          `INSERT IGNORE INTO answers (attempt_id, question_id, option_id, is_correct) VALUES ?`,
          [answers]
        );
      }
    }

    res.status(200).end(JSON.stringify({ ok: true, attemptId }));
  } catch (e) {
    console.error(e);
    res.status(500).end(JSON.stringify({ error: 'internal_error', details: String(e.message || e) }));
  }
}
