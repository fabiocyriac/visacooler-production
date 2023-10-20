import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { logoutUser } from '../../redux/features/auth/authService';

const Header = () => {
  const dispatch = useDispatch();
  const { user } = useSelector(state => state.auth)

  return (
    <header className='bg-neutral py-2 text-neutral-content'>
      <div className='align-element flex justify-center sm:justify-end'>
        {user ? (
          <div className='flex gap-x-2 sm:gap-x-8 items-center'>
            <p className='text-xs sm:text-sm'>Hello, {user?.name}</p>
            <button
              className='btn btn-xs btn-outline btn-primary'
              onClick={() => dispatch(logoutUser())}
            >
              logout
            </button>
          </div>
        ) : (
          <div className='flex gap-x-6 justify-center items-center'>
            <Link to='/login' className='link link-hover text-xs sm:text-sm'>
              Sign in
            </Link>
            <Link to='/register' className='link link-hover text-xs sm:text-sm'>
              Sign up
            </Link>
            <Link to='/partner' className='link link-hover text-xs sm:text-sm'>
              Become a Partner
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};
export default Header;
