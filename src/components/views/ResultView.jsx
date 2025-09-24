import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Trophy, Target, Coins, Star } from 'lucide-react';

const ResultView = ({ quizScore, totalQuestions, onNavigateHome, onRetryQuiz }) => {
  const percentage = (quizScore / totalQuestions) * 100;
  const passed = percentage >= 70;

  return (
    <div className="min-h-screen p-4 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-md mx-auto text-center"
      >
        <div className="card-gradient rounded-xl p-8">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            className={`w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center ${
              passed ? 'bg-green-500' : 'bg-orange-500'
            }`}
          >
            {passed ? <Trophy className="w-10 h-10 text-white" /> : <Target className="w-10 h-10 text-white" />}
          </motion.div>

          <h2 className="text-3xl font-bold mb-4">
            {passed ? 'Parabéns! 🎉' : 'Continue tentando! 💪'}
          </h2>

          <div className="text-6xl font-bold mb-4 text-yellow-400">
            {percentage.toFixed(0)}%
          </div>

          <p className="text-white/70 mb-6">
            Você acertou {quizScore} de {totalQuestions} questões
          </p>

          {passed && (
            <div className="space-y-2 mb-6">
              <div className="flex items-center justify-center gap-2 text-green-400">
                <Coins className="w-5 h-5" />
                <span>+{quizScore * 10} moedas ganhas!</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-teal-400">
                <Star className="w-5 h-5" />
                <span>+{Math.floor(percentage * 2)} XP ganhos!</span>
              </div>
            </div>
          )}

          <div className="space-y-3">
            <Button 
              onClick={onNavigateHome}
              className="w-full bg-gradient-to-r from-green-500 to-teal-600 hover:from-green-600 hover:to-teal-700"
            >
              Voltar ao Início
            </Button>
            
            {!passed && (
              <Button 
                onClick={onRetryQuiz}
                variant="outline"
                className="w-full border-white/20 text-white hover:bg-white/10"
              >
                Tentar Novamente
              </Button>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ResultView;