import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';

const PricingPage = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800">Nossos Planos</h1>
        <p className="text-lg text-gray-600 mt-2">Escolha o plano que melhor se adapta às suas necessidades.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {/* Plano Gratuito */}
        <div className="border rounded-lg p-8 flex flex-col">
          <h2 className="text-2xl font-semibold text-center">Gratuito</h2>
          <div className="text-center my-4">
            <span className="text-4xl font-bold">R$0</span>
            <span className="text-gray-500">/mês</span>
          </div>
          <ul className="space-y-2 text-gray-600 mb-8">
            <li>✓ Acesso a recursos gratuitos</li>
            <li>✓ Suporte por e-mail</li>
          </ul>
          <div className="mt-auto">
            <Link to="/register">
              <Button variant="outline" className="w-full">Começar</Button>
            </Link>
          </div>
        </div>

        {/* Plano Premium */}
        <div className="border rounded-lg p-8 flex flex-col border-blue-500 ring-2 ring-blue-500">
          <h2 className="text-2xl font-semibold text-center">Premium</h2>
          <div className="text-center my-4">
            <span className="text-4xl font-bold">R$49</span>
            <span className="text-gray-500">/mês</span>
          </div>
          <ul className="space-y-2 text-gray-600 mb-8">
            <li>✓ Acesso a todos os recursos</li>
            <li>✓ Acesso a todos os serviços</li>
            <li>✓ Suporte prioritário</li>
          </ul>
          <div className="mt-auto">
            <Link to="/register">
              <Button className="w-full">Assinar Agora</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;
