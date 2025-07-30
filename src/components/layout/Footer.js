import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white border-t mt-auto">
      <div className="container mx-auto px-6 py-4 text-center text-gray-600">
        <p>&copy; {new Date().getFullYear()} Soluções ABAplay. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
