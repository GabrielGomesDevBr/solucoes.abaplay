import React from 'react';

const AdminDashboardPage = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-gray-700">Total de Usuários</h3>
          <p className="text-3xl font-bold text-blue-600 mt-2">125</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-gray-700">Recursos Publicados</h3>
          <p className="text-3xl font-bold text-blue-600 mt-2">42</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-gray-700">Vendas (Mês)</h3>
          <p className="text-3xl font-bold text-blue-600 mt-2">R$ 1.234,56</p>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboardPage;
