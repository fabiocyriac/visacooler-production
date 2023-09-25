import React from "react";
import {Navigate, Outlet} from 'react-router-dom'
import { useSelector } from 'react-redux'
import Loading from './Loading'

const ProtectedRoute = () => {
  const { user, userLoading } = useSelector(state => state.user)

  if (userLoading) return <Loading />;
  return user? <section className='align-element py-20'><Outlet/></section> : <Navigate to="/home"/>
};

export default ProtectedRoute;



