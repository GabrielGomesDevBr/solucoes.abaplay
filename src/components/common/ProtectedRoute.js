import React, { useEffect, useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { getUserProfile } from '../../services/userService';
import Spinner from '../ui/Spinner'; // Supondo que você tenha um componente de spinner

const ProtectedRoute = ({ adminOnly = false }) => {
  const { user, loading: authLoading } = useAuth();
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (authLoading) {
      return; // Aguarda o fim da autenticação inicial
    }

    if (!user) {
      setLoading(false);
      return; // Se não há usuário, não há perfil para buscar
    }

    const fetchProfile = async () => {
      try {
        const { data, error } = await getUserProfile(user.id);
        if (error) {
          throw error;
        }
        setProfile(data);
      } catch (err) {
        setError(err.message || 'Erro ao buscar perfil do usuário.');
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [user, authLoading]);

  if (authLoading || loading) {
    return <div className="flex justify-center items-center h-screen"><Spinner /></div>;
  }

  if (!user) {
    // Se o usuário não estiver logado, redireciona para o login
    return <Navigate to="/login" replace />;
  }

  if (adminOnly && profile?.role !== 'admin') {
    // Se a rota é apenas para admin e o usuário não for, redireciona para a home
    // Você pode criar uma página de "Acesso Negado" se preferir
    return <Navigate to="/" replace />;
  }

  if (error) {
    // Trata o erro na busca do perfil
    return <div className="text-red-500 text-center mt-4">{error}</div>;
  }

  // Se tudo estiver ok, renderiza o conteúdo da rota protegida
  return <Outlet />;
};

export default ProtectedRoute;
