import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Award, Repeat, Home, CheckCircle, Star, Coins, Trophy, Medal, Crown, BookOpen, TrendingUp } from 'lucide-react';
import Confetti from 'react-confetti'; 
import { DIFFICULTY_LEVELS } from '@/lib/data';
import { audioManager } from '@/lib/audio';

const QuizResultScreen = ({ quizzes, userProfile }) => {
  const { quizId } = useParams();
  const navigate = useNavigate();
  const [showConfetti, setShowConfetti] = useState(false);
  const [windowDimensions, setWindowDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  const quiz = quizzes.find(q => q.id === quizId);
  const result = userProfile.completedQuizzes[quizId];

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (!quiz || !result) {
      navigate('/catalogo-quizzes'); 
      return;
    }
    
    const percentage = (result.score / result.totalQuestions) * 100;
    
    if (percentage >= 70) {
      setShowConfetti(true);
      
      // Sequência de celebração com sons
      setTimeout(() => {
        audioManager.playSound('achievement');
      }, 300);
      
      setTimeout(() => {
        audioManager.playSound('confetti');
      }, 800);
      
      setTimeout(() => {
        audioManager.playSound('levelUp');
      }, 1500);
      
      const timer = setTimeout(() => setShowConfetti(false), 6000); 
      return () => clearTimeout(timer);
    } else {
      // Som mais suave para resultados menores
      setTimeout(() => {
        audioManager.playSound('coin');
      }, 500);
    }
  }, [quiz, result, navigate]);

  if (!quiz || !result) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-green mx-auto mb-4"></div>
          <p className="text-text-gray">Carregando resultado...</p>
        </div>
      </div>
    );
  }

  const percentage = (result.score / result.totalQuestions) * 100;
  const passed = percentage >= 70;
  const perfect = percentage === 100;
  const earnedXP = result.score * 10;
  const earnedCoins = result.score * 5;
  const difficultyInfo = DIFFICULTY_LEVELS[quiz.difficulty];

  const getPerformanceMessage = () => {
    if (perfect) return "Perfeito! Você é um verdadeiro mestre das finanças! 🏆";
    if (percentage >= 90) return "Excelente! Você domina esses conceitos! 🌟";
    if (percentage >= 80) return "Muito bom! Continue assim! 💪";
    if (percentage >= 70) return "Bom trabalho! Você está no caminho certo! 👍";
    return "Continue estudando! A prática leva à perfeição! 📚";
  };

  const getPerformanceIcon = () => {
    if (perfect) return <Crown className="mx-auto h-20 w-20 text-yellow-500" />;
    if (percentage >= 90) return <Trophy className="mx-auto h-20 w-20 text-yellow-500" />;
    if (percentage >= 80) return <Medal className="mx-auto h-20 w-20 text-orange-500" />;
    if (passed) return <Award className="mx-auto h-20 w-20 text-green-500" />;
    return <CheckCircle className="mx-auto h-20 w-20 text-primary-green" />;
  };

  const getBonusXP = () => {
    if (perfect) return 50; // Bônus por pontuação perfeita
    if (percentage >= 90) return 25; // Bônus por excelência
    return 0;
  };

  const bonusXP = getBonusXP();
  const totalXP = earnedXP + bonusXP;

  const handleButtonClick = () => {
    audioManager.playSound('click');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
      {showConfetti && (
        <Confetti 
          width={windowDimensions.width}
          height={windowDimensions.height}
          recycle={false} 
          numberOfPieces={400}
          colors={['#56C554', '#4AD7E6', '#FFD700', '#FF6B6B', '#4ECDC4', '#9B59B6', '#E67E22']}
          gravity={0.3}
        />
      )}
      
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, type: 'spring' }}
        className="bg-white p-8 md:p-12 rounded-xl shadow-2xl w-full max-w-2xl text-center"
      >
        <motion.div
          className="celebration-animation mb-6"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: 'spring' }}
        >
          {getPerformanceIcon()}
        </motion.div>

        <motion.h1 
          className="text-3xl md:text-4xl font-bold text-text-dark mb-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          {getPerformanceMessage()}
        </motion.h1>
        
        <motion.div 
          className="mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <p className="text-lg text-text-gray mb-2">
            Quiz: <span className="font-semibold text-primary-green">{quiz.title}</span>
          </p>
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${difficultyInfo.color}`}>
            Nível {difficultyInfo.name}
          </span>
        </motion.div>

        <div className="my-8">
          <motion.p 
            className="text-6xl md:text-8xl font-extrabold text-primary-green mb-2"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.8, type: 'spring' }}
          >
            {result.score}/{result.totalQuestions}
          </motion.p>
          <motion.p 
            className="text-xl text-text-gray"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            {percentage.toFixed(0)}% de acerto
          </motion.p>
          
          {/* Barra de progresso visual */}
          <div className="w-full bg-gray-200 rounded-full h-4 mt-4 mb-2">
            <motion.div
              className={`h-4 rounded-full ${
                perfect ? 'bg-gradient-to-r from-yellow-400 to-yellow-600' :
                percentage >= 90 ? 'bg-gradient-to-r from-green-400 to-green-600' :
                percentage >= 80 ? 'bg-gradient-to-r from-blue-400 to-blue-600' :
                passed ? 'bg-gradient-to-r from-primary-green to-primary-green-medium' :
                'bg-gradient-to-r from-orange-400 to-red-500'
              }`}
              initial={{ width: 0 }}
              animate={{ width: `${percentage}%` }}
              transition={{ duration: 1.5, delay: 1.2 }}
            />
          </div>
        </div>

        {/* Recompensas */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.5 }}
          className="space-y-4 bg-primary-green-light p-6 rounded-lg mb-8"
        >
          <h3 className="text-lg font-semibold text-text-dark mb-4">Recompensas Ganhas:</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <motion.div 
              className="flex items-center justify-center gap-3 text-lg"
              whileHover={{ scale: 1.05 }}
            >
              <Star className="w-6 h-6 text-yellow-500" />
              <span className="font-semibold text-text-dark">+{totalXP} XP</span>
              {bonusXP > 0 && (
                <span className="text-sm text-green-600 font-medium">
                  (+{bonusXP} bônus!)
                </span>
              )}
            </motion.div>
            <motion.div 
              className="flex items-center justify-center gap-3 text-lg"
              whileHover={{ scale: 1.05 }}
            >
              <Coins className="w-6 h-6 text-yellow-600" />
              <span className="font-semibold text-text-dark">+{earnedCoins} Moedas</span>
            </motion.div>
          </div>
          
          {perfect && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.8 }}
              className="mt-4 p-3 bg-yellow-100 border border-yellow-300 rounded-lg"
            >
              <p className="text-yellow-800 font-medium flex items-center justify-center gap-2">
                <Crown className="w-5 h-5" />
                Pontuação Perfeita! Você é um verdadeiro especialista!
              </p>
            </motion.div>
          )}
        </motion.div>

        {/* Progresso do usuário */}
        <motion.div 
          className="mb-8 p-4 bg-gray-50 rounded-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6 }}
        >
          <h4 className="font-semibold text-text-dark mb-3">Seu Progresso:</h4>
          <div className="grid grid-cols-3 gap-4 text-center">
            <motion.div whileHover={{ scale: 1.05 }}>
              <p className="text-2xl font-bold text-primary-green">{userProfile.level}</p>
              <p className="text-sm text-text-gray">Nível</p>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }}>
              <p className="text-2xl font-bold text-accent-blue">{userProfile.xp}</p>
              <p className="text-sm text-text-gray">XP Total</p>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }}>
              <p className="text-2xl font-bold text-yellow-600">{Object.keys(userProfile.completedQuizzes || {}).length}</p>
              <p className="text-sm text-text-gray">Quizzes</p>
            </motion.div>
          </div>
        </motion.div>

        {/* Botões de ação */}
        <motion.div 
          className="space-y-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8 }}
        >
          <Link to={`/quiz/${quizId}`} onClick={handleButtonClick}>
            <Button size="lg" variant="outline" className="w-full border-primary-green text-primary-green hover:bg-primary-green-light">
              <Repeat className="mr-2 h-5 w-5" /> Refazer Quiz
            </Button>
          </Link>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <Link to="/catalogo-quizzes" onClick={handleButtonClick}>
              <Button size="lg" className="w-full bg-primary-green hover:bg-primary-green-medium text-white">
                <BookOpen className="mr-2 h-5 w-5" /> Mais Quizzes
              </Button>
            </Link>
            <Link to="/perfil" onClick={handleButtonClick}>
              <Button size="lg" variant="outline" className="w-full">
                <TrendingUp className="mr-2 h-5 w-5" /> Ver Progresso
              </Button>
            </Link>
          </div>
        </motion.div>

        {/* Dica motivacional */}
        {!passed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
            className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg"
          >
            <p className="text-blue-800 text-sm">
              <strong>💡 Dica:</strong> Releia os conceitos do quiz e tente novamente. 
              A educação financeira é uma jornada de aprendizado contínuo!
            </p>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default QuizResultScreen;