import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCurrentUser } from './redux/features/auth/authService'
import { resetState } from './redux/features/auth/authSlice';
import Navbar from './components/routes/Navbar';
import Header from './components/routes/Header';
import MainRoutes from './components/routes/MainRoutes';

function App() {

  const { success, failure } = useSelector(state => state.auth)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getCurrentUser())
  }, []);

  useEffect(() => {
    if (success || failure) {
      dispatch(resetState())
    }
  }, [success, failure]);

  return (
    <>
      <Header />
      <Navbar />
      <MainRoutes />
    </>
  )
}

export default App
