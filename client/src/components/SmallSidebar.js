import Wrapper from '../assets/wrappers/SmallSidebar'
import { useSelector, useDispatch } from 'react-redux'
import { FaTimes } from 'react-icons/fa'
import {toggleSidebar}  from '../redux/features/util/utilSlice.js'
import Logo from './Logo'
import NavLinksSmall from './NavLinksSmall'

const SmallSidebar = () => {
  const { showSidebar } = useSelector(state => state.util)
  const dispatch = useDispatch()
  return (
    <Wrapper>
      <div
        className={
          showSidebar ? 'sidebar-container show-sidebar' : 'sidebar-container'
        }
      >
        <div className='content'>
          <button type='button' className='close-btn' onClick={() => dispatch(toggleSidebar())}>
            <FaTimes />
          </button>
          <header>
            <Logo />
          </header>
          <NavLinksSmall/>
        </div>
      </div>
    </Wrapper>
  )
}

export default SmallSidebar
