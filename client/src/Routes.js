import { Routes, Route, Navigate } from "react-router-dom"
import { Login, Register, Landing, About, Partner, Error, Products, Tags, SingleProduct } from './pages/landing'
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
        <Route path='products' element={<Products />} />
        <Route path='/products/:id' element={<SingleProduct />} />
        <Route path='apply-visa' element={<ApplyVisa />} />
        <Route path='profile' element={<Profile />} />
      </Route>
      <Route element={<PublicRoute />}>
        <Route path='/home' element={<Landing />} />
        <Route path='/about' element={<About />} />
        <Route path='/tags' element={<Tags />} />
        <Route path='/products' element={<Products />} />
        <Route path='/products/:id' element={<SingleProduct />} />
      </Route>
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/partner' element={<Partner />} />
      <Route path='*' element={<Error />} />
    </Routes>
  )
}

export default MainRoutes
