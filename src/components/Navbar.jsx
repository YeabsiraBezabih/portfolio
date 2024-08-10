import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/images/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-black text-white p-4 sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto flex items-center justify-between relative">
        {/* Logo */}
        <div className="flex items-center pl-2">
          <NavLink to="/">
            <img src={logo} alt="Logo" className="h-14 w-auto mr-5" />
          </NavLink>
        </div>

        {/* Hamburger Icon */}
        <button
          className="lg:hidden flex items-center px-3 py-2 border border-white rounded text-white hover:text-blue-400 hover:border-blue-400 focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        {/* Navigation Links */}
        <div
          className={`absolute left-[25%] top-11   bg-transparent lg:bg-transparent lg:flex lg:flex-row  lg:space-x-4 lg:items-center lg:justify-between lg:static ${isOpen ? 'flex' : 'hidden'} `}
        >
          <ul className="flex flex-row lg:flex-row lg:space-x-4 text-base items-center justify-center ">
            <li>
              <NavLink
                to="/"
                exact
                className="block  px-3 py-2 hover:text-blue-400 transition duration-300"
                activeClassName="text-blue-200"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className="block px-3 py-2 hover:text-blue-400 transition duration-300"
                activeClassName="text-blue-200"
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/projects"
                className="block px-3 py-2 hover:text-blue-400 transition duration-300"
                activeClassName="text-blue-200"
              >
                Projects
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
