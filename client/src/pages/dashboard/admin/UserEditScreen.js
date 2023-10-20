import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate, Link } from 'react-router-dom';
import FormCheckbox from '../../../components/form/FormCheckbox';
import FormInput from '../../../components/form/FormInput';
import { editUser, getUserDetails } from '../../../redux/features/user/userService';
import { resetState } from '../../../redux/features/user/userSlice';
import Loading from '../../../components/shared/Loading';
import { toast } from 'react-toastify';

export default function UserEditScreen(props) {
  const { userDetails, loading, success, failure, successEdit, failureEdit, error } = useSelector(state => state.user)
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const params = useParams();
  const { id: _id } = params;

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isPartner, setIsPartner] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    dispatch(getUserDetails(_id));
  }, []);

  useEffect(() => {
    setName(userDetails?.name);
    setEmail(userDetails?.email);
    setIsPartner(userDetails?.isPartner);
    setIsAdmin(userDetails?.isAdmin);  
    if (success || failure) {
      dispatch(resetState())
    }
  }, [userDetails, success, failure ]);

  useEffect(() => {
    if (successEdit) {
      toast.success("User Updated Successfully!!!");
      navigate('/user-list');
      dispatch(resetState())
    } else if (failureEdit) {
      toast.error(error);
      dispatch(resetState())
    }
  }, [successEdit, failureEdit]);


  const handleSubmit = (e) => {
    e.preventDefault();
    const currentUser = { _id, name, email, isPartner, isAdmin};
    dispatch(editUser(currentUser));
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
            <Link to='/user-list'>Users</Link>
          </li>
        </ul>
      </div>
      <form className='bg-base-200 rounded-md px-8 py-4 grid gap-x-4 gap-y-8 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 items-center'>
        {/* name */}
        <FormInput type='text' label='name' name='name' value={name} handleChange={(e) => setName(e.target.value)} />
        {/* email */}
        <FormInput type='email' label='email' name='email' value={email} handleChange={(e) => setEmail(e.target.value)} />
        {/* isPartner */}
        <FormCheckbox name='isPartner' label='isPartner' size='checkbox-sm' checked={isPartner} handleChange={(e) => setIsPartner(e.target.checked)} />
        {/* isAdmin */}
        <FormCheckbox name='isAdmin' label='isAdmin' size='checkbox-sm' checked={isAdmin} handleChange={(e) => setIsAdmin(e.target.checked)} />
        {/* BUTTONS */}
        
        <button type='submit' className='btn btn-primary btn-sm' onClick={handleSubmit}>
          update
        </button>
        <Link to='/user-list'>
          <button className='btn btn-accent btn-sm w-full'>
            Back
          </button>
        </Link>
      </form>
    </>
  );
}
