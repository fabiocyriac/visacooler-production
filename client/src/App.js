import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getUser } from './redux/features/user/userService'
import Navbar from './components/Navbar';
import Header from './components/Header';
import MainRoutes from './Routes'

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getUser())
  }, []);
  return (
    <>
      <Header />
      <Navbar />
      <MainRoutes />
    </>
  )
}

export default App
