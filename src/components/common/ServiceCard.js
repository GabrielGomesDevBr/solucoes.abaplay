import React from 'react';
import Button from '../ui/Button';

const ServiceCard = ({ title, description }) => {
  return (
    <div className="border rounded-lg p-6 text-center">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <Button>Saiba Mais</Button>
    </div>
  );
};

export default ServiceCard;
