require('dotenv').config();
const express = require('express');
const cors = require('cors');
const prisma = require('./db');

// 👇 habilita JSON para BigInt (ids do MySQL)
BigInt.prototype.toJSON = function () { return this.toString(); };

const app = express();
app.use(cors());
app.use(express.json());

// 👇 CORRIGIR ACENTOS (força UTF-8 no JSON)
app.use((_, res, next) => {
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  next();
});

// ping
app.get('/health', (_req, res) => res.json({ ok: true }));

// cursos com módulos e aulas
app.get('/courses', async (_req, res) => {
  const courses = await prisma.courses.findMany({
    include: {
      modules: { orderBy: { sort_order: 'asc' },
        include: { lessons: { orderBy: { sort_order: 'asc' } } } }
    }
  });
  res.json(courses);
});

// categorias globais + do usuário
app.get('/categories', async (req, res) => {
  const userId = Number(req.query.userId ?? 1);
  const categories = await prisma.categories.findMany({
    where: { OR: [{ user_id: null }, { user_id: userId }] },
    orderBy: [{ ctype: 'asc' }, { name: 'asc' }]
  });
  res.json(categories);
});

// progresso de aula
app.patch('/lessons/:id/progress', async (req, res) => {
  const lessonId = Number(req.params.id);
  const { userId = 1, status = 'em_andamento', last_pos = 0 } = req.body;

  await prisma.lesson_progress.upsert({
    where: { user_id_lesson_id: { user_id: userId, lesson_id: lessonId } },
    create: { user_id: userId, lesson_id: lessonId, status, last_pos },
    update: { status, last_pos }
  });
  res.json({ ok: true });
});

const PORT = process.env.PORT || 3333;
app.listen(PORT, () => console.log(`API running on http://localhost:${PORT}`));
