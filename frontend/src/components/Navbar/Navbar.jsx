import React from "react"
import { Link } from "react-router-dom"

import "./navbar.css"

const Navbar = () => {
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

          {/* Desktop Menu */}
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
            <Link
              to="/signin"
              className="text-gray-900 px-4 py-2 relative overflow-hidden"
            >
              Log In
              <span className="underline"></span>
            </Link>
            {/* <Link to="/signup" className="text-gray-900 px-4 py-2 relative overflow-hidden">
              Sign Up
              <span className="underline"></span>
            </Link> */}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
