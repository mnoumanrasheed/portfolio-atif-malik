import React from 'react';
import { Navigate } from 'react-router-dom';

/**
 * M3 Hive route redirected to consolidated /ventures hub as per UX architecture.
 */
export const M3Hive: React.FC = () => {
  return <Navigate to="/ventures" replace />;
};
