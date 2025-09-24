export const DIFFICULTY_LEVELS = {
  INICIANTE: { name: 'Iniciante', color: 'bg-green-100 text-green-800', minLevel: 1 },
  INTERMEDIARIO: { name: 'Intermediário', color: 'bg-yellow-100 text-yellow-800', minLevel: 3 },
  AVANCADO: { name: 'Avançado', color: 'bg-red-100 text-red-800', minLevel: 5 }
};

export const DEFAULT_USER_PROFILE = {
  name: 'Jovem Aprendiz',
  level: 1,
  xp: 0,
  coins: 100,
  streak: 0,
  completedTracks: [],
  achievements: [],
  completedQuizzes: {},
  weeklyChallenge: null,
  lastLoginDate: null,
  email: '',
  username: '',
  profileImage: 'https://images.unsplash.com/photo-1595152772835-219674b2a8a6',
  soundEnabled: true,
  musicEnabled: true,
};

export const PROFILE_IMAGES = [
  {
    id: 1,
    url: 'https://images.unsplash.com/photo-1595152772835-219674b2a8a6',
    alt: 'Jovem sorrindo - Perfil 1'
  },
  {
    id: 2,
    url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
    alt: 'Jovem profissional - Perfil 2'
  },
  {
    id: 3,
    url: 'https://images.unsplash.com/photo-1494790108755-2616b612b786',
    alt: 'Jovem estudante - Perfil 3'
  },
  {
    id: 4,
    url: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
    alt: 'Jovem empreendedor - Perfil 4'
  },
  {
    id: 5,
    url: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80',
    alt: 'Jovem determinada - Perfil 5'
  },
  {
    id: 6,
    url: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e',
    alt: 'Jovem confiante - Perfil 6'
  }
];

export const NAV_ITEMS = [
  { path: "/catalogo-quizzes", label: "Quizzes" },
  { path: "/perfil", label: "Perfil" },
  { path: "/sobre", label: "Sobre" },
];