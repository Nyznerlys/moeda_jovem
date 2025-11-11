import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, Filter, CheckCircle, Play, ArrowLeft, Lock, Star, Trophy, Medal, Crown } from 'lucide-react';
import { DIFFICULTY_LEVELS, getWeeklyChallenge } from '@/lib/data';

const DifficultyBadge = ({ difficulty }) => {
  const difficultyInfo = DIFFICULTY_LEVELS[difficulty];
  return (
    <span className={`px-2 py-1 rounded-full text-xs font-medium ${difficultyInfo.color}`}>
      {difficultyInfo.name}
    </span>
  );
};

const QuizCard = ({ quiz, userProfile, isLocked = false }) => {
  const isCompleted = userProfile.completedQuizzes && userProfile.completedQuizzes[quiz.id];
  const progress = isCompleted ? (userProfile.completedQuizzes[quiz.id].score / userProfile.completedQuizzes[quiz.id].totalQuestions) * 100 : 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={`bg-white rounded-xl shadow-lg card-shadow overflow-hidden flex flex-col hover:shadow-xl transition-shadow duration-300 ${isLocked ? 'opacity-60' : ''}`}
    >
      <div className={`p-4 ${quiz.color} flex items-center justify-center h-32 relative`}>
        {isLocked && (
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <Lock className="w-8 h-8 text-white" />
          </div>
        )}
        {React.cloneElement(quiz.icon, { className: "w-16 h-16 opacity-80" })}
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-semibold text-text-dark flex-grow">{quiz.title}</h3>
          <DifficultyBadge difficulty={quiz.difficulty} />
        </div>
        <p className="text-sm text-text-gray mb-4 flex-grow line-clamp-3">{quiz.description}</p>
        <div className="text-xs text-text-gray mb-1">Categoria: {quiz.category}</div>
        
        {isCompleted && (
          <div className="my-2">
            <div className="flex items-center justify-between text-xs text-text-gray mb-1">
              <span>Progresso: {progress.toFixed(0)}%</span>
              <div className="flex items-center gap-1">
                {progress === 100 && <Crown className="w-4 h-4 text-yellow-500" />}
                {progress >= 80 && <Trophy className="w-4 h-4 text-yellow-600" />}
                {progress >= 60 && <Medal className="w-4 h-4 text-orange-500" />}
                <CheckCircle className="w-4 h-4 text-primary-green" />
              </div>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-1.5">
              <div className="bg-primary-green h-1.5 rounded-full" style={{ width: `${progress}%` }}></div>
            </div>
          </div>
        )}

        {!isLocked ? (
          <Link to={`/quiz/${quiz.id}`} className="mt-auto">
            <Button className="w-full bg-primary-green hover:bg-primary-green-medium text-white mt-4">
              <Play className="mr-2 h-4 w-4" /> {isCompleted ? 'Refazer Quiz' : 'Começar Quiz'}
            </Button>
          </Link>
        ) : (
          <Button disabled className="w-full bg-gray-300 text-gray-500 mt-4 cursor-not-allowed">
            <Lock className="mr-2 h-4 w-4" /> Bloqueado
          </Button>
        )}
      </div>
    </motion.div>
  );
};

const WeeklyChallengeCard = ({ challenge, userProfile }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl p-6 text-white mb-8"
    >
      <div className="flex items-center gap-3 mb-3">
        <Star className="w-6 h-6 text-yellow-300" />
        <h3 className="text-xl font-bold">Desafio da Semana</h3>
      </div>
      <h4 className="text-lg font-semibold mb-2">{challenge.title}</h4>
      <p className="text-purple-100 mb-4">{challenge.description}</p>
      <div className="flex items-center gap-4 text-sm">
        <span className="flex items-center gap-1">
          <Trophy className="w-4 h-4" />
          +{challenge.xpReward} XP
        </span>
        <span className="flex items-center gap-1">
          <Star className="w-4 h-4" />
          +{challenge.coinReward} Moedas
        </span>
      </div>
    </motion.div>
  );
};

