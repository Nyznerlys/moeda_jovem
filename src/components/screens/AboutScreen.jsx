import React from 'react';
import { motion } from 'framer-motion';
import { Target, Smile, TrendingUp } from 'lucide-react';

const AboutScreen = ({ isSection = false }) => {
  const Wrapper = isSection ? 'section' : 'div';
  const padding = isSection ? 'py-16 md:py-24 px-4' : 'p-6 md:p-10 min-h-screen';

  return (
    <Wrapper className={`${padding} bg-primary-green-light`}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h1 className={`text-3xl md:text-4xl font-bold ${isSection ? 'text-primary-green' : 'text-text-dark'} mb-4`}>
            Sobre o Moeda Jovem
          </h1>
          <p className="text-lg text-text-gray max-w-3xl mx-auto">
            Nossa missão é capacitar jovens como você com o conhecimento e as ferramentas necessárias para uma vida financeira saudável e próspera.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <img 
              alt="Ilustração de jovens colaborando em um projeto financeiro"
              className="rounded-xl shadow-xl w-full h-auto object-cover"
             src="https://images.unsplash.com/photo-1531546110571-200f26d0d18b" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="space-y-8"
          >
            {[
              { icon: <Target size={28} className="text-primary-green-medium" />, title: "Nossa Visão", text: "Ser a principal plataforma de educação financeira para jovens no Brasil, tornando o aprendizado acessível, engajador e transformador." },
              { icon: <Smile size={28} className="text-accent-blue" />, title: "Nossos Valores", text: "Empoderamento, simplicidade, diversão, responsabilidade e inovação contínua para melhor atender nossos usuários." },
              { icon: <TrendingUp size={28} className="text-yellow-500" />, title: "Como Ajudamos", text: "Através de conteúdo prático, quizzes interativos e uma comunidade de apoio, ajudamos você a construir uma base sólida para o seu futuro financeiro." }
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-4 p-6 bg-white rounded-lg shadow-md card-shadow">
                <div className="flex-shrink-0 mt-1">{item.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold text-text-dark mb-2">{item.title}</h3>
                  <p className="text-text-gray">{item.text}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
        
        {!isSection && (
           <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="text-center mt-16"
           >
            <p className="text-xl text-text-dark font-semibold">
              Junte-se à comunidade Moeda Jovem e comece a trilhar seu caminho para o sucesso financeiro!
            </p>
          </motion.div>
        )}
      </div>
    </Wrapper>
  );
};

export default AboutScreen;