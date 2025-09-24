import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, ArrowLeft, UserPlus, LogIn } from 'lucide-react';

const WelcomeScreen = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <motion.div
        initial={{ x: '-100%' }}
        animate={{ x: 0 }}
        transition={{ duration: 0.7, ease: 'easeInOut' }}
        className="welcome-sidebar w-full md:w-1/3 lg:w-2/5 p-8 md:p-12 flex flex-col justify-center items-center md:items-start text-center md:text-left"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-primary-green mb-6">
          Bem-vindo(a) ao Moeda Jovem!
        </h1>
        <p className="text-lg text-text-gray mb-8">
          Sua jornada para a independência financeira começa aqui. Aprenda a gerenciar seu dinheiro de forma inteligente e divertida.
        </p>
        <img 
          alt="Ilustração de jovens aprendendo sobre finanças"
          className="w-full max-w-xs md:max-w-sm mx-auto md:mx-0 rounded-lg shadow-lg"
         src="https://images.unsplash.com/photo-1640340435016-1964cf4e723b" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.7 }}
        className="flex-1 p-8 md:p-12 flex flex-col justify-center items-center"
      >
        <div className="w-full max-w-md text-center">
          <img 
            alt="Logo Moeda Jovem"
            className="w-32 h-32 mx-auto mb-8"
           src="https://images.unsplash.com/photo-1691440604411-c667eb8f8d0f" />
          <h2 className="text-3xl font-semibold text-text-dark mb-4">Comece Agora!</h2>
          <p className="text-text-gray mb-10">
            Crie sua conta ou faça login para acessar quizzes, trilhas de aprendizado e muito mais.
          </p>
          
          <div className="space-y-4">
            <Link to="/criar-conta" className="block">
              <Button size="lg" className="w-full bg-primary-green hover:bg-primary-green-medium text-white">
                <UserPlus className="mr-2 h-5 w-5" /> Criar Conta
              </Button>
            </Link>
            <Link to="/login" className="block">
              <Button variant="outline" size="lg" className="w-full border-primary-green text-primary-green hover:bg-primary-green-light hover:text-primary-green">
                <LogIn className="mr-2 h-5 w-5" /> Fazer Login
              </Button>
            </Link>
          </div>

          <Link to="/" className="mt-10 inline-flex items-center text-text-gray hover:text-primary-green group">
            <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" /> Voltar à página inicial
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default WelcomeScreen;