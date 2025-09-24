import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useNavigate, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, CheckCircle } from 'lucide-react';

const VerificationScreen = () => {
  const [code, setCode] = useState(new Array(4).fill(''));
  const inputsRef = useRef([]);
  const navigate = useNavigate();

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;
    setCode([...code.map((d, idx) => (idx === index ? element.value : d))]);
    if (element.nextSibling && element.value) {
      element.nextSibling.focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !code[index] && inputsRef.current[index-1]) {
        inputsRef.current[index-1].focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const verificationCode = code.join('');
    if (verificationCode.length === 4) {
      console.log('Código de verificação:', verificationCode);
      navigate('/escolher-nome');
    } else {
      alert('Por favor, insira o código completo.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white p-8 md:p-12 rounded-xl shadow-xl w-full max-w-md text-center"
      >
        <Link to="/criar-conta" className="inline-flex items-center text-text-gray hover:text-primary-green mb-6 group absolute top-6 left-6">
          <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
          Voltar
        </Link>

        <CheckCircle className="mx-auto h-16 w-16 text-primary-green mb-6" />
        <h1 className="text-3xl font-bold text-text-dark mb-3">Verifique seu Email</h1>
        <p className="text-text-gray mb-8">
          Enviamos um código de 4 dígitos para seu email. Por favor, insira abaixo.
        </p>

        <form onSubmit={handleSubmit}>
          <div className="flex justify-center space-x-2 md:space-x-4 mb-8">
            {code.map((data, index) => (
              <input
                ref={el => inputsRef.current[index] = el}
                key={index}
                type="text"
                name="code"
                maxLength="1"
                className="w-14 h-14 md:w-16 md:h-16 text-center text-2xl md:text-3xl font-semibold border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-green focus:border-transparent transition-all"
                value={data}
                onChange={(e) => handleChange(e.target, index)}
                onFocus={(e) => e.target.select()}
                onKeyDown={(e) => handleKeyDown(e, index)}
              />
            ))}
          </div>

          <Button type="submit" size="lg" className="w-full bg-primary-green hover:bg-primary-green-medium text-white">
            Verificar Código
          </Button>
        </form>

        <p className="text-text-gray mt-8 text-sm">
          Não recebeu o código?{' '}
          <button className="font-semibold text-primary-green hover:underline">
            Reenviar código
          </button>
        </p>
      </motion.div>
    </div>
  );
};

export default VerificationScreen;