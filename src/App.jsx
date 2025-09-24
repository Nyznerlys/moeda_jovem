import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Toaster } from '@/components/ui/toaster';
import { useToast } from '@/components/ui/use-toast';

import SplashScreen from '@/components/screens/SplashScreen';
import WelcomeScreen from '@/components/screens/WelcomeScreen';
import LoginScreen from '@/components/screens/LoginScreen';
import VerificationScreen from '@/components/screens/VerificationScreen';
import UsernameScreen from '@/components/screens/UsernameScreen';
import PublicPage from '@/components/screens/PublicPage';
import AboutScreen from '@/components/screens/AboutScreen';
import QuizResultScreen from '@/components/screens/QuizResultScreen';
import WhatYouWillLearnScreen from '@/components/screens/WhatYouWillLearnScreen';
import QuizCatalogScreen from '@/components/screens/QuizCatalogScreen';
import UserProfileScreen from '@/components/screens/UserProfileScreen';
import QuizInterfaceScreen from '@/components/screens/QuizInterfaceScreen'; 
import ThematicSection from '@/components/screens/ThematicSection';

import BottomNav from '@/components/layout/BottomNav';
import { LEARNING_TRACKS, QUIZZES_DATA, DEFAULT_USER_PROFILE, getNextUnlockedQuizzes, ACHIEVEMENTS } from '@/lib/data';
import { audioManager } from '@/lib/audio';

const pageVariants = {
  initial: { opacity: 0, x: "-100vw" },
  in: { opacity: 1, x: 0 },
  out: { opacity: 0, x: "100vw" }
};

const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.5
};

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
     const savedAuth = localStorage.getItem('moedaJovemAuth');
     return savedAuth ? JSON.parse(savedAuth) : false;
  });
  const [userProfile, setUserProfile] = useState(() => {
    const savedProfile = localStorage.getItem('moedaJovemProfile');
    return savedProfile ? JSON.parse(savedProfile) : DEFAULT_USER_PROFILE;
  });

  const { toast } = useToast();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500); 
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    localStorage.setItem('moedaJovemAuth', JSON.stringify(isAuthenticated));
  }, [isAuthenticated]);

  useEffect(() => {
    localStorage.setItem('moedaJovemProfile', JSON.stringify(userProfile));
    
    // Configurar áudio baseado nas preferências do usuário
    audioManager.setSoundEnabled(userProfile.soundEnabled !== false);
    audioManager.setMusicEnabled(userProfile.musicEnabled !== false);
  }, [userProfile]);

  const handleLogin = (email, password) => {
    if (email && password) { 
      setIsAuthenticated(true);
      audioManager.playSound('achievement');
      toast({ title: "Login bem-sucedido!", description: "Bem-vindo(a) de volta!" });
      return true;
    }
    audioManager.playSound('incorrect');
    toast({ title: "Erro no Login", description: "Por favor, verifique suas credenciais.", variant: "destructive" });
    return false;
  };

  const handleCreateAccount = (email, password) => {
     if (email && password) {
      setIsAuthenticated(true);
      setUserProfile(prev => ({ ...prev, email: email }));
      audioManager.playSound('achievement');
      toast({ title: "Conta criada com sucesso!", description: "Bem-vindo(a) ao Moeda Jovem!" });
      return true;
    }
    audioManager.playSound('incorrect');
    toast({ title: "Erro ao criar conta", description: "Por favor, tente novamente.", variant: "destructive" });
    return false;
  };
  
  const handleSetUsername = (username) => {
    setUserProfile(prev => ({ ...prev, name: username, usernameSetupComplete: true }));
    audioManager.playSound('achievement');
    toast({ title: "Nome de usuário salvo!", description: `Olá, ${username}!`});
  };

  const handleQuizComplete = (quizId, score, totalQuestions) => {
    const earnedXP = score * 10;
    const earnedCoins = score * 5;
    
    // Tocar sons baseados na performance
    const percentage = (score / totalQuestions) * 100;
    if (percentage === 100) {
      audioManager.playSound('achievement');
      audioManager.playSound('confetti');
    } else if (percentage >= 70) {
      audioManager.playSound('levelUp');
    } else {
      audioManager.playSound('coin');
    }
    
    setUserProfile(prev => {
      const newProfile = {
        ...prev,
        xp: prev.xp + earnedXP,
        coins: prev.coins + earnedCoins,
        completedQuizzes: {
          ...prev.completedQuizzes,
          [quizId]: { score, totalQuestions }
        },
        level: Math.floor((prev.xp + earnedXP) / 100) + 1,
      };

      // Verificar conquistas
      const newAchievements = ACHIEVEMENTS.filter(achievement => 
        !prev.achievements.includes(achievement.id) && 
        achievement.condition(newProfile)
      );

      if (newAchievements.length > 0) {
        newAchievements.forEach(achievement => {
          audioManager.playSound('achievement');
          toast({
            title: "🏆 Nova Conquista!",
            description: `${achievement.title}: ${achievement.description}`,
          });
        });

        newProfile.achievements = [...prev.achievements, ...newAchievements.map(a => a.id)];
        newProfile.xp += newAchievements.reduce((sum, a) => sum + a.xpReward, 0);
        newProfile.coins += newAchievements.reduce((sum, a) => sum + a.coinReward, 0);
      }

      return newProfile;
    });
  };

  const handleProfileUpdate = (updatedData) => {
    setUserProfile(prev => ({ ...prev, ...updatedData }));
    audioManager.playSound('achievement');
    toast({ title: "Perfil atualizado!", description: "Suas alterações foram salvas com sucesso!" });
  };

  if (isLoading) {
    return <SplashScreen />;
  }

  const quizzesArray = Object.entries(QUIZZES_DATA).map(([id, data]) => ({ id, ...data }));

  return (
    <Router>
      <AppContent
        isAuthenticated={isAuthenticated}
        userProfile={userProfile}
        handleLogin={handleLogin}
        handleCreateAccount={handleCreateAccount}
        handleSetUsername={handleSetUsername}
        handleQuizComplete={handleQuizComplete}
        handleProfileUpdate={handleProfileUpdate}
        setIsAuthenticated={setIsAuthenticated}
        quizzesArray={quizzesArray}
      />
    </Router>
  );
}

