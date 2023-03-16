import main from '../assets/images/main.svg';
import Wrapper from '../assets/wrappers/LandingPage';
import { Logo } from '../components';
import { Link } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { useAppContext } from '../context/appContext';
import React from 'react';

const Landing = () => {
  const { user } = useAppContext();
  return (
    <div className='landing'>
    <React.Fragment>
      {user && <Navigate to='/' />}
      <Wrapper>
        <nav>
          <Logo />
        </nav>
        <div className='container page'>
          {/* info */}
          <div className='info'>
            <h1>
              visa <span>tracking</span> system
            </h1>
            <p>
            Today's global enterprises face the challenge of getting the 
            right people to the right global locations at the right time. 
            For us to succeed in this challenge, we need up-to-date 
            knowledge of global legal complexities, as well as the capabilities 
            to deliver a truly meaningful solution.
            </p>
            <Link to='/register' className='btn btn-hero'>
              Login/Register
            </Link>
          </div>
          <img src={main} alt='visa hunt' className='img main-img' />
        </div>
      </Wrapper>
    </React.Fragment>
    </div>
  );
};

export default Landing;
