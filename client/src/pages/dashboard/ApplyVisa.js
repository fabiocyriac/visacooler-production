import { FormRow, FormRowSelect, Alert } from '../../components'
import { useSelector, useDispatch } from 'react-redux';
import { displayAlert } from '../../redux/features/util/utilSlice';
import { editVisa, createVisa } from '../../redux/features/visa/visaService';
import { handleChange, clearValues } from '../../redux/features/visa/visaSlice';
import Wrapper from '../../assets/wrappers/DashboardFormPage'
import { FormInput, FormSelect } from '../../components'
import { countries } from "countries-list";
import { useEffect } from 'react'


const ApplyVisa = () => {

  const {
    isLoading,
    isEditing,
    showAlert,
    caseManager,
    country,
    description,
    price,
    visaLocation,
    visaType,
    visaTypeOptions,
    status,
    statusOptions,
  } = useSelector(state => state.visa)
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()

    if (isEditing) {
      console.log("editing!!!!!")
      dispatch(editVisa())
      return
    }
    dispatch(createVisa())
  }
  const handleVisaInput = (e) => {
    const name = e.target.name
    const value = e.target.value
    dispatch(handleChange({ name, value }))
  }

  const getCountryList = () => {
    const countryArray = [];
    Object.keys(countries).forEach((country) => {
      countryArray.push(countries[country].name);
    });
    return countryArray.sort();
  };

  return (

    <form className='bg-base-200 rounded-md px-8 py-4 grid gap-x-4  gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center'>
      {/* Country */}
      <FormSelect
        label='select country'
        name='country'
        value={country}
        handleChange={handleVisaInput}
        list={['Select', ...getCountryList()]}
        size='select-sm'
      />
      {/* CATEGORIES */}
      <FormSelect
        label='select category'
        name='visaType'
        value={visaType}
        handleChange={handleVisaInput}
        list={['Select', ...visaTypeOptions]}
        size='select-sm'
      />
      {/* description */}
      <FormInput
        type='text'
        label='description'
        name='description'
        value={description}
        handleChange={handleVisaInput}
        size='input-sm'
      />
      {/* price */}
      <FormInput
        type='number'
        label='price'
        name='price'
        value={price}
        handleChange={handleVisaInput}
        size='input-sm'
      />

      <div className='md:block hidden'></div>
      <div className='md:block hidden'></div>
      {/* BUTTONS */}
      <button type='submit' className='btn btn-primary btn-sm' onClick={handleSubmit} disabled={isLoading}>
        Add
      </button>
      <button className='btn btn-accent btn-sm'>
        clear
      </button>
    </form>

  )
}

export default ApplyVisa
