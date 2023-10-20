import { configureStore } from '@reduxjs/toolkit'
import authReducer from './features/auth/authSlice'
import userReducer from './features/user/userSlice'
import visaReducer from './features/visa/visaSlice'
import utilReducer from './features/util/utilSlice'

const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    visa: visaReducer,
    util: utilReducer,
  }
})

export default store