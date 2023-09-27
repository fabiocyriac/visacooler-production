import { useState } from "react";
import logo from '../../assets/logo.jpg'

import { Link } from "react-scroll";

// import icons from react icons
import { GrLanguage } from "react-icons/gr";
import { FaXmark, FaBars } from "react-icons/fa6";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    {link: "Overview", path: "home" },
    {link: "Feature", path: "feature" },
    {link: "About", path: "about" },
    {link: "Pricing", path: "pricing" },
  ];
  return (
    <>
      <nav className="bg-white md:px-14 p-4 max-w-screen-2xl mx-auto text-primary fixed top-0 left-0 right-0 border-b">
        <div className="container mx-auto flex justify-between items-center text-lg font-medium">
          <div className="space-x-14 flex items-center">
          <a href="" className="text-2xl font-semibold flex items-center space-x-3"><img src={logo} alt="" className="w-10 inline-block items-center"/><span>VISAX</span></a>
          <ul className="md:flex space-x-12 hidden">
            
            {
                navItems.map(({link, path}) => <Link to={path} spy={true} smooth={true} offset={-100} key={link} href={path} className="block hover:text-gray-300">
                {link}
              </Link> )
            }
          </ul>
          </div>

          <div className="space-x-12 hidden md:flex items-center">
            <a href="/" className="hidden lg:flex items-center hover:text-secondary"> <GrLanguage className="mr-2"/> Language</a>
            <button className="bg-secondary py-2 px-4 transition-all duration-300 rounded hover:text-white hover:bg-indigo-600">Sign up</button>
          </div>

          {/* menu btn, visible on mobile screen */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none focus:text-gray-300"
            >
              {isMenuOpen ? (
                <FaXmark  className="h-6 w-6 text-primary"/>
              ) : (
                <FaBars className="h-6 w-6 text-primary" />
              )}
            </button>
          </div>
        </div>
      </nav>

      <div
        className={`space-y-4 px-4 pt-24 pb-5 bg-secondary ${isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"}`}
      >
        {
                navItems.map(({link, path}) => <Link 
                to={path} spy={true} smooth={true} offset={-90}
                key={link} 
                onClick={toggleMenu}
                className="block text-white hover:text-gray-300"
                >
                {link}
              </Link> )
            }
      </div>
    </>
  );
};

export default Navbar;
