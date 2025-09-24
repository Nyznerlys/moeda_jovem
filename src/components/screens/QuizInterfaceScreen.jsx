
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useToast } from '@/components/ui/use-toast';
import { DIFFICULTY_LEVELS } from '@/lib/data';
import { audioManager } from '@/lib/audio';
import QuizHeader from '@/components/quiz/QuizHeader';
import QuizProgressBar from '@/components/quiz/QuizProgressBar';
import QuestionCard from '@/components/quiz/QuestionCard';

const QuizInterfaceScreen = ({ quizzes, onQuizComplete, userProfile }) => {
  const { quizId } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();

  const [quizData, setQuizData] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [timeSpent, setTimeSpent] = useState(0);

  useEffect(() => {
    const currentQuiz = quizzes.find(q => q.id === quizId);
    if (currentQuiz) {
      setQuizData(currentQuiz);
      if (userProfile.musicEnabled !== false) {
        audioManager.playBackgroundMusic();
      }
    } else {
      navigate('/catalogo-quizzes'); 
    }

    return () => {
      audioManager.stopBackgroundMusic();
    };
  }, [quizId, quizzes, navigate, userProfile.musicEnabled]);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeSpent(prev => prev + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  if (!quizData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-green mx-auto mb-4"></div>
          <p className="text-text-gray">Carregando quiz...</p>
        </div>
      </div>
    );
  }

  const currentQuestion = quizData.questions[currentQuestionIndex];

  const handleAnswerSelect = (index) => {
    if (!isAnswerSubmitted) {
      setSelectedAnswer(index);
    }
  };

  const handleSubmitAnswer = () => {
    if (selectedAnswer === null) {
      audioManager.playSound('incorrect');
      toast({ 
        title: "Selecione uma resposta!", 
        description: "Você precisa escolher uma opção para continuar.", 
        variant: "destructive" 
      });
      return;
    }
    
    setIsAnswerSubmitted(true);
    
    // Para drag-and-drop, a resposta correta é sempre o índice 0
    const isCorrect = currentQuestion.type === 'drag_drop' 
      ? selectedAnswer === 0
      : selectedAnswer === currentQuestion.correctAnswerIndex;

    if (isCorrect) {
      setScore(prevScore => prevScore + 1);
      audioManager.playSound('correct');
      toast({ 
        title: "Correto! 🎉", 
        description: "Excelente! Você está dominando os conceitos!", 
        className: "bg-green-100 border-green-500 text-green-700" 
      });
    } else {
      audioManager.playSound('incorrect');
      toast({ 
        title: "Ops! 😅", 
        description: "Não foi dessa vez, mas continue aprendendo!", 
        variant: "destructive" 
      });
    }
  };

  const handleNextQuestion = () => {
    audioManager.playSound('click');
    setSelectedAnswer(null);
    setIsAnswerSubmitted(false);
    
    if (currentQuestionIndex < quizData.questions.length - 1) {
      setCurrentQuestionIndex(prevIndex => prevIndex + 1);
    } else {
      audioManager.stopBackgroundMusic();
      audioManager.playCelebration();
      onQuizComplete(quizId, score, quizData.questions.length);
      navigate(`/resultado-quiz/${quizId}`);
    }
  };

  const handleToggleMusic = () => {
    const newMusicState = !userProfile.musicEnabled;
    if (newMusicState) {
      audioManager.setMusicEnabled(true);
      audioManager.playBackgroundMusic();
    } else {
      audioManager.setMusicEnabled(false);
      audioManager.stopBackgroundMusic();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col p-4 md:p-8">
      <QuizHeader
        quizData={quizData}
        currentQuestionIndex={currentQuestionIndex}
        score={score}
        timeSpent={timeSpent}
        userProfile={userProfile}
        onToggleMusic={handleToggleMusic}
      />

      <QuizProgressBar
        currentQuestionIndex={currentQuestionIndex}
        totalQuestions={quizData.questions.length}
      />

      <QuestionCard
        currentQuestion={currentQuestion}
        currentQuestionIndex={currentQuestionIndex}
        selectedAnswer={selectedAnswer}
        isAnswerSubmitted={isAnswerSubmitted}
        onAnswerSelect={handleAnswerSelect}
        onSubmitAnswer={handleSubmitAnswer}
        onNextQuestion={handleNextQuestion}
        totalQuestions={quizData.questions.length}
      />
    </div>
  );
};

export default QuizInterfaceScreen;
