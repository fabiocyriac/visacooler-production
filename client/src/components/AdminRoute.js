import React from "react";
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux'
import Loading from './Loading'

const ProtectedRoute = ({ children }) => {
  const { user, userLoading } = useSelector(state => state.user)

  if (userLoading) return <Loading />;
  if (!user) {
    return <Navigate to='/home' />;
  }
  return children;
};

export default ProtectedRoute;



