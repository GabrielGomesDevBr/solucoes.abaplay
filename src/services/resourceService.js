import { supabase } from './supabaseClient';

/**
 * Busca todos os recursos.
 */
export const getResources = async () => {
  const { data, error } = await supabase.from('resources').select('*, categories(name)');
  return { data, error };
};

/**
 * Adiciona um novo recurso.
 * @param {object} resourceData - Os dados do recurso a ser adicionado.
 */
export const addResource = async (resourceData) => {
  const { data, error } = await supabase.from('resources').insert([resourceData]);
  return { data, error };
};

/**
 * Atualiza um recurso existente.
 * @param {string} resourceId - O ID do recurso a ser atualizado.
 * @param {object} resourceData - Os novos dados do recurso.
 */
export const updateResource = async (resourceId, resourceData) => {
  const { data, error } = await supabase.from('resources').update(resourceData).eq('id', resourceId);
  return { data, error };
};

/**
 * Deleta um recurso.
 * @param {string} resourceId - O ID do recurso a ser deletado.
 */
export const deleteResource = async (resourceId) => {
  const { data, error } = await supabase.from('resources').delete().eq('id', resourceId);
  return { data, error };
};

/**
 * Faz upload de um arquivo para o Supabase Storage.
 * @param {File} file - O arquivo a ser enviado.
 * @param {string} bucket - O nome do bucket de destino.
 */
export const uploadFile = async (file, bucket) => {
  const fileName = `${Date.now()}_${file.name}`;
  const { data, error } = await supabase.storage.from(bucket).upload(fileName, file);
  return { data, error, fileName };
};
