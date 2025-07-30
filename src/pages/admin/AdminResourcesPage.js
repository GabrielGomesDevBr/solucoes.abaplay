import React, { useState, useEffect } from 'react';
import { getResources, deleteResource } from '../../services/resourceService';
import Modal from '../../components/common/Modal';
import UploadForm from '../../components/admin/UploadForm';
import Button from '../../components/ui/Button';
import Spinner from '../../components/ui/Spinner';

const AdminResourcesPage = () => {
  const [resources, setResources] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedResource, setSelectedResource] = useState(null);

  const fetchResources = async () => {
    try {
      setLoading(true);
      const { data, error } = await getResources();
      if (error) throw error;
      setResources(data);
    } catch (err) {
      setError(err.message || 'Erro ao buscar recursos.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchResources();
  }, []);

  const handleAdd = () => {
    setSelectedResource(null);
    setIsModalOpen(true);
  };

  const handleEdit = (resource) => {
    setSelectedResource(resource);
    setIsModalOpen(true);
  };

  const handleDelete = async (resourceId) => {
    if (window.confirm('Tem certeza que deseja deletar este recurso?')) {
      try {
        await deleteResource(resourceId);
        fetchResources(); // Atualiza a lista
      } catch (err) {
        setError(err.message || 'Erro ao deletar recurso.');
      }
    }
  };

  const handleFormSubmit = () => {
    setIsModalOpen(false);
    fetchResources();
  };

  if (loading) return <div className="flex justify-center items-center h-full"><Spinner /></div>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Gerenciar Recursos</h1>
        <Button onClick={handleAdd}>Adicionar Recurso</Button>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={selectedResource ? 'Editar Recurso' : 'Adicionar Recurso'}
      >
        <UploadForm
          resource={selectedResource}
          onFormSubmit={handleFormSubmit}
          onCancel={() => setIsModalOpen(false)}
        />
      </Modal>

      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Título</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Categoria</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tipo</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Ações</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {resources.map((resource) => (
              <tr key={resource.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{resource.title}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{resource.categories?.name || 'N/A'}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${resource.is_premium ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'}`}>
                    {resource.is_premium ? 'Premium' : 'Gratuito'}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <Button variant="outline" size="sm" onClick={() => handleEdit(resource)} className="mr-2">Editar</Button>
                  <Button variant="danger" size="sm" onClick={() => handleDelete(resource.id)}>Deletar</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminResourcesPage;
