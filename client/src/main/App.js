import React, { lazy, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import { themeChange } from 'theme-change'
import { getCurrentUser } from './redux/features/auth/authService';
import { resetState } from './redux/features/auth/authSlice';
import initializeApp from './init';

// Importing pages
const Layout = lazy(() => import('./containers/Layout'))
const Login = lazy(() => import('./pages/public/Login'))
const ForgotPassword = lazy(() => import('./pages/public/ForgotPassword'))
const Register = lazy(() => import('./pages/public/Register'))
const PUBLIC_ROUTES = ["login", "forgot-password", "register"]

// Initializing different libraries
initializeApp()

function App() {

  const { user, success, failure } = useSelector(state => state.auth)
  const dispatch = useDispatch()

  useEffect(() => {
    themeChange(false)
    dispatch(getCurrentUser())
  }, [])

  useEffect(() => {
    if (success || failure) {
      const isPublicPage = PUBLIC_ROUTES.some(r => window.location.href.includes(r))
      if (!user && !isPublicPage) {
        window.location = '/login'
        return;
      }
      dispatch(resetState())
    }
  }, [success, failure]);


  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/register" element={<Register />} />

          {/* Place new routes over this */}
          <Route path="/app/*" element={<Layout />} />

          <Route path="*" element={<Navigate to={user ? "/app/welcome" : "/login"} replace />} />

        </Routes>
      </Router>
    </>
  )
}

export default App
