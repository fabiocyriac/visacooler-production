import React from "react";
import { Outlet, useNavigate, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux'
import Loading from "../shared/Loading";
import Footer from "../landing/Footer";

const PublicRoute = () => {
  const navigation = useNavigate();
  const isPageLoading = navigation.state === 'loading';
  const { user } = useSelector(state => state.auth)

  if (isPageLoading) return <Loading />;

  return user ? <Navigate to="/" /> : <><section className='align-element py-20'><Outlet /></section><Footer /></>
};

export default PublicRoute;



