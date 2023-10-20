import { useState, useEffect } from 'react';
import FormInput from '../../components/form/FormInput';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Loading from '../../components/shared/Loading';
import { loginUser } from '../../redux/features/auth/authService';
import { resetState } from '../../redux/features/auth/authSlice';
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
  const { user, error, loading, success, failure } = useSelector(state => state.auth)
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
    if (success && user) {
      toast.success("Login Successfull!!!");
      navigate('/');
      dispatch(resetState())
    }
    else if (failure) {
      toast.error(error);
      dispatch(resetState())
    }
  }, [user, loading, success, failure, error]);

  if (loading) return <Loading />;

  return (
    <section className='h-fit grid place-items-center'>
      <form method='post' onSubmit={onSubmit} className='card md:w-96 w-full p-8 bg-base-100 shadow-lg flex flex-col gap-y-4 top-20'>
        <h4 className='text-center text-3xl font-bold'>Login</h4>
        <FormInput type='email' label='email' name='email' value={values.email} handleChange={handleChange} />
        <FormInput type='password' label='password' name='password' value={values.password} handleChange={handleChange} />
        <div className='mt-4'>
          <button type='submit' className='btn btn-primary btn-block' disabled={loading}>
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
