import { useState } from 'react'
import { FormRow, Alert } from '../../components'
import { useAppContext } from '../../context/appContext'
import Wrapper from '../../assets/wrappers/DashboardFormPage'
const Profile = () => {
  const { user, showAlert, displayAlert, updateUser, isLoading } =
    useAppContext()

  const [name, setName] = useState(user?.name)
  const [email, setEmail] = useState(user?.email)
  const [lastName, setLastName] = useState(user?.lastName)
  const [location, setLocation] = useState(user?.location)
  const [birthlocation, setBirthlocation] = useState(user?.birthlocation)
  const [birthstate, setBirthstate] = useState(user?.birthstate)
  const [birthcity, setBirthcity] = useState(user?.birthcity)
  const [gender, setGender] = useState(user?.gender)
  const [relationshipstatus, setRelationshipstatus] = useState(user?.relationshipstatus)
  const [dateofbirth, setDateofbirth] = useState(user?.dateofbirth)
  const [phonenumber, setPhonenumber] = useState(user?.phonenumber)

  



  const handleSubmit = (e) => {
    e.preventDefault()
    if (!name || !email || !lastName || !location) {
      displayAlert()
      return
    }
    updateUser({ name, email, lastName, location })
  }

  return (
    <Wrapper>
      <form className='form' onSubmit={handleSubmit}>
        <h3>profile</h3>
        {showAlert && <Alert />}
        <div className='form-center'>
          <FormRow
            type='text'
            name='name'
            value={name}
            handleChange={(e) => setName(e.target.value)}
          />
          <FormRow
            type='text'
            labelText='last name'
            name='lastName'
            value={lastName}
            handleChange={(e) => setLastName(e.target.value)}
          />
          <FormRow
            type='email'
            name='email'
            value={email}
            handleChange={(e) => setEmail(e.target.value)}
          />
          <FormRow
            type='text'
            name='location'
            value={location}
            handleChange={(e) => setLocation(e.target.value)}
          />
          <FormRow
            type='text'
            labelText='country/location of birth'
            name='birthlocation'
            value={birthlocation}
            handleChange={(e) => setBirthlocation(e.target.value)}
          />
          <FormRow
            type='text'
            labelText='State/Province of birth'
            name='birthstate'
            value={birthstate}
            handleChange={(e) => setBirthstate(e.target.value)}
          />
          <FormRow
            type='text'
            labelText='city of birth'
            name='birthcity'
            value={birthcity}
            handleChange={(e) => setBirthcity(e.target.value)}
          />
          <FormRow
            type='text'
            labelText='Gender'
            name='gender'
            value={gender}
            handleChange={(e) => setGender(e.target.value)}
          />
          <FormRow
            type='text'
            labelText='Relationship Status'
            name='relationshipstatus'
            value={relationshipstatus}
            handleChange={(e) => setRelationshipstatus(e.target.value)}
          />
                    <FormRow
            type='text'
            labelText='date of birth'
            name='dateofbirth'
            value={dateofbirth}
            handleChange={(e) => setDateofbirth(e.target.value)}
          />
                    <FormRow
            type='text'
            labelText='phone number'
            name='phonenumber'
            value={phonenumber}
            handleChange={(e) => setPhonenumber(e.target.value)}
          />


          <button className='btn btn-block' type='submit' disabled={isLoading}>
            {isLoading ? 'Please Wait...' : 'save changes'}
          </button>
        </div>
      </form>
    </Wrapper>
  )
}

export default Profile
