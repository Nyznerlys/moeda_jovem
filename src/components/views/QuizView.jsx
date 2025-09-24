import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Home, CheckCircle, XCircle, ArrowRight } from 'lucide-react';

const QuizView = ({ 
  currentQuiz, 
  currentQuestion, 
  quizScore, 
  selectedAnswer, 
  showExplanation, 
  onSelectAnswer, 
  onSubmitAnswer,
  onNavigateHome
}) => {
  if (!currentQuiz) return null;

  const question = currentQuiz.questions[currentQuestion];
  const progress = ((currentQuestion + 1) / currentQuiz.questions.length) * 100;

  return (
    <div className="min-h-screen p-4">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-2xl mx-auto"
      >
        <div className="flex items-center justify-between mb-6">
          <Button 
            variant="ghost" 
            onClick={onNavigateHome}
            className="text-white hover:bg-white/10"
          >
            <Home className="w-4 h-4 mr-2" />
            Voltar
          </Button>
          
          <div className="text-center">
            <div className="text-sm text-white/60">Questão {currentQuestion + 1} de {currentQuiz.questions.length}</div>
            <div className="text-lg font-semibold">Pontuação: {quizScore}/{currentQuestion + (showExplanation ? 1 : 0)}</div>
          </div>
        </div>

        <div className="w-full bg-white/10 rounded-full h-2 mb-8">
          <motion.div 
            className="progress-bar h-2 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>

        <motion.div
          key={currentQuestion}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="card-gradient rounded-xl p-8 mb-6"
        >
          <h2 className="text-2xl font-bold mb-6">{question.question}</h2>
          
          <div className="space-y-3">
            {question.options.map((option, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => onSelectAnswer(index)}
                className={`quiz-option w-full p-4 rounded-lg text-left transition-all ${
                  selectedAnswer === index ? 'selected' : ''
                } ${
                  showExplanation && index === question.correct ? 'correct' : ''
                } ${
                  showExplanation && selectedAnswer === index && index !== question.correct ? 'incorrect' : ''
                }`}
                disabled={showExplanation}
              >
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full border-2 border-current flex items-center justify-center text-sm font-bold">
                    {String.fromCharCode(65 + index)}
                  </div>
                  <span>{option}</span>
                  {showExplanation && index === question.correct && (
                    <CheckCircle className="w-5 h-5 ml-auto text-white" />
                  )}
                  {showExplanation && selectedAnswer === index && index !== question.correct && (
                    <XCircle className="w-5 h-5 ml-auto text-white" />
                  )}
                </div>
              </motion.button>
            ))}
          </div>

          {showExplanation && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-6 p-4 bg-green-500/20 rounded-lg border border-green-500/30"
            >
              <h4 className="font-semibold mb-2 text-green-300">Explicação:</h4>
              <p className="text-white/80">{question.explanation}</p>
            </motion.div>
          )}

          {!showExplanation && (
            <Button 
              onClick={onSubmitAnswer}
              disabled={selectedAnswer === null}
              className="w-full mt-6 bg-gradient-to-r from-green-500 to-teal-600 hover:from-green-600 hover:to-teal-700 disabled:opacity-50"
            >
              Confirmar Resposta
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          )}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default QuizView;