import { createClient } from '@supabase/supabase-js';

// Obtenha a URL e a chave anon do seu painel de projeto no Supabase
const supabaseUrl = process.env.REACT_APP_SUPABASE_URL || 'SUA_URL_DO_PROJETO';
const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY || 'SUA_CHAVE_ANON';

// Crie e exporte o cliente Supabase
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
