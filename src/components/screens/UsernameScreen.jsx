import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { User, ArrowRight } from 'lucide-react';

const UsernameScreen = ({ onSetUsername }) => {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim()) {
      onSetUsername(username.trim());
      navigate('/inicio');
    } else {
      alert('Por favor, escolha um nome de usuário.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          alt="Fundo abstrato esverdeado com formas geométricas suaves"
          className="w-full h-full object-cover opacity-30"
         src="https://images.unsplash.com/photo-1701580881481-081bcab321c8" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary-green-light via-transparent to-accent-blue-light opacity-50"></div>
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="bg-white p-8 md:p-12 rounded-xl shadow-2xl w-full max-w-md text-center z-10"
      >
        <User className="mx-auto h-16 w-16 text-primary-green mb-6" />
        <h1 className="text-3xl font-bold text-text-dark mb-3">Como podemos te chamar?</h1>
        <p className="text-text-gray mb-8">
          Escolha um nome de usuário para personalizar sua experiência no Moeda Jovem.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <Label htmlFor="username" className="sr-only">Nome de Usuário</Label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Seu nome de usuário"
                required
                className="pl-10 input-field text-lg"
              />
            </div>
          </div>

          <Button type="submit" size="lg" className="w-full bg-text-dark hover:bg-gray-700 text-white">
            Continuar <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </form>
      </motion.div>
    </div>
  );
};

export default UsernameScreen;