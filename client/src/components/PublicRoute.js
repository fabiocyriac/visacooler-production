import React from "react";
import {Navigate, Outlet} from 'react-router-dom'
import { useSelector } from 'react-redux'
import Loading from './Loading'
import Footer from "./Footer";

const PublicRoute = () => {
  const { user, userLoading } = useSelector(state => state.user)

  if (userLoading) return <Loading />;
  return user? <Navigate to="/"/> : <><section className='align-element py-20'><Outlet/></section><Footer/></>

};

export default PublicRoute;



