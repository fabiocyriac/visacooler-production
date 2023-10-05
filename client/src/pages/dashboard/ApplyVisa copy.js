import { FormRow, FormRowSelect, Alert } from '../../components'
import { useSelector, useDispatch } from 'react-redux';
import { displayAlert } from '../../redux/features/util/utilSlice';
import { editVisa, createVisa } from '../../redux/features/visa/visaService';
import { handleChange, clearValues } from '../../redux/features/visa/visaSlice';
import Wrapper from '../../assets/wrappers/DashboardFormPage'
import { FormInput, FormSelect } from '../../components'

const ApplyVisa = () => {

  const {
    isLoading,
    isEditing,
    showAlert,
    caseManager,
    country,
    visaLocation,
    visaType,
    visaTypeOptions,
    status,
    statusOptions,
  } = useSelector(state => state.visa)
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!caseManager || !country || !visaLocation) {
      dispatch(displayAlert())
      return
    }
    if (isEditing) {
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

  return (
 <form className='form'>
        <h3>{isEditing ? 'Apply visa' : 'Add visa'}</h3>
        {showAlert && <Alert />}
        <div className='form-center'>
          <FormRow
            type='text'
            name='country'
            value={country}
            handleChange={handleVisaInput}
          />
          <FormRow
            type='text'
            labelText='visa location'
            name='visaLocation'
            value={visaLocation}
            handleChange={handleVisaInput}
          />
          <FormRowSelect
            name='status'
            value={status}
            handleChange={handleVisaInput}
            list={statusOptions}
          />
          <FormRowSelect
            name='visaType'
            labelText='visa type'
            value={visaType}
            handleChange={handleVisaInput}
            list={visaTypeOptions}
          />
          <FormRow
            type='text'
            name='caseManager'
            value={caseManager}
            handleChange={handleVisaInput}
          />
          <div className='btn-container'>
            <button
              type='submit'
              className='btn btn-block submit-btn'
              onClick={handleSubmit}
              disabled={isLoading}
            >
              submit
            </button>
            <button
              className='btn btn-block clear-btn'
              onClick={(e) => {
                e.preventDefault()
                dispatch(clearValues())
              }}
            >
              clear
            </button>
          </div>
        </div>
      </form>
     
  )
}

export default ApplyVisa
