import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { CheckSquare, DollarSign, TrendingUp, ShieldAlert, Brain, Zap, ArrowLeft } from 'lucide-react';

const learningPoints = [
  {
    icon: <DollarSign className="w-10 h-10 text-primary-green" />,
    title: "Entender o Dinheiro",
    description: "O que é, como funciona e por que é tão importante na sua vida.",
  },
  {
    icon: <CheckSquare className="w-10 h-10 text-accent-blue" />,
    title: "Planejamento Financeiro",
    description: "Como criar metas, fazer um orçamento e controlar seus gastos e ganhos.",
  },
  {
    icon: <TrendingUp className="w-10 h-10 text-yellow-500" />,
    title: "Investimentos para Iniciantes",
    description: "Os primeiros passos para fazer seu dinheiro render e trabalhar para você.",
  },
  {
    icon: <ShieldAlert className="w-10 h-10 text-red-500" />,
    title: "Evitar Dívidas e Armadilhas",
    description: "Como usar o crédito com inteligência e se proteger de ciladas financeiras.",
  },
  {
    icon: <Brain className="w-10 h-10 text-purple-500" />,
    title: "Mentalidade Financeira",
    description: "Desenvolver hábitos saudáveis e uma relação positiva com o dinheiro.",
  },
  {
    icon: <Zap className="w-10 h-10 text-orange-500" />,
    title: "Tomada de Decisão Consciente",
    description: "Aprender a fazer escolhas financeiras que te aproximem dos seus sonhos.",
  },
];

const WhatYouWillLearnScreen = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-4 pb-24 md:p-8 md:pb-24">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 text-center md:text-left"
        >
          <Link to="/" className="inline-flex items-center text-text-gray hover:text-primary-green mb-6 group">
            <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Voltar para a página inicial
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold text-primary-green mb-4">O Que Você Vai Aprender?</h1>
          <p className="text-lg text-text-gray">
            No Moeda Jovem, você vai dominar os segredos das finanças pessoais de forma simples e divertida. Preparamos um conteúdo completo para sua jornada:
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {learningPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-lg card-shadow hover:shadow-xl transition-shadow flex flex-col items-center text-center"
            >
              <div className="mb-4 p-3 bg-gray-100 rounded-full">{point.icon}</div>
              <h3 className="text-xl font-semibold text-text-dark mb-2">{point.title}</h3>
              <p className="text-text-gray text-sm flex-grow">{point.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: learningPoints.length * 0.1 + 0.2 }}
          className="mt-12 text-center"
        >
          <p className="text-xl text-text-dark mb-6">
            Pronto para começar a transformar seu futuro financeiro?
          </p>
          <Link to="/bem-vindo">
            <Button size="lg" className="bg-primary-green hover:bg-primary-green-medium text-white text-lg px-8 py-3">
              Começar Agora <Zap className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default WhatYouWillLearnScreen;