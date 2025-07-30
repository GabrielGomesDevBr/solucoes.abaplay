import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';

const HomePage = () => {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
        <span className="block">Hub de Conhecimento e Serviços</span>
        <span className="block text-blue-600">para Terapia ABA</span>
      </h1>
      <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
        Oferecemos materiais com curadoria e serviços especializados para terapeutas e clínicas de Análise do Comportamento Aplicada.
      </p>
      <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
        <div className="rounded-md shadow">
          <Link to="/register">
            <Button size="lg">Comece Agora</Button>
          </Link>
        </div>
        <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
          <Link to="/services">
            <Button variant="outline" size="lg">Ver Serviços</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;