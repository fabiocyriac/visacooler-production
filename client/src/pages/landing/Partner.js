import { useState, useEffect } from 'react';
import FormInput from '../../components/form/FormInput';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { loginUser } from '../../redux/features/auth/authService';
import { useDispatch, useSelector } from 'react-redux';

const initialState = {
  name: '',
  email: '',
  company: '',
  phone: '',
};

const Login = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, error, loading } = useSelector(state => state.auth)
  const [values, setValues] = useState(initialState);

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const { name, email, company, phone } = values;
    if (!name || !email || !company || !phone) {
      toast.error("Please provide all values!");
      return;
    }
    const currentUser = { name, email, company, phone };
    dispatch(loginUser({ currentUser }))
  };

  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate('/');
      }, 3000);
    } else if (error) {
      toast.error("Error occured");
    }
  }, [user]);


  return (
    <section className='h-fit grid place-items-center'>
      <form method='post' onSubmit={onSubmit} className='card md:w-1/3 w-full  p-8 bg-base-100 shadow-lg flex flex-col gap-y-4'>
        <h4 className='text-center text-3xl font-bold'>Become a Partner</h4>
        <FormInput type='name' label='name' name='name' value={values.name} handleChange={handleChange} />
        <FormInput type='email' label='email' name='email' value={values.email} handleChange={handleChange} />
        <FormInput type='company' label='company' name='company' value={values.company} handleChange={handleChange} />
        <FormInput type='phone' label='phone' name='phone' value={values.phone} handleChange={handleChange} />
        <div className='mt-4'>
          <button type='submit' className='btn btn-primary btn-block' disabled={loading}>
            Submit
          </button>
        </div>
        <p className='text-center text-xs'>Make an easy move to Visax today. We use the contact information you provide to us to contact you about our products and services</p>
      </form>
    </section>
  );
};
export default Login;
