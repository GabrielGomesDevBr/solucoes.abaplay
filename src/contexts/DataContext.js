import React, { createContext, useState, useEffect, useContext } from 'react';
import { getResources } from '../services/resourceService';

const DataContext = createContext(null);

export const DataProvider = ({ children }) => {
  const [resources, setResources] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
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

    fetchResources();
  }, []);

  const value = {
    resources,
    loading,
    error,
  };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

export const useResources = () => {
  const context = useContext(DataContext);
  if (context === undefined) {
    throw new Error('useResources must be used within a DataProvider');
  }
  return context;
};
