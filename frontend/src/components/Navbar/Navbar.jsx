import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../../context/auth/authContext";

import {RxHamburgerMenu} from "react-icons/rx"

import "./navbar.css";

const Navbar = () => {
  const authContext = useContext(AuthContext);
  const { user, isAuthenticated, logout } = authContext;
  const navigate = useNavigate();

  const [showMenu, setShowMenu] = useState(false); 

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const logoutHandler = () => {
    logout();
    navigate("/");
  };

  return (
    <nav className="bg-white drop-shadow-md">
      <div className="container mx-auto px-8">
        <div className="flex justify-between items-center py-4">
          <div className="text-gray-900">
            <Link
              to="/"
              className="text-xl font-bold text-gray-900 tracking-[0.3rem]"
            >
              Investwise
            </Link>
          </div>

          {/* Mobile Menu Icon */}
          <div className="md:hidden">            
            <RxHamburgerMenu 
              onClick={toggleMenu}
              className="text-3xl text-gray-900 cursor-pointer"
              />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-4">
            <Link
              to="/"
              className="text-gray-900 px-4 py-2 relative overflow-hidden"
            >
              Home
              <span className="underline"></span>
            </Link>
            <Link
              to="/about"
              className="text-gray-900 px-4 py-2 relative overflow-hidden"
            >
              About
              <span className="underline"></span>
            </Link>
            <Link
              to="/contact"
              className="text-gray-900 px-4 py-2 relative overflow-hidden"
            >
              Contact
              <span className="underline"></span>
            </Link>
            {isAuthenticated ? (
              <div>
                <Link
                  to="/dashboard"
                  className="bg-transparent hover:bg-blue-500 mx-2 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                >
                  Dashboard
                  <span className="underline"></span>
                </Link>
                <button
                  onClick={logoutHandler}
                  className="bg-transparent hover:bg-black text-black font-semibold hover:text-white py-2 px-4 border border-black hover:border-transparent rounded"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="my-auto">
                <Link
                  to="/signin"
                  className="bg-transparent hover:bg-black text-black font-semibold hover:text-white py-2 px-4 mr-2 border border-black hover:border-transparent rounded"
                >
                  Log In
                  <span className="underline"></span>
                </Link>
                <Link
                  to="/signup"
                  className="bg-black text-white hover:bg-transparent font-semibold hover:text-black py-2 px-4 border border-black hover:border-black rounded"
                >
                  Sign Up
                  <span className="underline"></span>
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Menu */}
        {showMenu && (
          <div className="md:hidden">
            <div className="flex flex-col space-y-2">
              <Link
                to="/"
                className="text-gray-900 px-4 py-2 relative overflow-hidden"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-gray-900 px-4 py-2 relative overflow-hidden"
              >
                About
              </Link>
              <Link
                to="/contact"
                className="text-gray-900 px-4 py-2 relative overflow-hidden"
              >
                Contact
              </Link>
              {isAuthenticated ? (
                <div>
                  <Link
                    to="/dashboard"
                    className="bg-transparent hover:bg-blue-500 mx-2 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                  >
                    Dashboard
                  </Link>
                  <button
                    onClick={logoutHandler}
                    className="bg-transparent hover:bg-black text-black font-semibold hover:text-white py-2 px-4 border border-black hover:border-transparent rounded"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <div className="my-auto pb-6">
                  <Link
                    to="/signin"
                    className="bg-transparent hover:bg-black text-black font-semibold hover:text-white py-2 px-4 mr-2 border border-black hover:border-transparent rounded"
                  >
                    Log In
                  </Link>
                  <Link
                    to="/signup"
                    className="bg-black text-white hover:bg-transparent font-semibold hover:text-black py-2 px-4 border border-black hover:border-black rounded"
                  >
                    Sign Up
                    <span className="underline"></span>
                  </Link>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
