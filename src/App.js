import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';

// Importe as páginas
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import AdminDashboardPage from './pages/admin/AdminDashboardPage';
import AdminResourcesPage from './pages/admin/AdminResourcesPage';
import AdminUsersPage from './pages/admin/AdminUsersPage';

// Importe os componentes de layout e proteção
import MainLayout from './components/layout/MainLayout';
import AdminLayout from './components/admin/AdminLayout';
import ProtectedRoute from './components/common/ProtectedRoute';

import { DataProvider } from './contexts/DataContext';

function App() {
  return (
    <AuthProvider>
      <DataProvider>
        <Router>
          <Routes>
            {/* Rotas Públicas */}
            <Route element={<MainLayout />}>
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/forgot-password" element={<ForgotPasswordPage />} />
              {/* Adicione outras rotas públicas aqui (preços, serviços, etc.) */}
            </Route>

            {/* Rotas de Admin Protegidas */}
            <Route element={<ProtectedRoute adminOnly={true} />}>
              <Route path="/admin" element={<AdminLayout />}>
                <Route index element={<AdminDashboardPage />} />
                <Route path="resources" element={<AdminResourcesPage />} />
                <Route path="users" element={<AdminUsersPage />} />
              </Route>
            </Route>

            {/* Rota de Conta Protegida */}
            <Route element={<ProtectedRoute />}>
              <Route path="/account" element={<AccountPage />} />
            </Route>

            {/* Adicione outras rotas aqui (ex: painel do usuário) */}
          </Routes>
        </Router>
      </DataProvider>
    </AuthProvider>
  );
}

export default App;

