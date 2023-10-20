import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom';
import { updateUser } from '../../redux/features/auth/authService'
import { resetState } from '../../redux/features/auth/authSlice'
import FormInput from '../../components/form/FormInput'
import { toast } from 'react-toastify';
import Loading from '../../components/shared/Loading';

const Profile = () => {
  const { user, error, success, failure, loading } = useSelector(state => state.auth)
  const dispatch = useDispatch()

  useEffect(() => {
    if (success) {
      toast.success("Profile Updated Successfull!!!");
      dispatch(resetState())
    }
    else if (failure) {
      toast.error(error);
      dispatch(resetState())
    }
  }, [user, loading, success, failure, error]);

  const [name, setName] = useState(user?.name)
  const [email, setEmail] = useState(user?.email)
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [partnerName, setPartnerName] = useState(user?.partner?.name);
  const [partnerLogo, setPartnerLogo] = useState(user?.partner?.logo);
  const [partnerDescription, setPartnerDescription] = useState(user?.partner?.description);

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!name || !email || (password !== confirmPassword)) {
      toast.error("Please provide all values!");
      return
    }
    const currentUser = { name, email, password, partnerName, partnerLogo, partnerDescription };
    dispatch(updateUser({ currentUser }))
  }

  const handleReset = (e) => {
    e.preventDefault();
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
            <Link to='/profile'>Profile</Link>
          </li>
        </ul>
      </div>

      <form className='bg-base-200 rounded-md px-8 py-4 grid gap-x-4  gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center'>
        <div className="col-span-2 md:col-span-4 mt-4">
          <div className='border-b border-base-300 pb-4'>
            <p className='text-2xl font-medium tracking-wider capitalize'>User Profile</p>
          </div>
        </div>
        <FormInput
          type='text'
          label='name'
          name='name'
          size='input-sm'
          value={name}
          handleChange={(e) => setName(e.target.value)}
        />
        <FormInput
          type='email'
          label='email'
          name='email'
          size='input-sm'
          value={email}
          handleChange={(e) => setEmail(e.target.value)}
        />
        <FormInput
          type='password'
          label='password'
          name='password'
          size='input-sm'
          value={password}
          handleChange={(e) => setPassword(e.target.value)}
        />
        <FormInput
          type='password'
          label='confirm Password'
          name='confirmPassword'
          size='input-sm'
          value={confirmPassword}
          handleChange={(e) => setConfirmPassword(e.target.value)}
        />

        {user.isPartner && (
          <>
            <div className="col-span-2 md:col-span-4 mt-8">
              <div className='border-b border-base-300 pb-4'>
                <p className='text-2xl font-medium tracking-wider capitalize'>Partner Profile</p>
              </div>
            </div>
            <FormInput
              type='text'
              label='Partner Name'
              name='partnerName'
              size='input-sm'
              value={partnerName}
              handleChange={(e) => setPartnerName(e.target.value)}
            />
            <FormInput
              type='text'
              label='Partner Logo'
              name='partnerLogo'
              size='input-sm'
              value={partnerLogo}
              handleChange={(e) => setPartnerLogo(e.target.value)}
            />
            <FormInput
              type='text'
              label='Partner Description'
              name='partnerDescription'
              size='input-sm'
              value={partnerDescription}
              handleChange={(e) => setPartnerDescription(e.target.value)}
            />
          </>
        )}
        <div className='md:block hidden md:col-span-2'></div>
        {/* BUTTONS */}
        <button type='submit' className='btn btn-primary btn-sm' onClick={handleSubmit} disabled={loading}>
          submit
        </button>
        <button className='btn btn-accent btn-sm' onClick={handleReset}>
          reset
        </button>
      </form>
    </>
  )
}

export default Profile
