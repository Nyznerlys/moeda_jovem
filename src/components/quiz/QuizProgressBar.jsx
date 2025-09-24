import React from 'react';
import { motion } from 'framer-motion';

const QuizProgressBar = ({ currentQuestionIndex, totalQuestions }) => {
  const progressPercentage = ((currentQuestionIndex + 1) / totalQuestions) * 100;

  return (
    <div className="w-full bg-gray-200 rounded-full h-3 mb-8">
      <motion.div
        className="bg-gradient-to-r from-primary-green to-primary-green-medium h-3 rounded-full flex items-center justify-end pr-2"
        initial={{ width: 0 }}
        animate={{ width: `${progressPercentage}%` }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        {progressPercentage > 15 && (
          <span className="text-white text-xs font-medium">
            {Math.round(progressPercentage)}%
          </span>
        )}
      </motion.div>
    </div>
  );
};

export default QuizProgressBar;