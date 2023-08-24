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
            {<><br></br><br></br></>}
            We are a global firm singularly focused on meeting
            the immigration challenges of corporate clients around
            the world in ways that make immigration more strategic
            and clients more successful. We employ a uniquely holistic approach,
            combining an incredibly deep knowledge of immigration laws with
            an incredibly strategic understanding of our clients’ challenges
            and requirements. We apply process and technology to deliver more
            efficient and compliant solutions.

            </p>
            <Link to='/register' className='btn btn-hero'>
              Login
            </Link>
            {' '}
            <Link to='/partner' className='btn btn-hero'>
              Become a Partner
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
