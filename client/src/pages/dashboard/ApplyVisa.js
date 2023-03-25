import { FormRow, FormRowSelect, Alert } from '../../components'
import { useAppContext } from '../../context/appContext'
import Wrapper from '../../assets/wrappers/DashboardFormPage'

const ApplyVisa = () => {
  const {
    isLoading,
    isEditing,
    showAlert,
    displayAlert,
    caseManager,
    country,
    visaLocation,
    visaType,
    visaTypeOptions,
    status,
    statusOptions,
    handleChange,
    clearValues,
    createVisa,
    editVisa,
  } = useAppContext()

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!caseManager || !country || !visaLocation) {
      displayAlert()
      return
    }
    if (isEditing) {
      editVisa()
      return
    }
    createVisa()
  }
  const handleVisaInput = (e) => {
    const name = e.target.name
    const value = e.target.value
    handleChange({ name, value })
  }

  return (
    <Wrapper>
      <form className='form'>
        <h3>{isEditing ? 'Apply visa' : 'Add visa'}</h3>
        {showAlert && <Alert />}
        <div className='form-center'>
          {/* country */}
          <FormRow
            type='text'
            name='country'
            value={country}
            handleChange={handleVisaInput}
          />
          {/* location */}
          <FormRow
            type='text'
            labelText='visa location'
            name='visaLocation'
            value={visaLocation}
            handleChange={handleVisaInput}
          />
          {/* visa status */}
          <FormRowSelect
            name='status'
            value={status}
            handleChange={handleVisaInput}
            list={statusOptions}
          />
          {/* visa type */}
          <FormRowSelect
            name='visaType'
            labelText='visa type'
            value={visaType}
            handleChange={handleVisaInput}
            list={visaTypeOptions}
          />
          {/* caseManager */}
          <FormRow
            type='text'
            name='caseManager'
            value={caseManager}
            handleChange={handleVisaInput}
          />
          {/* btn container */}
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
                clearValues()
              }}
            >
              clear
            </button>
          </div>
        </div>
      </form>
    </Wrapper>
  )
}

export default ApplyVisa
