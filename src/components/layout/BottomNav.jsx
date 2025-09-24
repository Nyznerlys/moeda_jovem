import React from 'react';
import { motion } from 'framer-motion';
import { Home, BookOpen, User, BarChart3 } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const navItems = [
  { path: '/inicio', icon: Home, label: 'Início' },
  { path: '/o-que-vai-aprender', icon: BookOpen, label: 'Aprender' },
  { path: '/perfil', icon: User, label: 'Perfil' },
];

const BottomNav = () => {
  const location = useLocation();

  return (
    <motion.div 
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 120, damping: 20 }}
      className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-top z-50"
    >
      <div className="flex justify-around items-center h-16 px-2">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path || (item.path === '/inicio' && location.pathname === '/catalogo-quizzes');
          return (
            <Link
              to={item.path}
              key={item.label}
              className={`flex flex-col items-center justify-center gap-1 p-2 rounded-lg transition-colors w-1/3 ${
                isActive ? 'text-primary-green' : 'text-text-gray hover:text-primary-green-medium'
              }`}
            >
              <item.icon className={`w-6 h-6 ${isActive ? 'text-primary-green' : ''}`} />
              <span className={`text-xs font-medium ${isActive ? 'text-primary-green' : ''}`}>{item.label}</span>
            </Link>
          );
        })}
      </div>
    </motion.div>
  );
};

export default BottomNav;