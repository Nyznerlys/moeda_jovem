import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Home, User, Award, CheckCircle } from 'lucide-react';

const ProfileView = ({ userProfile, learningTracks, onNavigateHome }) => {
  return (
    <div className="min-h-screen p-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-2xl mx-auto"
      >
        <div className="flex items-center justify-between mb-6">
          <Button 
            variant="ghost" 
            onClick={onNavigateHome}
            className="text-white hover:bg-white/10"
          >
            <Home className="w-4 h-4 mr-2" />
            Voltar
          </Button>
        </div>

        <div className="card-gradient rounded-xl p-8 text-center mb-6">
          <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center">
            <User className="w-10 h-10 text-white" />
          </div>
          
          <h2 className="text-2xl font-bold mb-2">{userProfile.name}</h2>
          
          <div className="level-badge inline-block px-4 py-2 rounded-full mb-4">
            Nível {userProfile.level}
          </div>
          
          <div className="grid grid-cols-3 gap-4 mt-6">
            <div>
              <div className="text-2xl font-bold text-yellow-400">{userProfile.coins}</div>
              <div className="text-sm text-white/60">Moedas</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-teal-400">{userProfile.xp}</div>
              <div className="text-sm text-white/60">XP Total</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-orange-400">{userProfile.streak}</div>
              <div className="text-sm text-white/60">Sequência</div>
            </div>
          </div>
        </div>

        <div className="card-gradient rounded-xl p-6">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Award className="w-5 h-5" />
            Conquistas
          </h3>
          
          <div className="space-y-3">
            {learningTracks.map(track => (
              <div key={track.id} className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${track.color} flex items-center justify-center`}>
                    {track.icon}
                  </div>
                  <span className="font-medium">{track.title}</span>
                </div>
                {userProfile.completedTracks.includes(track.id) ? (
                  <CheckCircle className="w-5 h-5 text-green-400" />
                ) : (
                  <div className="w-5 h-5 border-2 border-white/20 rounded-full" />
                )}
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProfileView;