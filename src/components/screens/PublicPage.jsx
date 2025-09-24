import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, BookOpen, TrendingUp, ShieldCheck, Zap, Users, Award } from 'lucide-react';
import ThematicSection from './ThematicSection'; 
import AboutScreen from './AboutScreen';

const PublicPage = () => {
  return (
    <div className="min-h-screen bg-white text-text-dark">
      {/* Login Button */}
      <div className="fixed top-4 right-4 z-50">
        <Link to="/login">
          <Button variant="outline" className="bg-white text-primary-green border-primary-green hover:bg-primary-green hover:text-white transition-colors">
            Fazer Login
          </Button>
        </Link>
      </div>

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="public-hero-bg text-white py-20 md:py-32 px-4 text-center"
      >
        <div className="container mx-auto max-w-3xl">
          <motion.h1
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6"
          >
            Descomplicando suas Finanças com <span className="text-yellow-300">Moeda Jovem</span>
          </motion.h1>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-lg md:text-xl mb-10"
          >
            Aprenda a cuidar do seu dinheiro de forma fácil, divertida e interativa. Prepare-se para o futuro financeiro que você merece!
          </motion.p>
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="flex flex-col sm:flex-row justify-center items-center gap-4"
          >
            <Link to="/o-que-vai-aprender">
              <Button size="lg" className="btn-yellow w-full sm:w-auto text-lg px-8 py-3">
                O que irá aprender?
              </Button>
            </Link>
            <Link to="/bem-vindo">
              <Button size="lg" variant="outline" className="btn-white w-full sm:w-auto text-lg px-8 py-3 border-2 border-white text-white hover:bg-white hover:text-accent-blue">
                Iniciar Jornada <Zap className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* Features Section */}
      <section className="py-16 md:py-24 px-4 bg-gray-50">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-green mb-4">Por que Moeda Jovem?</h2>
          <p className="text-text-gray max-w-2xl mx-auto mb-12 md:mb-16 text-lg">
            Nossa plataforma foi criada pensando em você, jovem, que quer entender de finanças sem complicação.
          </p>
          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {[
              { icon: <BookOpen size={40} className="text-primary-green-medium" />, title: "Conteúdo Interativo", desc: "Quizzes, desafios e trilhas de aprendizado gamificadas." },
              { icon: <Users size={40} className="text-accent-blue" />, title: "Linguagem Jovem", desc: "Tudo explicado de forma clara, sem economês difícil." },
              { icon: <Award size={40} className="text-yellow-500" />, title: "Progresso e Recompensas", desc: "Ganhe pontos, suba de nível e desbloqueie conquistas." }
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className="bg-white p-8 rounded-xl shadow-lg card-shadow hover:shadow-xl transition-shadow"
              >
                <div className="flex justify-center mb-6">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-text-dark mb-3">{feature.title}</h3>
                <p className="text-text-gray">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Thematic Section from existing component */}
      <ThematicSection />

      {/* About Section from existing component */}
      <AboutScreen isSection={true} />

      {/* Call to Action */}
      <section className="py-16 md:py-24 px-4 bg-primary-green text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Pronto para Transformar sua Vida Financeira?</h2>
          <p className="text-lg md:text-xl max-w-xl mx-auto mb-10">
            Junte-se a milhares de jovens que estão aprendendo a dominar suas finanças com o Moeda Jovem.
          </p>
          <Link to="/bem-vindo">
            <Button size="lg" className="bg-white text-primary-green hover:bg-gray-100 text-lg px-10 py-4 font-semibold">
              Comece Agora Gratuitamente <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center bg-gray-100 text-text-gray">
        <p>&copy; {new Date().getFullYear()} Moeda Jovem. Todos os direitos reservados.</p>
        <p className="text-sm mt-1">Feito com 💚 para jovens transformadores.</p>
      </footer>
    </div>
  );
};

export default PublicPage;