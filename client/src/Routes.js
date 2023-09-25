import { Routes, Route, Navigate } from "react-router-dom"
import { Login, Register, Landing, About, Partner, Error, Products } from './pages/landing'
import { ProtectedRoute, PublicRoute } from "./components"

import {
  AllVisas,
  Profile,
  Stats,
  ApplyVisa,
} from './pages/dashboard'

function MainRoutes() {
  return (
    <Routes>
      <Route element={<ProtectedRoute />}>
        <Route index element={<Stats />} />
        <Route path='all-visas' element={<AllVisas />} />
        <Route path='apply-visa' element={<ApplyVisa />} />
        <Route path='profile' element={<Profile />} />
      </Route>
      <Route element={<PublicRoute />}>
        <Route path='/home' element={<Landing />} />
        <Route path='/about' element={<About />} />
        <Route path='/tags' element={<Partner />} />
        <Route path='/products' element={<Products />} />
      </Route>
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/partner' element={<Partner />} />
      <Route path='*' element={<Error />} />
    </Routes>
  )
}

export default MainRoutes