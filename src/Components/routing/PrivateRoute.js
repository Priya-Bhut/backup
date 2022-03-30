import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import withRouter from '../WrapperComponents/withRouter';
const PrivateRoute = ({ children }) => {
  //   const { organisationUrl } = params || {};
  const token = localStorage.getItem('token');
  let location = useLocation();
  // if (location.pathname === "/" && token?.null) {
  // 	return <Navigate to={`logIn`} state={{ from: location }} />;
  // } else {
  // 	return <Navigate t0={`/${organisationUrl}`} state={{ from: location }} />;
  // }
  if (!token) {
    return <Navigate to='/login' state={{ from: location }} />;
  }
  //   if (!organisationUrl || organisationUrl == "null") {
  //     return <Navigate to="/organisations" state={{ from: location }} />;
  //   }
  return token ? children : <Navigate to='/login' state={{ from: location }} />;
};
export default withRouter(PrivateRoute);
