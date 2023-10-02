import { useState, useEffect } from 'react';
import { FormInput, SubmitBtn, Alert } from '../../components';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { displayAlert, clearAlert } from '../../redux/features/util/utilSlice';
import { loginUser } from '../../redux/features/user/userService';
import { useDispatch, useSelector } from 'react-redux';

const initialState = {
  name: '',
  email: '',
  password: '',
  isMember: true,
};

const Login = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, error, isLoading } = useSelector(state => state.user)
  const { showAlert } = useSelector(stste => stste.util)
  const [values, setValues] = useState(initialState);

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const { email, password } = values;
    if (!email || !password) {
      toast.error("Please provide all values!");
      return;
    }
    const currentUser = { email, password };
    dispatch(loginUser({ currentUser }))
  };

  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate('/');
      }, 3000);
    }
    else if (error) {
      toast.error("Log in failed");
    }
  }, [user]);


  return (
    <section className='h-fit grid place-items-center'>
      <form method='post' onSubmit={onSubmit} className='card md:w-96 w-full p-8 bg-base-100 shadow-lg flex flex-col gap-y-4 top-20'>
        <h4 className='text-center text-3xl font-bold'>Login</h4>
        <FormInput type='email' label='email' name='email' value={values.email} handleChange={handleChange} />
        <FormInput type='password' label='password' name='password' value={values.password} handleChange={handleChange} />
        <div className='mt-4'>
          <button type='submit' className='btn btn-primary btn-block' disabled={isLoading}>
          Login
        </button>
        </div>
        <p className='text-center'>Not a member yet?{' '}
          <Link to='/register' className='ml-2 link link-hover link-primary capitalize'>
            register
          </Link>
        </p>
      </form>
    </section>
  );
};
export default Login;