const AppContent = ({ 
  isAuthenticated, 
  userProfile, 
  handleLogin, 
  handleCreateAccount, 
  handleSetUsername, 
  handleQuizComplete, 
  handleProfileUpdate,
  setIsAuthenticated, 
  quizzesArray 
}) => {
  const location = useLocation();
  const showBottomNav = isAuthenticated && userProfile.usernameSetupComplete && !['/quiz/', '/resultado-quiz/'].some(path => location.pathname.startsWith(path));

  return (
    <div className="min-h-screen bg-background text-foreground">
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          {!isAuthenticated ? (
            <>
              <Route path="/" element={<AnimatedRoute><PublicPage /></AnimatedRoute>} />
              <Route path="/bem-vindo" element={<AnimatedRoute><WelcomeScreen onCreateAccount={() => {}} onLogin={() => {}} /></AnimatedRoute>} />
              <Route path="/login" element={<AnimatedRoute><LoginScreen onLogin={handleLogin} /></AnimatedRoute>} />
              <Route path="/criar-conta" element={<AnimatedRoute><LoginScreen onLogin={handleCreateAccount} isCreatingAccount={true} /></AnimatedRoute>} />
              <Route path="/verificacao" element={<AnimatedRoute><VerificationScreen /></AnimatedRoute>} />
              <Route path="/o-que-vai-aprender" element={<AnimatedRoute><WhatYouWillLearnScreen /></AnimatedRoute>} />
              <Route path="*" element={<Navigate to="/" />} />
            </>
          ) : !userProfile.usernameSetupComplete ? (
             <>
              <Route path="/escolher-nome" element={<AnimatedRoute><UsernameScreen onSetUsername={handleSetUsername} /></AnimatedRoute>} />
              <Route path="*" element={<Navigate to="/escolher-nome" />} />
            </>
          ) : (
            <>
              <Route path="/" element={<Navigate to="/inicio" />} />
              <Route path="/inicio" element={<AnimatedRoute><QuizCatalogScreen quizzes={quizzesArray} userProfile={userProfile} /></AnimatedRoute>} />
              <Route path="/catalogo-quizzes" element={<AnimatedRoute><QuizCatalogScreen quizzes={quizzesArray} userProfile={userProfile} /></AnimatedRoute>} />
              <Route path="/quiz/:quizId" element={<AnimatedRoute><QuizInterfaceScreen quizzes={quizzesArray} onQuizComplete={handleQuizComplete} userProfile={userProfile} /></AnimatedRoute>} />
              <Route path="/resultado-quiz/:quizId" element={<AnimatedRoute><QuizResultScreen quizzes={quizzesArray} userProfile={userProfile} /></AnimatedRoute>} />
              <Route path="/perfil" element={<AnimatedRoute><UserProfileScreen userProfile={userProfile} onLogout={() => setIsAuthenticated(false)} onProfileUpdate={handleProfileUpdate} learningTracks={LEARNING_TRACKS} /></AnimatedRoute>} />
              <Route path="/sobre" element={<AnimatedRoute><AboutScreen /></AnimatedRoute>} />
              <Route path="/secao-tematica" element={<AnimatedRoute><ThematicSection /></AnimatedRoute>} />
              <Route path="/o-que-vai-aprender" element={<AnimatedRoute><WhatYouWillLearnScreen /></AnimatedRoute>} />
              <Route path="*" element={<Navigate to="/inicio" />} />
            </>
          )}
        </Routes>
      </AnimatePresence>
      {showBottomNav && <BottomNav />}
      <Toaster />
    </div>
  );
};

const AnimatedRoute = ({ children }) => (
  <motion.div
    initial="initial"
    animate="in"
    exit="out"
    variants={pageVariants}
    transition={pageTransition}
  >
    {children}
  </motion.div>
);

export default App;