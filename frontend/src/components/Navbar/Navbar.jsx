import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../../context/auth/authContext";

import "./Navbar.css";

const Navbar = () => {
  const authContext = useContext(AuthContext);
  const { user, isAuthenticated, logout } = authContext;
  const navigate = useNavigate();

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

          <div className="md:flex space-x-4">
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
                <button className="text-black px-4 py-2 relative overflow-hidden">
                  {user.username || "User"}
                </button>
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
      </div>
    </nav>
  );
};

export default Navbar;
