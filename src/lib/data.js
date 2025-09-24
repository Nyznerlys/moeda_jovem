import { DIFFICULTY_LEVELS, DEFAULT_USER_PROFILE, NAV_ITEMS } from './constants';
import { ACHIEVEMENTS } from './achievements';
import { LEARNING_TRACKS } from './tracks';
import { QUIZZES_DATA } from './quizzes';

export {
  DIFFICULTY_LEVELS,
  DEFAULT_USER_PROFILE,
  NAV_ITEMS,
  ACHIEVEMENTS,
  LEARNING_TRACKS,
  QUIZZES_DATA
};

export const getNextUnlockedQuizzes = (userProfile) => {
  const completedQuizzes = userProfile.completedQuizzes || {};
  const allQuizzes = Object.entries(QUIZZES_DATA).map(([id, data]) => ({ id, ...data }));
  
  // Sistema de desbloqueio progressivo
  const completedCount = Object.keys(completedQuizzes).length;
  
  // Iniciante: primeiros 10 quizzes sempre disponíveis
  const beginnerQuizzes = allQuizzes.filter(quiz => 
    DIFFICULTY_LEVELS[quiz.difficulty].minLevel <= 1
  );
  
  // Intermediário: desbloqueado após 5 quizzes
  const intermediateQuizzes = allQuizzes.filter(quiz => 
    DIFFICULTY_LEVELS[quiz.difficulty].minLevel <= 3 && completedCount >= 5
  );
  
  // Avançado: desbloqueado após 15 quizzes
  const advancedQuizzes = allQuizzes.filter(quiz => 
    DIFFICULTY_LEVELS[quiz.difficulty].minLevel <= 5 && completedCount >= 15
  );
  
  const availableQuizzes = [...beginnerQuizzes, ...intermediateQuizzes, ...advancedQuizzes];
  const uncompletedQuizzes = availableQuizzes.filter(quiz => !completedQuizzes[quiz.id]);
  
  return uncompletedQuizzes.slice(0, 6); // Mostra próximos 6 quizzes disponíveis
};

export const getWeeklyChallenge = () => {
  const challenges = [
    {
      id: 'week_1',
      title: 'Desafio do Décimo',
      description: 'Guarde pelo menos 10% de tudo que ganhar esta semana',
      xpReward: 100,
      coinReward: 50
    },
    {
      id: 'week_2',
      title: 'Caçador de Gastos',
      description: 'Identifique e elimine 3 gastos desnecessários',
      xpReward: 80,
      coinReward: 40
    },
    {
      id: 'week_3',
      title: 'Estudante Dedicado',
      description: 'Complete 3 quizzes esta semana',
      xpReward: 120,
      coinReward: 60
    }
  ];
  
  const weekNumber = Math.floor(Date.now() / (7 * 24 * 60 * 60 * 1000)) % challenges.length;
  return challenges[weekNumber];
};