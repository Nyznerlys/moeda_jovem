import React from 'react';
import { Star, Brain, Crown, Award, Trophy, Medal, Zap, TrendingUp } from 'lucide-react';

export const ACHIEVEMENTS = [
  {
    id: 'first_quiz',
    title: 'Primeiro Passo',
    description: 'Complete seu primeiro quiz',
    icon: <Star className="w-6 h-6" />,
    condition: (profile) => Object.keys(profile.completedQuizzes || {}).length >= 1,
    xpReward: 50,
    coinReward: 25,
    rarity: 'comum'
  },
  {
    id: 'pai_rico_iniciante',
    title: 'Discípulo do Pai Rico',
    description: 'Complete 5 quizzes sobre mentalidade financeira',
    icon: <Brain className="w-6 h-6" />,
    condition: (profile) => {
      const mentalityQuizzes = ['q1_1', 'q1_2', 'q1_3', 'q2_1', 'q2_2'];
      return mentalityQuizzes.filter(id => profile.completedQuizzes?.[id]).length >= 5;
    },
    xpReward: 100,
    coinReward: 50,
    rarity: 'raro'
  },
  {
    id: 'babilonia_sabio',
    title: 'Sábio da Babilônia',
    description: 'Complete todos os quizzes sobre os ensinamentos babilônicos',
    icon: <Crown className="w-6 h-6" />,
    condition: (profile) => {
      const babylonQuizzes = ['q3_1', 'q3_2', 'q3_3', 'q4_1', 'q4_2'];
      return babylonQuizzes.every(id => profile.completedQuizzes?.[id]);
    },
    xpReward: 200,
    coinReward: 100,
    rarity: 'lendario'
  },
  {
    id: 'perfect_score',
    title: 'Pontuação Perfeita',
    description: 'Acerte todas as questões de um quiz',
    icon: <Award className="w-6 h-6" />,
    condition: (profile) => {
      const quizzes = profile.completedQuizzes || {};
      return Object.values(quizzes).some(quiz => quiz.score === quiz.totalQuestions);
    },
    xpReward: 75,
    coinReward: 40,
    rarity: 'raro'
  },
  {
    id: 'quiz_master',
    title: 'Mestre dos Quizzes',
    description: 'Complete 15 quizzes',
    icon: <Trophy className="w-6 h-6" />,
    condition: (profile) => Object.keys(profile.completedQuizzes || {}).length >= 15,
    xpReward: 150,
    coinReward: 75,
    rarity: 'epico'
  },
  {
    id: 'millionaire_mindset',
    title: 'Mentalidade Milionária',
    description: 'Complete todos os 30 quizzes',
    icon: <Medal className="w-6 h-6" />,
    condition: (profile) => Object.keys(profile.completedQuizzes || {}).length >= 30,
    xpReward: 500,
    coinReward: 250,
    rarity: 'lendario'
  },
  {
    id: 'streak_master',
    title: 'Consistência é Tudo',
    description: 'Mantenha uma sequência de 7 dias',
    icon: <Zap className="w-6 h-6" />,
    condition: (profile) => profile.streak >= 7,
    xpReward: 100,
    coinReward: 60,
    rarity: 'raro'
  },
  {
    id: 'level_champion',
    title: 'Campeão de Nível',
    description: 'Alcance o nível 10',
    icon: <TrendingUp className="w-6 h-6" />,
    condition: (profile) => profile.level >= 10,
    xpReward: 300,
    coinReward: 150,
    rarity: 'epico'
  }
];