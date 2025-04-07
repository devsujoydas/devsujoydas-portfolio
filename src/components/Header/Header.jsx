import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import logo from '../../../public/logo.png'; // logo image path

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-black py-5 shadow dark:bg-gray-800">
      <div className="container px-6 py-3 mx-auto flex items-center justify-between">
        {/* Left: Logo */}
        <div className="flex items-center">
          <NavLink to="/">
            <img src={logo} alt="Logo" className="h-8 w-auto" />
          </NavLink>
        </div>

        {/* Center: Menu */}
        <div className="hidden md:flex space-x-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `px-3 py-2 rounded-lg text-sm font-medium ${
                isActive
                  ? 'bg-blue-500 text-white'
                  : 'text-white dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `px-3 py-2 rounded-lg text-sm font-medium ${
                isActive
                  ? 'bg-blue-500 text-white'
                  : 'text-white dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`
            }
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `px-3 py-2 rounded-lg text-sm font-medium ${
                isActive
                  ? 'bg-blue-500 text-white'
                  : 'text-white dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`
            }
          >
            Contact
          </NavLink>
        </div>

        {/* Right: Hire Me + Profile Dropdown */}
        <div className="flex items-center space-x-4">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition">
            HIRE ME
          </button>

          {/* Profile Dropdown */}
          <div className="relative">
            <button onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
              <FaUserCircle className="text-2xl text-gray-600 dark:text-gray-300" />
            </button>

            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-700 border dark:border-gray-600 rounded-md shadow-lg">
                <NavLink to="/profile" className="block px-4 py-2 text-sm text-white dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600">
                  Profile
                </NavLink>
                <NavLink to="/settings" className="block px-4 py-2 text-sm text-white dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600">
                  Settings
                </NavLink>
                <hr className="border-gray-200 dark:border-gray-600" />
                <NavLink to="/logout" className="block px-4 py-2 text-sm text-red-600 hover:bg-red-100 dark:hover:bg-red-600 dark:hover:text-white">
                  Logout
                </NavLink>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            <svg className="w-6 h-6 text-white dark:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-6 pb-4">
          <NavLink to="/" className="block px-4 py-2 text-white dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md">
            Home
          </NavLink>
          <NavLink to="/about" className="block px-4 py-2 text-white dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md">
            About
          </NavLink>
          <NavLink to="/contact" className="block px-4 py-2 text-white dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md">
            Contact
          </NavLink>
          <button className="w-full mt-3 bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition">
            HIRE ME
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
