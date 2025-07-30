import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { addResource, updateResource, uploadFile } from '../../services/resourceService';
import Button from '../ui/Button';
import Input from '../ui/Input';

const UploadForm = ({ resource, onFormSubmit, onCancel }) => {
  const { register, handleSubmit, setValue, formState: { errors } } = useForm();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [file, setFile] = useState(null);

  useEffect(() => {
    if (resource) {
      setValue('title', resource.title);
      setValue('description', resource.description);
      setValue('is_premium', resource.is_premium);
      setValue('category_id', resource.category_id);
    }
  }, [resource, setValue]);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const onSubmit = async (formData) => {
    setLoading(true);
    setError('');

    try {
      let fileUrl = resource?.file_url || '';

      if (file) {
        const { data, error: uploadError } = await uploadFile(file, 'resources');
        if (uploadError) throw uploadError;
        // Corrigido para obter a URL pública
        const { publicURL, error: urlError } = supabase.storage.from('resources').getPublicUrl(data.path);
        if(urlError) throw urlError;
        fileUrl = publicURL;
      }

      const resourceData = { ...formData, file_url: fileUrl };

      if (resource) {
        await updateResource(resource.id, resourceData);
      } else {
        await addResource(resourceData);
      }

      onFormSubmit();
    } catch (err) {
      setError(err.message || 'Ocorreu um erro.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {error && <p className="text-red-500">{error}</p>}
      
      <Input
        label="Título"
        {...register('title', { required: 'Título é obrigatório' })}
        error={errors.title}
      />
      
      <Input
        label="Descrição"
        {...register('description')}
      />

      <div>
        <label className="block text-sm font-medium text-gray-700">Tipo</label>
        <select {...register('is_premium')} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
          <option value={false}>Gratuito</option>
          <option value={true}>Premium</option>
        </select>
      </div>

      {/* TODO: Adicionar um select para categorias */}

      <div>
        <label className="block text-sm font-medium text-gray-700">Arquivo</label>
        <input type="file" onChange={handleFileChange} className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"/>
      </div>

      <div className="flex justify-end space-x-2">
        <Button type="button" variant="outline" onClick={onCancel}>Cancelar</Button>
        <Button type="submit" disabled={loading}>{loading ? 'Salvando...' : 'Salvar'}</Button>
      </div>
    </form>
  );
};

export default UploadForm;
