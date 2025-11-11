import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Star, Coins, Flame, Play, CheckCircle, BarChart3 } from 'lucide-react';

const HomeView = ({ userProfile, learningTracks, onStartQuiz }) => {
  const level = Number(userProfile.level ?? 1);
  const xp = Number(userProfile.xp ?? 0);
  const coins = Number(userProfile.coins ?? 0);
  const streak = Number(userProfile.streak ?? 0);
  return (
    <div className="min-h-screen p-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto"
      >
        <div className="text-center mb-8">
          <motion.h1 
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-green-400 to-teal-500 bg-clip-text text-transparent mb-4"
          >
            FinanceJá! 💰
          </motion.h1>
          <p className="text-xl text-white/80 mb-6">
            Aprenda finanças de forma divertida e gamificada!
          </p>
          
          <div className="flex justify-center gap-4 mb-8">
            <div className="card-gradient rounded-xl p-4 text-center">
              <div className="flex items-center gap-2 justify-center mb-2">
                <Star className="w-5 h-5 text-yellow-400" />
                <span className="font-semibold">Nível {level}</span>
              </div>
              <div className="text-sm text-white/60">{xp} XP</div>
            </div>
            
            <div className="card-gradient rounded-xl p-4 text-center">
              <div className="flex items-center gap-2 justify-center mb-2">
                <Coins className="w-5 h-5 text-yellow-400 coin-animation" />
                <span className="font-semibold">{coins}</span>
              </div>
              <div className="text-sm text-white/60">Moedas</div>
            </div>
            
            <div className="card-gradient rounded-xl p-4 text-center">
              <div className="flex items-center gap-2 justify-center mb-2">
                <Flame className={`w-5 h-5 text-orange-400 ${streak > 0 ? 'streak-fire' : ''}`} />
                <span className="font-semibold">{streak}</span>
              </div>
              <div className="text-sm text-white/60">Sequência</div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {learningTracks.map((track, index) => (
            <motion.div
              key={track.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="card-gradient rounded-xl p-6 hover:scale-105 transition-transform cursor-pointer"
              onClick={() => onStartQuiz(track.id)}
            >
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${track.color} flex items-center justify-center mb-4`}>
                {track.icon}
              </div>
              
              <h3 className="text-xl font-bold mb-2">{track.title}</h3>
              <p className="text-white/70 text-sm mb-4">{track.description}</p>
              
              <div className="flex justify-between items-center mb-4">
                <span className="text-sm text-white/60">{track.lessons} lições</span>
                <span className="text-sm text-yellow-400 font-semibold">+{track.xp} XP</span>
              </div>
              
              {userProfile.completedTracks.includes(track.id) && (
                <div className="flex items-center gap-2 text-green-400 text-sm">
                  <CheckCircle className="w-4 h-4" />
                  Concluído!
                </div>
              )}
              
              <Button className="w-full mt-4 bg-gradient-to-r from-green-500 to-teal-600 hover:from-green-600 hover:to-teal-700">
                <Play className="w-4 h-4 mr-2" />
                Começar Quiz
              </Button>
            </motion.div>
          ))}
        </div>

        <div className="card-gradient rounded-xl p-6">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <BarChart3 className="w-5 h-5" />
            Seu Progresso
          </h3>
          
          <div className="grid md:grid-cols-3 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-green-400">{userProfile.completedTracks.length}</div>
              <div className="text-sm text-white/60">Trilhas Concluídas</div>
            </div>
            
            <div className="text-center">
              <div className="text-2xl font-bold text-teal-400">{Math.floor(xp / 100)}</div>
              <div className="text-sm text-white/60">Níveis Alcançados</div>
            </div>
            
            <div className="text-center">
              <div className="text-2xl font-bold text-yellow-400">{coins}</div>
              <div className="text-sm text-white/60">Total de Moedas</div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default HomeView;