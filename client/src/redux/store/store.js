import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../features/user/userSlice'
import visaReducer from '../features/visa/visaSlice'
import utilReducer from '../features/util/utilSlice'

const store = configureStore({
  reducer: {
    user: userReducer,
    visa: visaReducer,
    util: utilReducer,
  }
})

export default store