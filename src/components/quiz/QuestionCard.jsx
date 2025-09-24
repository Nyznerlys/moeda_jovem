import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Check, X, HelpCircle, ArrowLeft, Trophy } from 'lucide-react';
import DragDropQuestion from './DragDropQuestion';
import ScenarioQuestion from './ScenarioQuestion';
import StandardQuestion from './StandardQuestion';

const QuestionCard = ({
  currentQuestion,
  currentQuestionIndex,
  selectedAnswer,
  isAnswerSubmitted,
  onAnswerSelect,
  onSubmitAnswer,
  onNextQuestion,
  totalQuestions
}) => {
  const renderQuestion = () => {
    const questionProps = {
      question: currentQuestion,
      selectedAnswer,
      onAnswerSelect,
      isAnswerSubmitted
    };

    switch (currentQuestion.type) {
      case 'drag_drop':
        return <DragDropQuestion {...questionProps} />;
      case 'scenario':
        return <ScenarioQuestion {...questionProps} />;
      case 'true_false':
      case 'multiple_choice':
      default:
        return <StandardQuestion {...questionProps} />;
    }
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={currentQuestionIndex}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -50 }}
        transition={{ duration: 0.4 }}
        className="bg-white p-6 md:p-8 rounded-xl shadow-xl card-shadow flex-grow flex flex-col"
      >
        <h2 className="text-xl md:text-2xl font-semibold text-text-dark mb-6">
          {currentQuestion.question}
        </h2>
        
        <div className="mb-8 flex-grow">
          {renderQuestion()}
        </div>

        {isAnswerSubmitted && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-4 rounded-md mb-6 text-sm"
            style={{ 
              backgroundColor: selectedAnswer === currentQuestion.correctAnswerIndex ? 'hsl(120, 70%, 95%)' : 'hsl(0, 100%, 97%)',
              borderColor: selectedAnswer === currentQuestion.correctAnswerIndex ? 'hsl(120, 60%, 80%)' : 'hsl(0, 80%, 90%)',
              borderWidth: '1px',
              color: selectedAnswer === currentQuestion.correctAnswerIndex ? 'hsl(120, 60%, 30%)' : 'hsl(0, 70%, 40%)'
            }}
          >
            <div className="flex items-start gap-2">
              <HelpCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-semibold mb-1">Explicação:</p>
                <p>{currentQuestion.explanation}</p>
              </div>
            </div>
          </motion.div>
        )}

        <Button
          onClick={isAnswerSubmitted ? onNextQuestion : onSubmitAnswer}
          size="lg"
          className="w-full bg-primary-green hover:bg-primary-green-medium text-white mt-auto"
          disabled={selectedAnswer === null && !isAnswerSubmitted}
        >
          {isAnswerSubmitted ? (
            currentQuestionIndex < totalQuestions - 1 ? (
              <>Próxima Pergunta <ArrowLeft className="ml-2 h-4 w-4 rotate-180" /></>
            ) : (
              <>Finalizar Quiz <Trophy className="ml-2 h-4 w-4" /></>
            )
          ) : (
            <>Confirmar Resposta <Check className="ml-2 h-4 w-4" /></>
          )}
        </Button>
      </motion.div>
    </AnimatePresence>
  );
};

export default QuestionCard;