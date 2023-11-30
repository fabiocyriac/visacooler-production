import { configureStore } from '@reduxjs/toolkit'
import authReducer from './features/auth/authSlice'
import visaReducer from './features/visa/visaSlice'
import utilReducer from './features/util/utilSlice'

import headerSlice from '../features/common/headerSlice'
import modalSlice from '../features/common/modalSlice'
import rightDrawerSlice from '../features/common/rightDrawerSlice'
import leadsSlice from '../features/leads/leadSlice'
import serviceSlice from '../features/services/serviceSlice'
import userSlice from '../features/users/userSlice'
import caseSlice from '../features/cases/caseSlice'
import partnerSlice from '../features/partners/partnerSlice'
import documentSlice from '../features/documents/documentSlice'


const store = configureStore({
  reducer: {
    auth: authReducer,
    visa: visaReducer,
    util: utilReducer,
    header : headerSlice,
    rightDrawer : rightDrawerSlice,
    modal : modalSlice,
    lead : leadsSlice,
    user: userSlice,
    case: caseSlice,
    service: serviceSlice,
    partner: partnerSlice,
    document: documentSlice,
  }
})

export default store