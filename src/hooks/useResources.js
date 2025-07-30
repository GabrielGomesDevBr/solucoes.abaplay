import { useContext } from 'react';
import { DataContext } from './DataContext';

export const useResources = () => {
  const context = useContext(DataContext);
  if (context === undefined) {
    throw new Error('useResources must be used within a DataProvider');
  }
  return context;
};
