import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import Button from '../ui/Button';

const Navbar = () => {
  const { user, signOut } = useAuth();

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-blue-600">Soluções ABAplay</Link>
        <div className="flex items-center space-x-4">
          <Link to="/" className="text-gray-600 hover:text-blue-500">Início</Link>
          <Link to="/services" className="text-gray-600 hover:text-blue-500">Serviços</Link>
          <Link to="/pricing" className="text-gray-600 hover:text-blue-500">Preços</Link>
          
          {user ? (
            <div className="flex items-center space-x-4">
              <Link to="/account" className="text-gray-600 hover:text-blue-500">Minha Conta</Link>
              <Button onClick={signOut} variant="secondary">Sair</Button>
            </div>
          ) : (
            <div className="flex items-center space-x-2">
              <Link to="/login">
                <Button variant="outline">Entrar</Button>
              </Link>
              <Link to="/register">
                <Button>Criar Conta</Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
