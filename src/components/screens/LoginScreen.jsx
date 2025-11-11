import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input'; 
import { Label } from '@/components/ui/label';
import { Mail, Lock, ArrowLeft, UserPlus, LogIn } from 'lucide-react';

const LoginScreen = ({ onLogin, isCreatingAccount = false }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isCreatingAccount && password !== confirmPassword) {
      alert("As senhas não coincidem!");
      return;
    }
    const result = await onLogin(email, password);
    if (result === 'ok') {
      if (isCreatingAccount) {
        navigate('/verificacao'); 
      } else {
        navigate('/escolher-nome');
      }
    } else if (result === 'not-found') {
      // redireciona direto para criar conta se não existir
      navigate('/criar-conta');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white p-8 md:p-12 rounded-xl shadow-xl w-full max-w-md"
      >
        <Link to="/bem-vindo" className="inline-flex items-center text-text-gray hover:text-primary-green mb-6 group">
          <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
          Voltar
        </Link>

        <div className="text-center mb-8">
          <img 
            alt="Logo Moeda Jovem"
            className="w-20 h-20 mx-auto mb-4"
           src="https://images.unsplash.com/photo-1675473086331-bfd4aebb45ac" />
          <h1 className="text-3xl font-bold text-primary-green">
            {isCreatingAccount ? 'Crie sua Conta' : 'Bem-vindo(a) de Volta!'}
          </h1>
          <p className="text-text-gray mt-2">
            {isCreatingAccount ? 'Preencha os dados para começar sua jornada.' : 'Acesse sua conta para continuar aprendendo.'}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="md:col-span-2">
            <Label htmlFor="email" className="text-text-gray font-medium">Email</Label>
            <div className="relative mt-1">
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2 w-8 flex items-center justify-center">
                <Mail className="h-5 w-5 text-gray-400" />
              </div>
              <Input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder=""
                required
                style={{ paddingLeft: "3rem" }}
                className="input-field w-full"
              />
            </div>
          </div>

          <div>
            <Label htmlFor="password">Senha</Label>
            <div className="relative mt-1">
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2 w-8 flex items-center justify-center">
                <Lock className="h-5 w-5 text-gray-400" />
              </div>
              <Input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder=""
                required
                style={{ paddingLeft: "3rem" }}
                className="input-field w-full"
              />
            </div>
          </div>

          {isCreatingAccount && (
            <div>
              <Label htmlFor="confirmPassword">Confirmar Senha</Label>
              <div className="relative mt-1">
                <div className="absolute left-4 top-1/2 transform -translate-y-1/2 w-8 flex items-center justify-center">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <Input
                  type="password"
                  id="confirmPassword"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder=""
                  style={{ paddingLeft: "3rem" }}
                  required
                  className="pl-10 input-field"
                />
              </div>
            </div>
          )}

          <Button type="submit" size="lg" className="w-full bg-primary-green hover:bg-primary-green-medium text-white">
            {isCreatingAccount ? <UserPlus className="mr-2 h-5 w-5" /> : <LogIn className="mr-2 h-5 w-5" />}
            {isCreatingAccount ? 'Criar Conta' : 'Entrar'}
          </Button>
        </form>

        <p className="text-center text-text-gray mt-8 text-sm">
          {isCreatingAccount ? 'Já tem uma conta?' : 'Não tem uma conta?'}
          <Link to={isCreatingAccount ? '/login' : '/criar-conta'} className="font-semibold text-primary-green hover:underline ml-1">
            {isCreatingAccount ? 'Faça Login' : 'Crie uma Agora'}
          </Link>
        </p>
      </motion.div>
    </div>
  );
};

export default LoginScreen;