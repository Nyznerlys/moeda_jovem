import React from 'react';
import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';
import { audioManager } from '@/lib/audio';

const StandardQuestion = ({ question, selectedAnswer, onAnswerSelect, isAnswerSubmitted }) => {
  return (
    <div className="space-y-3">
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
  );
};

export default StandardQuestion;