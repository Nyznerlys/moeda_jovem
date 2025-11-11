import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { Home, Award, CheckCircle, Settings, Edit3, Star, Coins, User as UserIcon, Trophy, Medal, Crown, BookOpen, Target, TrendingUp, Calendar, Zap, BarChart2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { LEARNING_TRACKS, ACHIEVEMENTS, DIFFICULTY_LEVELS } from '@/lib/data';
import ProfileEditDialog from '@/components/ProfileEditDialog';
import { audioManager } from '@/lib/audio';

const AchievementCard = ({ achievement, isUnlocked }) => {
  const rarityColors = {
    comum: 'bg-gray-100 border-gray-300',
    raro: 'bg-blue-100 border-blue-300',
    epico: 'bg-purple-100 border-purple-300',
    lendario: 'bg-yellow-100 border-yellow-300'
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.02 }}
      className={`p-4 rounded-lg border-2 transition-all ${
        isUnlocked ? rarityColors[achievement.rarity] : 'bg-gray-50 border-gray-200 opacity-60'
      }`}
    >
      <div className="flex items-center gap-3 mb-2">
        <div className={`p-2 rounded-full ${isUnlocked ? 'bg-white' : 'bg-gray-200'}`}>
          {React.cloneElement(achievement.icon, { 
            className: `w-5 h-5 ${isUnlocked ? 'text-primary-green' : 'text-gray-400'}` 
          })}
        </div>
        <div className="flex-grow">
          <h4 className={`font-semibold ${isUnlocked ? 'text-text-dark' : 'text-gray-500'}`}>
            {achievement.title}
          </h4>
          <p className={`text-sm ${isUnlocked ? 'text-text-gray' : 'text-gray-400'}`}>
            {achievement.description}
          </p>
        </div>
        {isUnlocked && (
          <div className="text-right text-xs">
            <div className="text-green-600">+{achievement.xpReward} XP</div>
            <div className="text-yellow-600">+{achievement.coinReward} Moedas</div>
          </div>
        )}
      </div>
    </motion.div>
  );
};

