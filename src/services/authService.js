import { supabase } from './supabaseClient';

/**
 * Registra um novo usuário.
 * @param {object} credentials - As credenciais do usuário.
 * @param {string} credentials.email - O email do usuário.
 * @param {string} credentials.password - A senha do usuário.
 * @param {object} [credentials.options] - Opções adicionais para o registro.
 */
export const signUp = async ({ email, password, options }) => {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options,
  });
  return { data, error };
};

/**
 * Autentica um usuário com email e senha.
 * @param {object} credentials - As credenciais do usuário.
 * @param {string} credentials.email - O email do usuário.
 * @param {string} credentials.password - A senha do usuário.
 */
export const signInWithPassword = async ({ email, password }) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  return { data, error };
};

/**
 * Faz logout do usuário atual.
 */
export const signOut = async () => {
  const { error } = await supabase.auth.signOut();
  return { error };
};

/**
 * Obtém a sessão do usuário atual.
 * A sessão contém informações sobre o usuário logado.
 */
export const getSession = async () => {
  const { data, error } = await supabase.auth.getSession();
  return { data, error };
};

/**
 * Obtém os dados do usuário atual.
 */
export const getUser = async () => {
  const { data: { user } } = await supabase.auth.getUser();
  return user;
};

/**
 * Envia um e-mail de redefinição de senha.
 * @param {string} email - O e-mail do usuário.
 */
export const sendPasswordResetEmail = async (email) => {
  const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: `${window.location.origin}/update-password`,
  });
  return { data, error };
};
