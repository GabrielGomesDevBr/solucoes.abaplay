import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';

const ResourceCard = ({ resource }) => {
  return (
    <div className="border rounded-lg p-4 flex flex-col">
      <h3 className="text-lg font-semibold mb-2">{resource.title}</h3>
      <p className="text-gray-600 text-sm mb-4 flex-grow">{resource.description}</p>
      <div className="flex justify-between items-center">
        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${resource.is_premium ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'}`}>
          {resource.is_premium ? 'Premium' : 'Gratuito'}
        </span>
        <Link to={`/resources/${resource.id}`}>
          <Button size="sm">Ver</Button>
        </Link>
      </div>
    </div>
  );
};

export default ResourceCard;