const UserProfileScreen = ({ userProfile, onLogout, onProfileUpdate, appName = "Moeda Jovem" }) => {
  const { toast } = useToast();
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const completedQuizzes = Object.keys(userProfile.completedQuizzes || {});
  const totalQuizzes = 30; // Total de quizzes disponíveis
  const completionPercentage = (completedQuizzes.length / totalQuizzes) * 100;

  // Calcular conquistas desbloqueadas
  const unlockedAchievements = ACHIEVEMENTS.filter(achievement => 
    achievement.condition(userProfile)
  );

  // Estatísticas por dificuldade
  const difficultyStats = Object.keys(DIFFICULTY_LEVELS).map(difficulty => {
    const quizzesOfDifficulty = completedQuizzes.filter(quizId => {
      // Aqui você precisaria acessar os dados do quiz para verificar a dificuldade
      // Por simplicidade, vamos assumir uma distribuição
      return true;
    });
    return {
      difficulty,
      count: Math.floor(completedQuizzes.length / 3), // Distribuição simplificada
      ...DIFFICULTY_LEVELS[difficulty]
    };
  });

  // Calcular nível baseado no XP
  // Ensure numeric values to avoid string concatenation or NaN
  const level = Number(userProfile.level ?? 1);
  const xp = Number(userProfile.xp ?? 0);
  const coins = Number(userProfile.coins ?? 0);
  const streak = Number(userProfile.streak ?? 0);

  const currentLevelXP = (level - 1) * 100;
  const nextLevelXP = level * 100;
  let progressToNextLevel = ((xp - currentLevelXP) / (nextLevelXP - currentLevelXP)) * 100;
  // Clamp between 0 and 100 to avoid NaN/overflow
  if (!Number.isFinite(progressToNextLevel)) progressToNextLevel = 0;
  progressToNextLevel = Math.max(0, Math.min(100, Math.round(progressToNextLevel)));

  const handleEditProfile = () => {
    audioManager.playSound('click');
    setIsEditDialogOpen(true);
  };

  const handleLogout = () => {
    audioManager.playSound('click');
    onLogout();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="min-h-screen bg-gray-50 p-4 pb-24 md:p-8 md:pb-24"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <header className="mb-8 flex flex-col md:flex-row md:justify-between md:items-center gap-4">
          <div>
            <Link to="/catalogo-quizzes">
              <Button 
                variant="ghost" 
                className="text-text-gray hover:bg-primary-green-light mb-2"
                onClick={() => audioManager.playSound('click')}
              >
                <Home className="w-5 h-5 mr-2" />
                Voltar ao Catálogo
              </Button>
            </Link>
            <h1 className="text-3xl font-bold text-primary-green">{appName} - Meu Perfil</h1>
          </div>
          <Button 
            variant="outline" 
            onClick={handleLogout}
            className="text-red-600 border-red-300 hover:bg-red-50"
          >
            Sair da Conta
          </Button>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Coluna Principal */}
          <div className="lg:col-span-2 space-y-8">
            {/* Perfil Principal */}
            <section className="bg-white shadow-xl rounded-lg p-6 md:p-8">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="relative">
                  <motion.img  
                    whileHover={{ scale: 1.05 }}
                    className="w-32 h-32 rounded-full object-cover border-4 border-primary-green-medium"
                    alt="Foto do perfil do usuário"
                    src={userProfile.profileImage || 'https://images.unsplash.com/photo-1595152772835-219674b2a8a6'}
                  />
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={handleEditProfile}
                    className="absolute bottom-0 right-0 bg-accent-blue hover:bg-accent-blue/90 text-white rounded-full border-2 border-white"
                  >
                    <Edit3 className="w-4 h-4" />
                  </Button>
                </div>
                
                <div className="text-center md:text-left flex-grow">
                  <h2 className="text-3xl font-bold text-text-dark mb-2">{userProfile.name}</h2>
                  <p className="text-text-gray mb-4">Nível {level} - Aprendiz Financeiro</p>
                  
                  {/* Progresso para próximo nível */}
                  <div className="mb-4">
                    <div className="flex justify-between text-sm text-text-gray mb-1">
                      <span>Progresso para Nível {level + 1}</span>
                      <span>{Math.round(progressToNextLevel)}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <motion.div
                        className="bg-gradient-to-r from-primary-green to-primary-green-medium h-3 rounded-full"
                        initial={{ width: 0 }}
                          animate={{ width: `${progressToNextLevel}%` }}
                        transition={{ duration: 1, ease: "easeOut" }}
                      />
                    </div>
                    <p className="text-xs text-text-gray mt-1">
                      {Math.max(0, nextLevelXP - xp)} XP para o próximo nível
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Estatísticas Principais */}
            <section className="bg-white shadow-xl rounded-lg p-6">
              <h3 className="text-xl font-semibold text-text-dark mb-6 flex items-center gap-2">
                <BarChart2 className="w-6 h-6 text-primary-green" />
                Estatísticas de Aprendizado
              </h3>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="bg-primary-green-light p-4 rounded-lg text-center cursor-pointer"
                >
                  <BookOpen className="w-8 h-8 text-primary-green mx-auto mb-2" />
                  <p className="text-2xl font-bold text-primary-green">{completedQuizzes.length}</p>
                  <p className="text-sm text-text-gray">Quizzes Completos</p>
                </motion.div>
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="bg-accent-blue-light p-4 rounded-lg text-center cursor-pointer"
                >
                  <Star className="w-8 h-8 text-accent-blue mx-auto mb-2" />
                  <p className="text-2xl font-bold text-accent-blue">{xp}</p>
                  <p className="text-sm text-text-gray">XP Total</p>
                </motion.div>
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="bg-yellow-100 p-4 rounded-lg text-center cursor-pointer"
                >
                  <Coins className="w-8 h-8 text-yellow-600 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-yellow-600">{coins}</p>
                  <p className="text-sm text-text-gray">Moedas</p>
                </motion.div>
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="bg-orange-100 p-4 rounded-lg text-center cursor-pointer"
                >
                  <Zap className="w-8 h-8 text-orange-500 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-orange-500">{streak}</p>
                  <p className="text-sm text-text-gray">Sequência</p>
                </motion.div>
              </div>

              {/* Progresso Geral */}
              <div className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-semibold text-text-dark">Progresso Geral</h4>
                  <span className="text-sm text-text-gray">{completedQuizzes.length}/{totalQuizzes} quizzes</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-4">
                  <motion.div
                    className="bg-gradient-to-r from-primary-green to-accent-blue h-4 rounded-full flex items-center justify-center text-white text-xs font-medium"
                    initial={{ width: '0%' }}
                    animate={{ width: `${completionPercentage}%` }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                  >
                    {completionPercentage > 15 && `${Math.round(completionPercentage)}%`}
                  </motion.div>
                </div>
              </div>

              {/* Estatísticas por Dificuldade */}
              <div>
                <h4 className="font-semibold text-text-dark mb-4">Progresso por Dificuldade</h4>
                <div className="space-y-3">
                  {difficultyStats.map(stat => (
                    <motion.div 
                      key={stat.difficulty} 
                      whileHover={{ scale: 1.02 }}
                      className="flex items-center justify-between p-3 bg-gray-50 rounded-lg cursor-pointer"
                    >
                      <div className="flex items-center gap-3">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${stat.color}`}>
                          {stat.name}
                        </span>
                        <span className="text-sm text-text-gray">
                          {stat.count} quizzes completados
                        </span>
                      </div>
                      <div className="flex items-center gap-1">
                        {stat.count > 0 && <CheckCircle className="w-4 h-4 text-primary-green" />}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>

            {/* Conquistas */}
            <section className="bg-white shadow-xl rounded-lg p-6">
              <h3 className="text-xl font-semibold text-text-dark mb-6 flex items-center gap-2">
                <Trophy className="w-6 h-6 text-yellow-500" />
                Conquistas ({unlockedAchievements.length}/{ACHIEVEMENTS.length})
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {ACHIEVEMENTS.map(achievement => {
                  const isUnlocked = unlockedAchievements.some(unlocked => unlocked.id === achievement.id);
                  return (
                    <AchievementCard
                      key={achievement.id}
                      achievement={achievement}
                      isUnlocked={isUnlocked}
                    />
                  );
                })}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Trilhas de Aprendizado */}
            <section className="bg-white shadow-xl rounded-lg p-6">
              <h3 className="text-lg font-semibold text-text-dark mb-4 flex items-center gap-2">
                <Target className="w-5 h-5 text-primary-green" />
                Trilhas de Aprendizado
              </h3>
              
              <div className="space-y-3">
                {LEARNING_TRACKS.map(track => {
                  const trackQuizzes = track.quizzes || [];
                  const completedInTrack = trackQuizzes.filter(quizId => 
                    userProfile.completedQuizzes?.[quizId]
                  ).length;
                  const progressPercentage = trackQuizzes.length > 0 ? (completedInTrack / trackQuizzes.length) * 100 : 0;
                  
                  return (
                    <motion.div 
                      key={track.id} 
                      whileHover={{ scale: 1.02 }}
                      className={`p-4 rounded-lg border-2 ${track.borderColor} ${track.color} cursor-pointer`}
                    >
                      <div className="flex items-start gap-3 mb-3">
                        <div className="p-2 bg-white rounded-lg">
                          {React.cloneElement(track.icon, { className: "w-5 h-5 text-primary-green" })}
                        </div>
                        <div className="flex-grow">
                          <h4 className="font-semibold text-text-dark text-sm">{track.title}</h4>
                          <p className="text-xs text-text-gray mb-2">{completedInTrack}/{trackQuizzes.length} quizzes</p>
                          <div className="w-full bg-white bg-opacity-50 rounded-full h-2">
                            <motion.div 
                              className="bg-primary-green h-2 rounded-full transition-all duration-500"
                              initial={{ width: 0 }}
                              animate={{ width: `${progressPercentage}%` }}
                            />
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </section>

            {/* Ações Rápidas */}
            <section className="bg-white shadow-xl rounded-lg p-6">
              <h3 className="text-lg font-semibold text-text-dark mb-4">Ações Rápidas</h3>
              
              <div className="space-y-3">
                <Link to="/catalogo-quizzes">
                  <Button 
                    className="w-full bg-primary-green hover:bg-primary-green-medium text-white"
                    onClick={() => audioManager.playSound('click')}
                  >
                    <BookOpen className="mr-2 h-4 w-4" />
                    Continuar Aprendendo
                  </Button>
                </Link>
                
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => {
                    audioManager.playSound('click');
                    toast({ 
                      title: "🚧 Em breve!", 
                      description: "A funcionalidade de ranking estará disponível em breve!" 
                    });
                  }}
                >
                  <Trophy className="mr-2 h-4 w-4" />
                  Ver Ranking
                </Button>
                
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={handleEditProfile}
                >
                  <Settings className="mr-2 h-4 w-4" />
                  Editar Perfil
                </Button>
              </div>
            </section>

            {/* Motivação */}
            <section className="bg-gradient-to-r from-primary-green to-accent-blue rounded-lg p-6 text-white">
              <h3 className="text-lg font-semibold mb-3">💡 Dica do Dia</h3>
              <p className="text-sm opacity-90">
                "O investimento em conhecimento paga os melhores juros." - Benjamin Franklin
              </p>
              <p className="text-xs opacity-75 mt-2">
                Continue aprendendo todos os dias para construir sua liberdade financeira!
              </p>
            </section>
          </div>
        </div>
      </div>

      {/* Dialog de edição de perfil */}
      <ProfileEditDialog
        isOpen={isEditDialogOpen}
        onClose={() => setIsEditDialogOpen(false)}
        userProfile={userProfile}
        onSave={onProfileUpdate}
      />
    </motion.div>
  );
};

export default UserProfileScreen;