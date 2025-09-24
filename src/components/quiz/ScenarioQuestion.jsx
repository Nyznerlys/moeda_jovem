import React from 'react';
import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';
import { audioManager } from '@/lib/audio';

const ScenarioQuestion = ({ question, selectedAnswer, onAnswerSelect, isAnswerSubmitted }) => {
  return (
    <div className="space-y-6">
      <div className="p-4 bg-blue-50 border-l-4 border-blue-500 rounded-r-lg">
        <h4 className="font-semibold text-blue-800 mb-2">Cenário:</h4>
        <p className="text-blue-700">{question.question}</p>
      </div>
      
      <div className="space-y-3">
        <h4 className="font-semibold">O que você faria?</h4>
        {question.options.map((option, index) => {
          let optionClass = "quiz-option";
          if (isAnswerSubmitted) {
            if (index === question.correctAnswerIndex) {
              optionClass += " correct";
            } else if (index === selectedAnswer) {
              optionClass += " incorrect";
            }
          } else if (index === selectedAnswer) {
            optionClass += " selected";
          }

          return (
            <motion.button
              key={index}
              onClick={() => {
                audioManager.playSound('click');
                onAnswerSelect(index);
              }}
              disabled={isAnswerSubmitted}
              className={`w-full p-4 rounded-lg text-left text-text-dark font-medium flex items-center justify-between ${optionClass}`}
              whileHover={!isAnswerSubmitted ? { scale: 1.02 } : {}}
              whileTap={!isAnswerSubmitted ? { scale: 0.98 } : {}}
            >
              <span>{option}</span>
              {isAnswerSubmitted && index === question.correctAnswerIndex && <Check className="w-5 h-5 text-green-700" />}
              {isAnswerSubmitted && index === selectedAnswer && index !== question.correctAnswerIndex && <X className="w-5 h-5 text-red-700" />}
            </motion.button>
          );
        })}
      </div>
    </div>
  );
};

export default ScenarioQuestion;