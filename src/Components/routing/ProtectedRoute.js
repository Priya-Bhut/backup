import React from 'react';
import { Navigate } from 'react-router-dom';
import withRouter from '../WrapperComponents/withRouter';
const ProtectedRoute = ({ children, params }) => {
  const { organisationUrl } = params || {};
  const token = localStorage.getItem('token');
  if (!token) {
    return <Navigate to='/login' state={{ from: location }} />;
  }
  if (!organisationUrl || organisationUrl == 'null') {
    return <Navigate to='/organisations' state={{ from: location }} />;
  }
  return token ? children : <Navigate to='/login' state={{ from: location }} />;
};
export default withRouter(ProtectedRoute);
