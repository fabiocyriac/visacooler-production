import { Routes, Route, Navigate } from "react-router-dom"
import { Login, Register, Landing, About, Partner, Error, Visas, Tags, SingleProduct } from '../../pages/landing'
import PublicRoute from "./PublicRoute"
import ProtectedRoute from "./ProtectedRoute"
import { Profile, Stats } from '../../pages/dashboard'
import ProfileSettings from "../../pages/dashboard/ProfileSettings"
import { VisaAddScreen, VisaEditScreen, UserListScreen, UserEditScreen, VisaListScreen } from '../../pages/dashboard/admin'
import AdminRoute from "./AdminRoute"
import PartnerRoute from "./PartnerRoute"
import Bills from '../../pages/newpages/Bills'
import Calendar from '../../pages/calendar'
import Integration from '../../pages/newpages/Integration'
import Team from '../../pages/newpages/Team'
import Charts from '../../pages/newpages/Charts'
import Dashboard from '../../pages/newpages/Dashboard'

const MainRoutes = () => {
  return (
    <Routes>
      <Route element={<ProtectedRoute />}>
        <Route index element={<Stats />} />
        <Route path='visas' element={<Visas />} />
        <Route path='myvisas' element={<Visas />} />
        <Route path='/visas/:id' element={<SingleProduct />} />
        <Route path='/profile' element={<ProfileSettings />} />
      </Route>
      <Route element={<AdminRoute />}>
        <Route index element={<Stats />} />
        <Route path='/profile' element={<ProfileSettings />} />
        <Route path='visas' element={<Visas />} />
        <Route path='/visas/:id' element={<SingleProduct />} />
        <Route path='/visa-list' element={<VisaListScreen />} />
        <Route exact path='/add-visa' element={<VisaAddScreen />} />
        <Route path='/visas/:id/edit-visa' element={<VisaEditScreen />} />
        <Route path='/user-list' element={<UserListScreen />} />
        <Route path='/user/:id/edit-user' element={<UserEditScreen />} />

        <Route path='dashboard' element={<Dashboard />} />
        <Route path='bills' element={<Bills />} />
        <Route path='charts' element={<Charts />} />
        <Route path='calendar' element={<Calendar />} />
        <Route path='integration' element={<Integration />} />
        <Route path='team' element={<Team />} />

        
        

      </Route>
      <Route element={<PartnerRoute />}>
        <Route index element={<Stats />} />
        <Route path='/profile' element={<ProfileSettings />} />
        <Route path='visas' element={<Visas />} />
        <Route path='/visas/:id' element={<SingleProduct />} />
        <Route path='/visa-list' element={<VisaListScreen />} />
        <Route exact path='/add-visa' element={<VisaAddScreen />} />
        <Route path='/visas/:id/edit-visa' element={<VisaEditScreen />} />

        <Route path='dashboard' element={<Dashboard />} />
        <Route path='bills' element={<Bills />} />
        <Route path='charts' element={<Charts />} />
        <Route path='calendar' element={<Calendar />} />
        <Route path='integration' element={<Integration />} />
        <Route path='team' element={<Team />} />


      </Route>
      <Route element={<PublicRoute />}>
        <Route path='/home' element={<Landing />} />
        <Route path='/about' element={<About />} />
        <Route path='/tags' element={<Tags />} />
        <Route path='/visalist' element={<Visas />} />
        <Route path='/visalist/:id' element={<SingleProduct />} />
      </Route>
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/partner' element={<Partner />} />
      <Route path='*' element={<Error />} />
    </Routes>
  )
}

export default MainRoutes
