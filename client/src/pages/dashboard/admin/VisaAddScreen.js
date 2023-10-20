import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom';
import { resetState } from '../../../redux/features/visa/visaSlice';
import { createVisa } from '../../../redux/features/visa/visaService';
import FormInput from '../../../components/form/FormInput';
import FormSelect from '../../../components/form/FormSelect';
import { countries } from "countries-list";
import { visaTypeOptions } from '../../../utils';
import { toast } from 'react-toastify';
import Loading from '../../../components/shared/Loading';

const initialState = {
  country: '',
  visaType: '',
  description: '',
  price: '',
};

const VisaAddScreen = () => {
  const [values, setValues] = useState(initialState);
  const { loading, successCreate, failureCreate, error } = useSelector(state => state.visa)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    if (successCreate) {
      toast.success("Visa Created Successfully!!!");
      navigate('/visa-list');
      dispatch(resetState())
    } else if (failureCreate) {
      toast.error(error);
      dispatch(resetState())
    }
  }, [successCreate, failureCreate]);

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(createVisa(values))
  }

  const handleVisaInput = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  }

  const getCountryList = () => {
    const countryArray = [];
    Object.keys(countries).forEach((country) => {
      countryArray.push(countries[country].name);
    });
    return countryArray.sort();
  };

  if (loading) return <Loading />;

  return (
    <>
      <div className='text-md breadcrumbs'>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/visa-list'>Visas</Link>
          </li>
        </ul>
      </div>

      <form className='bg-base-200 rounded-md px-8 py-4 grid gap-x-4  gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center'>
        {/* Country */}
        <FormSelect
          label='select country'
          name='country'
          value={values.country}
          handleChange={handleVisaInput}
          list={['Select', ...getCountryList()]}
          size='select-sm'
        />
        {/* CATEGORIES */}
        <FormSelect
          label='select category'
          name='visaType'
          value={values.visaType}
          handleChange={handleVisaInput}
          list={['Select', ...visaTypeOptions]}
          size='select-sm'
        />
        {/* description */}
        <FormInput
          type='text'
          label='description'
          name='description'
          value={values.description}
          handleChange={handleVisaInput}
          size='input-sm'
        />
        {/* price */}
        <FormInput
          type='number'
          label='price'
          name='price'
          value={values.price}
          handleChange={handleVisaInput}
          size='input-sm'
        />

        <div className='md:block hidden'></div>
        <div className='md:block hidden'></div>
        {/* BUTTONS */}
        <button type='submit' className='btn btn-primary btn-sm' onClick={handleSubmit} disabled={loading}>
          Add
        </button>
        <Link to='/visa-list'>
          <button className='btn btn-accent btn-sm w-full'>
            Back
          </button>
        </Link>
      </form>
    </>
  )
}

export default VisaAddScreen
