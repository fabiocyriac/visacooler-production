import { FaBarsStaggered } from 'react-icons/fa6';
import { NavLink, Link } from 'react-router-dom';
import NavLinks from './NavLinks';
import { useDispatch, useSelector } from 'react-redux';

const Navbar = () => {

  const { user } = useSelector(state => state.auth)

  function checkAndCloseDropDown(e) {
    let targetEl = e.currentTarget;
    if (targetEl && targetEl.matches(':focus')) {
      setTimeout(function () {
        targetEl.blur();
      }, 0);
    }
  }

  return (
    <nav className='bg-base-200'>
      <div className='navbar align-element'>
        <div className='navbar-start'>
          {/* TITLE */}
          <NavLink
            to='/'
            className='hidden lg:flex btn btn-primary text-3xl items-center'
          >
            VISAX
          </NavLink>
          {/* DROPDOWN */}
          <div className='dropdown'>
            <label tabIndex={0} className='btn btn-ghost lg:hidden'>
              <FaBarsStaggered className='h-6 w-6' />
            </label>
            <ul
              tabIndex={0}
              className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-200 rounded-box w-52'
            >
              <NavLinks />
            </ul>
          </div>
        </div>

        <div className='navbar-center hidden lg:flex'>
          <ul className='menu menu-horizontal'>
            <NavLinks />
          </ul>
        </div>


        <div className='navbar-end'>
          {user && user.isPartner ? <div className="dropdown dropdown-hover">
            <label tabIndex={0} className="cursor-pointer">Partner</label>
            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52" onClick={() => {
              if (document.activeElement instanceof HTMLElement) {
                document.activeElement.blur()
              }
            }}>
              <li><Link to='/profile'>Partner Profile</Link></li>
              <li><Link to='/dashboard'>Dashboard</Link></li>
              <li><Link to='/bills'>Bills</Link></li>
              <li><Link to='/calendar'>Calendar</Link></li>
              <li><Link to='/team'>Team</Link></li>
              <li><Link to='/charts'>Analytics</Link></li>
              <li><Link to='/visa-list'>Our Visas</Link></li>
              <li><Link to='/visa-list'>Our Services</Link></li>
              <li><Link to='/visa-list'>Applications</Link></li>

            </ul>
          </div> : null}


          {user && user.isAdmin ?
            <div className="dropdown dropdown-hover">
              <label tabIndex={0} className="cursor-pointer">Admin</label>
              <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52" onClick={() => {
                if (document.activeElement instanceof HTMLElement) {
                  document.activeElement.blur()
                }
              }}>
                <li><Link to='/profile'>Partner Profile</Link></li>
                <li><Link to='/dashboard'>Dashboard</Link></li>
                <li><Link to='/bills'>Bills</Link></li>
                <li><Link to='/charts'>Analytics</Link></li>
                <li><Link to='/calendar'>Calendar</Link></li>
                <li><Link to='/integration'>Integration</Link></li>
                <li><Link to='/team'>Team</Link></li>
                <li><Link to='/visa-list'>All Visas</Link></li>
                <li><Link to='/visa-list'>All Services</Link></li>
                <li><Link to='/visa-list'>Applications</Link></li>
                <li><Link to='/user-list'>Users</Link></li>




              </ul>
            </div> : null}
          {/* CART LINK */}
          <div className="dropdown dropdown-end dropdown-hover">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <div className="indicator">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                <span className="absolute -top-2 bg-red-500 -right-3.5 text-white text-sm rounded-full h-5 w-5">
                  2
                </span>
              </div>
            </label>
            <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
              <div className="card-body">
                <span className="font-bold text-lg">8 Items</span>
                <div className="card-actions">
                  <button className="btn btn-primary btn-block">View Messages</button>
                </div>
              </div>
            </div>
          </div>
          <div className="dropdown dropdown-end dropdown-hover">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <div className="indicator">
                <svg xmlns="http://www.w3.org/2000/svg" className="pb-1.5 h-7 w-7" viewBox="0 0 448 512"><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" /></svg>
              </div>
            </label>
            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
              <li><a className="justify-between">Become a Partner</a></li>
              <li><a>Settings</a></li>
              <li><a>Logout</a></li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
