import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const { resetPassword } = useAuth(); // Supondo que você adicione `resetPassword` ao seu AuthContext

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setMessage('');
    setLoading(true);
    try {
      // A função de reset de senha do Supabase envia o e-mail diretamente
      // Você precisará de uma função no seu authService que chame `supabase.auth.resetPasswordForEmail`
      // await resetPassword(email);
      setMessage('Se um usuário com este e-mail existir, um link de redefinição de senha será enviado.');
    } catch (err) {
      setError(err.message || 'Ocorreu um erro.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800">Redefinir Senha</h1>
          <p className="mt-2 text-gray-600">Digite seu e-mail para receber um link de redefinição.</p>
        </div>

        {message && <div className="p-3 text-sm text-green-700 bg-green-100 rounded-lg">{message}</div>}
        {error && <div className="p-3 text-sm text-red-700 bg-red-100 rounded-lg">{error}</div>}

        <form className="space-y-6" onSubmit={handleSubmit}>
          <Input
            label="E-mail"
            name="email"
            type="email"
            placeholder="seu-email@exemplo.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <div>
            <Button type="submit" disabled={loading} className="w-full">
              {loading ? 'Enviando...' : 'Enviar Link'}
            </Button>
          </div>
        </form>
        <p className="text-sm text-center text-gray-600">
          Lembrou a senha?{' '}
          <Link to="/login" className="font-medium text-blue-600 hover:underline">
            Faça login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
