import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { getUsers, deleteUser } from '../../../redux/features/user/userService'
import { resetState } from '../../../redux/features/user/userSlice';
import Loading from '../../../components/shared/Loading';
import { toast } from 'react-toastify';

const UserListScreen = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { userList, error, success, failure, successDelete, failureDelete, loading } =useSelector(state => state.user)


  useEffect(() => {
    dispatch(getUsers());
  }, [])

  useEffect(() => {
    if (success || failure || successDelete || failureDelete) {
      dispatch(resetState())
    }
  }, [success, failure, successDelete, failureDelete]);

  useEffect(() => {
    if(successDelete){
      toast.success("User Deleted Successfully!!!");
      dispatch(getUsers());
    } else if(failureDelete){
      toast.error(error);
      dispatch(getUsers());
    }
  }, [successDelete, failureDelete]);

  const deleteHandler = (user) => {
    if (window.confirm('Are you sure?')) {
      dispatch(deleteUser(user._id));
    }
  };


  if (loading) return <Loading />;

  return (
    <div>
      <h1>Users</h1>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>EMAIL</th>
            <th>IS PARTNER</th>
            <th>IS ADMIN</th>
            <th>ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          {userList && userList.length > 0 && userList.map((user) => (
            <tr key={user._id}>
              <td>{user._id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.isPartner ? 'YES' : ' NO'}</td>
              <td>{user.isAdmin ? 'YES' : 'NO'}</td>
              <td>
                <Link
                  key={user._id}
                  to={{ pathname: `/user/${user._id}/edit-user` }}
                  state={{ users: user }}>
                  <button className='btn btn-secondary btn-sm mr-2'>
                    Edit
                  </button>
                </Link>
                <button className='btn btn-secondary btn-sm mr-2' onClick={() => deleteHandler(user)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserListScreen
