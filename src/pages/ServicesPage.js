import React from 'react';
import ServiceCard from '../components/common/ServiceCard';

const ServicesPage = () => {
  const services = [
    {
      title: 'Consultoria',
      description: 'Oferecemos consultoria especializada para clínicas e terapeutas ABA.',
    },
    {
      title: 'Supervisão',
      description: 'Supervisão de casos e programas de intervenção para garantir a qualidade do serviço.',
    },
    {
      title: 'Treinamento',
      description: 'Cursos e workshops para aprimoramento profissional em Análise do Comportamento Aplicada.',
    },
  ];

  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800">Nossos Serviços</h1>
        <p className="text-lg text-gray-600 mt-2">Conheça as soluções que oferecemos para profissionais da Terapia ABA.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <ServiceCard key={index} title={service.title} description={service.description} />
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;
