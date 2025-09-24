import React from 'react';
import { Brain, BarChart2, Building, Wallet, TrendingUp, BookOpen } from 'lucide-react';

export const LEARNING_TRACKS = [
  {
    id: 1,
    title: "Mentalidade Financeira",
    description: "Desenvolva a mentalidade dos ricos baseada nos ensinamentos de Robert Kiyosaki",
    icon: <Brain className="w-8 h-8" />,
    color: "bg-purple-100",
    borderColor: "border-purple-500",
    lessons: 10,
    xp: 300,
    difficulty: 'INICIANTE',
    quizzes: ['q1_1', 'q1_2', 'q1_3', 'q1_4', 'q1_5']
  },
  {
    id: 2,
    title: "Ativos vs Passivos",
    description: "Aprenda a diferença fundamental entre ativos e passivos",
    icon: <BarChart2 className="w-8 h-8" />,
    color: "bg-green-100",
    borderColor: "border-green-500",
    lessons: 8,
    xp: 250,
    difficulty: 'INICIANTE',
    quizzes: ['q2_1', 'q2_2', 'q2_3', 'q2_4']
  },
  {
    id: 3,
    title: "Sabedoria da Babilônia",
    description: "Os segredos milenares de construção de riqueza",
    icon: <Building className="w-8 h-8" />,
    color: "bg-yellow-100",
    borderColor: "border-yellow-500",
    lessons: 12,
    xp: 400,
    difficulty: 'INTERMEDIARIO',
    quizzes: ['q3_1', 'q3_2', 'q3_3', 'q3_4', 'q3_5', 'q3_6']
  },
  {
    id: 4,
    title: "Controle de Gastos",
    description: "Domine suas despesas e viva abaixo de suas possibilidades",
    icon: <Wallet className="w-8 h-8" />,
    color: "bg-blue-100",
    borderColor: "border-blue-500",
    lessons: 6,
    xp: 200,
    difficulty: 'INICIANTE',
    quizzes: ['q4_1', 'q4_2', 'q4_3']
  },
  {
    id: 5,
    title: "Investimentos e Renda Passiva",
    description: "Construa fluxos de renda que trabalham para você",
    icon: <TrendingUp className="w-8 h-8" />,
    color: "bg-indigo-100",
    borderColor: "border-indigo-500",
    lessons: 15,
    xp: 500,
    difficulty: 'INTERMEDIARIO',
    quizzes: ['q5_1', 'q5_2', 'q5_3', 'q5_4', 'q5_5']
  },
  {
    id: 6,
    title: "Educação Financeira Contínua",
    description: "A importância do aprendizado constante em finanças",
    icon: <BookOpen className="w-8 h-8" />,
    color: "bg-pink-100",
    borderColor: "border-pink-500",
    lessons: 8,
    xp: 300,
    difficulty: 'AVANCADO',
    quizzes: ['q6_1', 'q6_2', 'q6_3', 'q6_4']
  }
];