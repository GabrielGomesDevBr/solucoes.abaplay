import { supabase } from './supabaseClient';

/**
 * Obtém o perfil de um usuário.
 * @param {string} userId - O ID do usuário.
 */
export const getUserProfile = async (userId) => {
  const { data, error } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', userId)
    .single();

  return { data, error };
};

/**
 * Busca todos os usuários (perfis).
 */
export const getUsers = async () => {
  const { data, error } = await supabase.from('profiles').select('*');
  return { data, error };
};