const QuizCatalogScreen = ({ quizzes, userProfile }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [selectedDifficulty, setSelectedDifficulty] = useState('Todos');
  const location = useLocation();

  // Normalize numeric profile values to avoid string concatenation or NaN
  const level = Number(userProfile.level ?? 1);
  const xp = Number(userProfile.xp ?? 0);

  React.useEffect(() => {
    const params = new URLSearchParams(location.search);
    const category = params.get('category');
    if (category) {
      setSelectedCategory(category);
    }
  }, [location.search]);

  const categories = useMemo(() => ['Todos', ...new Set(quizzes.map(q => q.category))], [quizzes]);
  const difficulties = useMemo(() => ['Todos', ...Object.keys(DIFFICULTY_LEVELS)], []);

  const completedCount = Object.keys(userProfile.completedQuizzes || {}).length;
  const weeklyChallenge = getWeeklyChallenge();

  const { availableQuizzes, lockedQuizzes } = useMemo(() => {
    const available = [];
    const locked = [];

    quizzes.forEach(quiz => {
      const difficultyInfo = DIFFICULTY_LEVELS[quiz.difficulty];
      const isUnlocked = level >= difficultyInfo.minLevel;
      
      // Sistema de desbloqueio adicional baseado em quizzes completados
      let additionalUnlock = true;
      if (quiz.difficulty === 'INTERMEDIARIO' && completedCount < 5) {
        additionalUnlock = false;
      } else if (quiz.difficulty === 'AVANCADO' && completedCount < 15) {
        additionalUnlock = false;
      }

      if (isUnlocked && additionalUnlock) {
        available.push(quiz);
      } else {
        locked.push(quiz);
      }
    });

    return { availableQuizzes: available, lockedQuizzes: locked };
  }, [quizzes, level, completedCount]);

  const filteredQuizzes = useMemo(() => {
    const allQuizzes = [...availableQuizzes, ...lockedQuizzes];
    return allQuizzes.filter(quiz => {
      const matchesSearch = quiz.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            quiz.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'Todos' || quiz.category === selectedCategory;
      const matchesDifficulty = selectedDifficulty === 'Todos' || quiz.difficulty === selectedDifficulty;
      return matchesSearch && matchesCategory && matchesDifficulty;
    });
  }, [availableQuizzes, lockedQuizzes, searchTerm, selectedCategory, selectedDifficulty]);

  return (
    <div className="min-h-screen bg-gray-50 p-4 pb-24 md:p-8 md:pb-24">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          {location.search && (
             <Link to="/inicio" className="inline-flex items-center text-text-gray hover:text-primary-green mb-4 group">
                <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
                Voltar ao Início
            </Link>
          )}
          <h1 className="text-3xl md:text-4xl font-bold text-primary-green mb-2">Moeda Jovem - Quizzes</h1>
          <p className="text-lg text-text-gray">Baseado nos ensinamentos de "Pai Rico, Pai Pobre" e "O Homem Mais Rico da Babilônia"</p>
          
          <div className="mt-4 flex flex-wrap gap-4 text-sm">
            <div className="flex items-center gap-2 bg-green-100 px-3 py-1 rounded-full">
              <CheckCircle className="w-4 h-4 text-green-600" />
              <span className="text-green-800">{completedCount} quizzes completados</span>
            </div>
            <div className="flex items-center gap-2 bg-blue-100 px-3 py-1 rounded-full">
              <Star className="w-4 h-4 text-blue-600" />
              <span className="text-blue-800">Nível {level}</span>
            </div>
            <div className="flex items-center gap-2 bg-yellow-100 px-3 py-1 rounded-full">
              <Trophy className="w-4 h-4 text-yellow-600" />
              <span className="text-yellow-800">{xp} XP</span>
            </div>
          </div>
        </motion.div>

        <WeeklyChallengeCard challenge={weeklyChallenge} userProfile={userProfile} />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8 p-6 bg-white rounded-xl shadow-md card-shadow"
        >
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-grow">
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2 w-8 flex items-center justify-center">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <Input
                type="text"
                placeholder="Buscar quiz por título ou descrição..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{ paddingLeft: "3rem" }}
                className="input-field w-full"
              />
            </div>
            <div className="relative md:w-1/4">
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2 w-8 flex items-center justify-center">
                <Filter className="h-5 w-5 text-gray-400" />
              </div>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                style={{ paddingLeft: "3rem" }}
                className="input-field w-full appearance-none"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
            <div className="relative md:w-1/4">
              <select
                value={selectedDifficulty}
                onChange={(e) => setSelectedDifficulty(e.target.value)}
                className="input-field w-full appearance-none"
              >
                {difficulties.map(difficulty => (
                  <option key={difficulty} value={difficulty}>
                    {difficulty === 'Todos' ? 'Todas as Dificuldades' : DIFFICULTY_LEVELS[difficulty].name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </motion.div>

        {completedCount < 5 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg"
          >
            <p className="text-blue-800 text-sm">
              <strong>💡 Dica:</strong> Complete 5 quizzes para desbloquear o nível Intermediário! 
              Faltam {5 - completedCount} quizzes.
            </p>
          </motion.div>
        )}

        {completedCount >= 5 && completedCount < 15 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg"
          >
            <p className="text-yellow-800 text-sm">
              <strong>🎯 Próximo Objetivo:</strong> Complete 15 quizzes para desbloquear o nível Avançado! 
              Faltam {15 - completedCount} quizzes.
            </p>
          </motion.div>
        )}

        {filteredQuizzes.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {filteredQuizzes.map(quiz => {
              const isLocked = lockedQuizzes.includes(quiz);
              return (
                <QuizCard 
                  key={quiz.id} 
                  quiz={quiz} 
                  userProfile={userProfile} 
                  isLocked={isLocked}
                />
              );
            })}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <img  alt="Ilustração de busca vazia" className="w-40 h-40 mx-auto mb-4 opacity-50" src="https://images.unsplash.com/photo-1677498411273-3ef14a27a037" />
            <p className="text-xl text-text-gray">Nenhum quiz encontrado com esses filtros.</p>
            <p className="text-text-gray">Tente ajustar sua busca ou limpar os filtros.</p>
          </motion.div>
        )}

        {lockedQuizzes.length > 0 && searchTerm === '' && selectedCategory === 'Todos' && selectedDifficulty === 'Todos' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-12"
          >
            <h2 className="text-2xl font-bold text-text-dark mb-4 flex items-center gap-2">
              <Lock className="w-6 h-6" />
              Quizzes Bloqueados
            </h2>
            <p className="text-text-gray mb-6">
              Complete mais quizzes e suba de nível para desbloquear estes desafios!
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {lockedQuizzes.map(quiz => (
                <QuizCard 
                  key={quiz.id} 
                  quiz={quiz} 
                  userProfile={userProfile} 
                  isLocked={true}
                />
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default QuizCatalogScreen;