import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react'
import { editVisa, getVisaDetails } from '../../../redux/features/visa/visaService';
import { resetState } from '../../../redux/features/visa/visaSlice';
import FormInput from '../../../components/form/FormInput';
import FormSelect from '../../../components/form/FormSelect';
import { countries } from "countries-list";
import { useParams, useNavigate, Link } from 'react-router-dom';
import { visaTypeOptions } from '../../../utils';
import Loading from '../../../components/shared/Loading';
import { toast } from 'react-toastify';

const VisaEditScreen = () => {

  const { visaDetails, loading, success, failure, successEdit, failureEdit, error } = useSelector(state => state.visa)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const params = useParams();
  const { id: _id } = params;

  const [country, setCountry] = useState('');
  const [visaType, setVisaType] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');

  useEffect(() => {
    dispatch(getVisaDetails(_id));
  }, []);

  useEffect(() => {
    setCountry(visaDetails?.country);
    setVisaType(visaDetails?.visaType);
    setDescription(visaDetails?.description);
    setPrice(visaDetails?.price);
    if (success || failure) {
      dispatch(resetState())
    }
  }, [visaDetails, success, failure]);

  useEffect(() => {
    if (successEdit) {
      toast.success("Visa Updated Successfully!!!");
      navigate('/visa-list');
      dispatch(resetState())
    } else if (failureEdit) {
      toast.error(error);
      dispatch(resetState())
    }
  }, [successEdit, failureEdit]);

  const handleSubmit = (e) => {
    e.preventDefault()
    const currentVisa = { _id, country, visaType, description, price };
    dispatch(editVisa(currentVisa))
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
          value={country}
          handleChange={(e) => setCountry(e.target.value)}
          list={['Select', ...getCountryList()]}
          size='select-sm'
        />
        {/* CATEGORIES */}
        <FormSelect
          label='select category'
          name='visaType'
          value={visaType}
          handleChange={(e) => setVisaType(e.target.value)}
          list={['Select', ...visaTypeOptions]}
          size='select-sm'
        />
        {/* description */}
        <FormInput
          type='text'
          label='description'
          name='description'
          value={description}
          handleChange={(e) => setDescription(e.target.value)}
          size='input-sm'
        />
        {/* price */}
        <FormInput
          type='number'
          label='price'
          name='price'
          value={price}
          handleChange={(e) => setPrice(e.target.value)}
          size='input-sm'
        />

        <div className='md:block hidden'></div>
        <div className='md:block hidden'></div>
        {/* BUTTONS */}
        <button type='submit' className='btn btn-primary btn-sm' onClick={handleSubmit} disabled={loading}>
          Update
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

export default VisaEditScreen
