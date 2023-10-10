import React from 'react';
import { Navigate } from 'react-router-dom';
import CurrentUserContext from '../contexts/CurrentUserContext';

function ProtectedRoute({ component: Component, ...props }) {
  const currentUser = React.useContext(CurrentUserContext);
  if (!currentUser.isLoggedIn) {
    return <Navigate to="/" />;
  }
  return <Component {...props} />;
}


export default ProtectedRoute;
