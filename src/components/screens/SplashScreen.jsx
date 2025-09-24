import React from 'react';
import { motion } from 'framer-motion';
import { DollarSign, ArrowDown } from 'lucide-react';

const SplashScreen = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.5 }}
      className="splash-bg min-h-screen flex flex-col items-center justify-center text-white p-4"
    >
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2, type: 'spring', stiffness: 120 }}
        className="mb-8"
      >
        <DollarSign size={120} className="text-white" />
      </motion.div>
      <motion.h1
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6"
      >
        MOEDA JOVEM
      </motion.h1>
      <div className="flex space-x-2">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ y: 0, opacity: 0.5 }}
            animate={{ y: [-5, 5, -5], opacity: [0.5, 1, 0.5] }}
            transition={{
              delay: 0.8 + i * 0.2,
              duration: 1.5,
              repeat: Infinity,
              repeatType: 'loop',
            }}
          >
            <ArrowDown size={24} className="text-white" />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default SplashScreen;