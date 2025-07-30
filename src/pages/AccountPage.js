import React, { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { getUserProfile } from '../services/userService';
import Spinner from '../components/ui/Spinner';

const AccountPage = () => {
  const { user } = useAuth();
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    if (user) {
      const fetchProfile = async () => {
        try {
          setLoading(true);
          const { data, error } = await getUserProfile(user.id);
          if (error) throw error;
          setProfile(data);
        } catch (err) {
          setError(err.message || 'Erro ao buscar perfil.');
        } finally {
          setLoading(false);
        }
      };
      fetchProfile();
    }
  }, [user]);

  if (loading) return <div className="flex justify-center items-center h-full"><Spinner /></div>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Minha Conta</h1>
      {profile && (
        <div className="bg-white shadow-md rounded-lg p-6">
          <p><strong>Nome:</strong> {profile.full_name}</p>
          <p><strong>E-mail:</strong> {user.email}</p>
          <p><strong>Plano:</strong> {profile.subscription_status}</p>
        </div>
      )}
    </div>
  );
};

export default AccountPage;
