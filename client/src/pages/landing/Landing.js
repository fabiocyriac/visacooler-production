import React from 'react';
import { Hero, Categories, PopularVisas, PopularServices } from '../../components/landing';

const Landing = () => {
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
