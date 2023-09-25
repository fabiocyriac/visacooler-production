import { useSelector } from 'react-redux'
import React from 'react';
import { Hero, Categories, PopularVisas, PopularServices } from '../../components';

const Landing = () => {
  const { user } = useSelector(state => state.user)
  return (
    <>
      <Hero />
      <Categories/>
      <PopularVisas />
      <PopularServices/>
    </>
  );
};

export default Landing;
