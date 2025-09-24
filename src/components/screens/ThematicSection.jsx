import React from 'react';
import { motion } from 'framer-motion';
import { BarChart2, AlertTriangle, TrendingUp, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const themes = [
  {
    title: "Planejamento Financeiro",
    description: "Aprenda a organizar suas finanças, definir metas e criar um orçamento que funcione para você.",
    icon: <BarChart2 size={32} className="text-primary-green" />,
    link: "/bem-vindo",
    colorClass: "themed-block-planning"
  },
  {
    title: "Lidando com Dívidas",
    description: "Entenda os tipos de dívidas, como evitá-las e estratégias para sair do vermelho com inteligência.",
    icon: <AlertTriangle size={32} className="text-accent-blue" />,
    link: "/bem-vindo",
    colorClass: "themed-block-debts"
  },
  {
    title: "Iniciando nos Investimentos",
    description: "Descubra o mundo dos investimentos, desde os conceitos básicos até as primeiras aplicações.",
    icon: <TrendingUp size={32} className="text-green-600" />,
    link: "/bem-vindo",
    colorClass: "themed-block-investments"
  }
];

const ThematicSection = () => {
  return (
    <section className="py-16 md:py-24 px-4 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-green mb-4">Explore Nossos Temas Principais</h2>
          <p className="text-text-gray max-w-2xl mx-auto text-lg">
            Navegue por categorias e aprofunde seus conhecimentos em áreas chave da educação financeira.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {themes.map((theme, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col ${theme.colorClass}`}
            >
              <div className="flex items-center mb-4">
                <div className="p-3 rounded-full bg-white mr-4 shadow">
                  {theme.icon}
                </div>
                <h3 className="text-xl font-semibold text-text-dark">{theme.title}</h3>
              </div>
              <p className="text-text-gray mb-6 flex-grow">{theme.description}</p>
              <Link to={theme.link} className="mt-auto self-start inline-flex items-center font-medium text-primary-green-medium hover:text-primary-green group">
                Começar Agora <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ThematicSection;