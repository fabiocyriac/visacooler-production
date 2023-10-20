import { useSelector } from 'react-redux';
import { links, userMenu, adminMenu, partnerMenu, partnerAdminMenu } from './links';
import { NavLink, Link } from 'react-router-dom';

const NavLinks = () => {
  const { user } = useSelector(state => state.auth)
  const SidebarMenu = !user ? links : user?.isAdmin ? adminMenu : user?.isPartner ? partnerMenu : userMenu
  return (
    <>
      {SidebarMenu.map((link) => {
        const { id, path, text } = link;
        return (
          <li key={id}>
            <NavLink className='capitalize' to={path}>
              {text}
            </NavLink>
          </li>
        );
      })}
    </>
  );
};

export default NavLinks;
