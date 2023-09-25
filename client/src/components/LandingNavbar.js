import { NavLink } from 'react-router-dom';
import Wrapper from '../assets/wrappers/LandingNavbar';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux'
import React from 'react';

const Navbar = () => {
  const { user } = useSelector(state => state.user)

  return (
    <React.Fragment>
    {user ? null :  <Wrapper>
      <div className='nav-center'>
        <span className='logo'>Visacooler</span>
        <div className='nav-links'>
          <NavLink to='/' className='nav-link'>
            Home
          </NavLink>
          <NavLink to='/about' className='nav-link'>
            About
          </NavLink>
          <NavLink to='/partner' className='nav-link'>
          Partner
          </NavLink>
          <NavLink to='/register' className='nav-link'>
          Login
          </NavLink>

        </div>
      </div>
    </Wrapper>}

   
    </React.Fragment>
  );
};

export default Navbar;
