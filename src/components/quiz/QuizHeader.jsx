import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Volume2, VolumeX, Star, Target } from 'lucide-react';
import { DIFFICULTY_LEVELS } from '@/lib/data';
import { audioManager } from '@/lib/audio';

const QuizHeader = ({ 
  quizData, 
  currentQuestionIndex, 
  score, 
  timeSpent, 
  userProfile, 
  onToggleMusic 
}) => {
  const difficultyInfo = DIFFICULTY_LEVELS[quizData.difficulty];

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleToggleMusic = () => {
    audioManager.playSound('click');
    onToggleMusic();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="mb-6"
    >
      <div className="flex items-center justify-between mb-4">
        <Link 
          to="/catalogo-quizzes" 
          className="inline-flex items-center text-text-gray hover:text-primary-green group"
          onClick={() => audioManager.playSound('click')}
        >
          <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
          Voltar ao Catálogo
        </Link>
        
        <Button
          variant="outline"
          size="sm"
          onClick={handleToggleMusic}
          className="flex items-center gap-2"
        >
          {userProfile.musicEnabled ? (
            <Volume2 className="w-4 h-4" />
          ) : (
            <VolumeX className="w-4 h-4" />
          )}
          Música
        </Button>
      </div>
      
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-primary-green">{quizData.title}</h1>
          <div className="flex items-center gap-4 mt-2">
            <span className="text-sm text-text-gray">
              Questão {currentQuestionIndex + 1} de {quizData.questions.length}
            </span>
            <span className={`px-2 py-1 rounded-full text-xs font-medium ${difficultyInfo.color}`}>
              {difficultyInfo.name}
            </span>
          </div>
        </div>
        <div className="flex items-center gap-4 text-sm text-text-gray">
          <div className="flex items-center gap-1">
            <Target className="w-4 h-4" />
            <span>Pontuação: {score}/{currentQuestionIndex + 1}</span>
          </div>
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4" />
            <span>Tempo: {formatTime(timeSpent)}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default QuizHeader;