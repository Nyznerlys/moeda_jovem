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
  // Start unauthenticated by default to avoid showing protected UI from a stale localStorage value.
  // Auth will be hydrated from the server (`/api/auth/me`) or set after a successful login.
  const [isAuthenticated, setIsAuthenticated] = useState(false);
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

  const handleLogin = async (email, password) => {
    if (!email || !password) {
      audioManager.playSound('incorrect');
      setIsAuthenticated(false);
      toast({ title: "Erro no Login", description: "Por favor, verifique suas credenciais.", variant: "destructive" });
      return false;
    }

    console.debug('[handleLogin] attempt', { email });

    // Try server-side login first
    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ email, password })
      });

      if (res.status === 401) {
        // server reports invalid credentials — show explicit error (don't redirect to create account)
        audioManager.playSound('incorrect');
        setIsAuthenticated(false);
        toast({ title: "Erro no Login", description: "Email ou senha incorretos.", variant: "destructive" });
        console.debug('[handleLogin] server rejected credentials for', email);
        return false;
      }

      if (!res.ok) throw new Error('login_failed');

      const data = await res.json();
      const user = data?.user;
      console.debug('[handleLogin] server login OK, user:', user);
      if (user) {
        setUserProfile(prev => ({ ...DEFAULT_USER_PROFILE, ...prev, ...user, usernameSetupComplete: !!prev.usernameSetupComplete }));
        setIsAuthenticated(true);
        audioManager.playSound('achievement');
        toast({ title: "Login bem-sucedido!", description: "Bem-vindo(a) de volta!" });
        return 'ok';
      }
    } catch (err) {
      console.warn('Server login failed, falling back to local registry', err);
      // continue to fallback
    }

    // Fallback: local users registry (offline/dev)
    try {
      const usersRaw = localStorage.getItem('moedaJovemUsers');
      const users = usersRaw ? JSON.parse(usersRaw) : {};
      const stored = users[email];
      console.debug('[handleLogin] fallback stored entry:', stored ? { hasPassword: !!stored.password } : null);
      if (!stored) return 'not-found';

      // If no password stored locally, we cannot validate offline — require server
      if (!stored.password) {
        audioManager.playSound('incorrect');
        setIsAuthenticated(false);
        toast({ title: "Não é possível validar a senha offline", description: "Conecte-se à internet e faça login ou recrie a conta localmente.", variant: "destructive" });
        return false;
      }

      // Validate password in local registry (dev fallback)
      if (stored.password !== password) {
        setIsAuthenticated(false);
        audioManager.playSound('incorrect');
        toast({ title: "Senha incorreta", description: "Por favor, verifique sua senha.", variant: "destructive" });
        return false;
      }

      setUserProfile({ ...DEFAULT_USER_PROFILE, ...stored, usernameSetupComplete: !!stored.usernameSetupComplete });
      setIsAuthenticated(true);
      audioManager.playSound('achievement');
      toast({ title: "Login bem-sucedido!", description: "Bem-vindo(a) de volta!" });
      return 'ok';
    } catch (e) {
      setIsAuthenticated(false);
      audioManager.playSound('incorrect');
      toast({ title: "Erro no Login", description: "Por favor, verifique suas credenciais.", variant: "destructive" });
      return false;
    }
  };

  const handleCreateAccount = async (email, password) => {
    if (!email || !password) {
      audioManager.playSound('incorrect');
      toast({ title: "Erro ao criar conta", description: "Por favor, tente novamente.", variant: "destructive" });
      return false;
    }

    // Try server-side registration
    try {
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ email, password })
      });

      if (res.status === 409) {
        toast({ title: 'Conta já existe', description: 'Use outro email ou faça login.' });
        return 'exists';
      }

      if (!res.ok) throw new Error('register_failed');

      const data = await res.json();
      const user = data?.user;
      if (user) {
        const newProfile = { ...DEFAULT_USER_PROFILE, ...user, usernameSetupComplete: false };
        setUserProfile(newProfile);
        setIsAuthenticated(true);
        audioManager.playSound('achievement');
        toast({ title: "Conta criada com sucesso!", description: "Bem-vindo(a) ao Moeda Jovem!" });
        return 'ok';
      }
    } catch (err) {
      console.warn('Server register failed, falling back to local registry', err);
    }

    // Fallback: local registry
    try {
      const usersRaw = localStorage.getItem('moedaJovemUsers');
      const users = usersRaw ? JSON.parse(usersRaw) : {};
      const nameFromEmail = String(email).split('@')[0];
      const newProfile = { ...DEFAULT_USER_PROFILE, email, name: nameFromEmail, usernameSetupComplete: false };
      // store password in local registry for dev auth (not secure, only for local/dev)
      users[email] = { ...newProfile, password };
      try { localStorage.setItem('moedaJovemUsers', JSON.stringify(users)); } catch (e) { /* ignore */ }

      setUserProfile(newProfile);
      setIsAuthenticated(true);
      audioManager.playSound('achievement');
      toast({ title: "Conta criada com sucesso!", description: "Bem-vindo(a) ao Moeda Jovem!" });
      return 'ok';
    } catch (e) {
      audioManager.playSound('incorrect');
      toast({ title: "Erro ao criar conta", description: "Por favor, tente novamente.", variant: "destructive" });
      return false;
    }
  };

  const handleLogout = () => {
    // Call server to clear cookies, then clear local state
    (async () => {
      try {
        await fetch('/api/auth/logout', { method: 'POST', credentials: 'include' });
      } catch (e) {
        // ignore network errors
      }
      setIsAuthenticated(false);
      setUserProfile(DEFAULT_USER_PROFILE);
      try {
        localStorage.removeItem('moedaJovemAuth');
        localStorage.removeItem('moedaJovemProfile');
      } catch (e) {
        // ignore
      }
      toast({ title: 'Desconectado', description: 'Você saiu da conta.' });
    })();
  };
  
  const handleSetUsername = (username) => {
    setUserProfile(prev => {
      const newProfile = { ...prev, name: username, usernameSetupComplete: true };
      try {
        const usersRaw = localStorage.getItem('moedaJovemUsers');
        const users = usersRaw ? JSON.parse(usersRaw) : {};
        if (newProfile.email) {
          const existing = users[newProfile.email] || {};
          // preserve existing fields (like password) when updating username
          users[newProfile.email] = { ...existing, ...newProfile };
          localStorage.setItem('moedaJovemUsers', JSON.stringify(users));
        }
      } catch (e) {
        // ignore storage errors
      }
      return newProfile;
    });
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

    // Tenta persistir a tentativa no backend (serverless /api/quiz-attempts)
    (async () => {
      try {
        const userId = userProfile?.id ?? 1;
        // The server expects a numeric quiz_id. Our frontend uses string keys (e.g. 'q1_1').
        // Only send to server when quizId is numeric to avoid server 400 errors.
        const numericQuizId = Number(quizId);
        if (!Number.isNaN(numericQuizId) && numericQuizId > 0) {
          await fetch('/api/quiz-attempts', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
            body: JSON.stringify({ userId, quizId: numericQuizId, score, totalQuestions })
          });
        } else {
          console.debug('[handleQuizComplete] skipping server persist — quizId is non-numeric:', quizId);
        }
      } catch (err) {
        // falha ao persistir no servidor — manter localStorage (fallback já feito)
        console.error('Failed to persist quiz attempt:', err);
      }
    })();
  };

  // On mount try to hydrate auth state from server (if cookies present)
  useEffect(() => {
    (async () => {
      try {
        const res = await fetch('/api/auth/me', { method: 'GET', credentials: 'include' });
        if (res.ok) {
          const data = await res.json();
          const user = data?.user;
          if (user) {
            setUserProfile(prev => ({ ...DEFAULT_USER_PROFILE, ...prev, ...user, usernameSetupComplete: !!prev.usernameSetupComplete }));
            setIsAuthenticated(true);
          }
        }
      } catch (e) {
        // ignore - remain unauthenticated
      }
    })();
  }, []);

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
        handleLogout={handleLogout}
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
  handleLogout,
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
              <Route path="/perfil" element={<AnimatedRoute><UserProfileScreen userProfile={userProfile} onLogout={handleLogout} onProfileUpdate={handleProfileUpdate} learningTracks={LEARNING_TRACKS} /></AnimatedRoute>} />
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