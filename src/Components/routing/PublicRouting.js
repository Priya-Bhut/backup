import React from 'react';
import { Navigate } from 'react-router';

function PublicRouting({ children }) {
  const token = localStorage.getItem('token');
  return <div>{token ? <Navigate to='/organisations' state={{ from: location }} /> : children}</div>;
}

export default PublicRouting;
