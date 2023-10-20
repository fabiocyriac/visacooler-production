import { useState, useEffect } from 'react';
import FormInput from '../../components/form/FormInput';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { createUser } from '../../redux/features/auth/authService';
import { resetState } from '../../redux/features/auth/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../../components/shared/Loading';

const initialState = {
  name: '',
  email: '',
  password: '',
};

const Register = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, success, failure, error, loading } = useSelector(state => state.auth)
  const [values, setValues] = useState(initialState);

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const { name, email, password } = values;
    if (!name || !email || !password) {
      toast.error("Please provide all values!");
      return;
    }
    const currentUser = { name, email, password };
    dispatch(createUser({ currentUser }))
  };

  useEffect(() => {
    if (success && user) {
      toast.success("Registration Successful!!!");
        navigate('/');
        dispatch(resetState())
    }
    else if (error) {
      toast.error(error);
      dispatch(resetState())
    }
  }, [user, success, failure, error, loading]);

  if (loading) return <Loading />;

  return (
    <section className='h-fit grid place-items-center'>
      <form method='POST' className='card md:w-96 w-full p-8 bg-base-100 shadow-lg flex flex-col gap-y-4 top-8' onSubmit={onSubmit}>
        <h4 className='text-center text-3xl font-bold'>Register</h4>
        <FormInput type='text' label='name' name='name' value={values.name} handleChange={handleChange} />
        <FormInput type='email' label='email' name='email' value={values.email} handleChange={handleChange} />
        <FormInput type='password' label='password' name='password' value={values.password} handleChange={handleChange} />
        <div className='mt-4'>
          <button type='submit' className='btn btn-primary btn-block' disabled={loading}>
            Register
          </button>
        </div>
        <p className='text-center'>Already a member?
          <Link to='/login' className='ml-2 link link-hover link-primary capitalize'>
            login
          </Link>
        </p>
      </form>
    </section>
  );
};
export default Register;
