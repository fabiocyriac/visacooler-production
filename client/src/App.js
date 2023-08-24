import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Register, Landing, About, Partner, Error, ProtectedRoute } from './pages'
import Navbar from './components/LandingNavbar';
import {
  AllVisas,
  Profile,
  SharedLayout,
  Stats,
  ApplyVisa,
} from './pages/dashboard'

function App() {
  return (
    <BrowserRouter>
        <Navbar/>
      <Routes>
        <Route
          path='/'
          element={
            <ProtectedRoute>
              <SharedLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Stats />} />
          <Route path='all-visas' element={<AllVisas />} />
          <Route path='apply-visa' element={<ApplyVisa />} />
          <Route path='profile' element={<Profile />} />
        </Route>
        <Route path='/register' element={<Register />} />
        <Route path='/landing' element={<Landing />} />
        <Route path='/about' element={<About />} />
        <Route path='/partner' element={<Partner />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
