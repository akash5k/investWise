import React, { useState } from "react";
import './Navbar.css'

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-white drop-shadow-md">
      <div className="container mx-auto px-8">
        <div className="flex justify-between items-center py-4">
          <div className="text-gray-900">
            <a href="/" className="text-xl font-bold text-gray-900">
              Your Logo
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-4">
            <a
              href="/"
              className="text-gray-900 px-4 py-2 relative overflow-hidden"
            >
              Home
              <span className="underline"></span>
            </a>
            <a
              href="/about"
              className="text-gray-900 px-4 py-2 relative overflow-hidden"
            >
              About
              <span className="underline"></span>
            </a>
            <a
              href="/contact"
              className="text-gray-900 px-4 py-2 relative overflow-hidden"
            >
              Contact
              <span className="underline"></span>
            </a>
          </div>

          <div className="hidden md:flex space-x-4">
            <a
              href="/signin"
              className="text-gray-900 px-4 py-2 relative overflow-hidden"
            >
              Log In
              <span className="underline"></span>
            </a>
            <a
              href="/signup"
              className="text-white bg-gray-900 rounded-lg border border-gray-900 px-4 py-2 relative overflow-hidden"
            >
              Sign Up
              <span className="underline"></span>
            </a>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-gray-900 focus:outline-none"
            >
              {isMobileMenuOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu (Collapsible) */}
        <div className={`md:hidden ${isMobileMenuOpen ? "block" : "hidden"}`}>
          <div className="text-gray-900">
            <a
              href="/"
              className="block text-gray-900 px-4 py-2 relative overflow-hidden"
            >
              Home
              <span className="underline"></span>
            </a>
            <a
              href="/about"
              className="block text-gray-900 px-4 py-2 relative overflow-hidden"
            >
              About
              <span className="underline"></span>
            </a>
            <a
              href="/contact"
              className="block text-gray-900 px-4 py-2 relative overflow-hidden"
            >
              Contact
              <span className="underline"></span>
            </a>
          </div>
          <div className="text-gray-900 mt-4">
            <a
              href="/signup"
              className="block text-gray-900 px-4 py-2 relative overflow-hidden"
            >
              Sign Up
              <span className="underline"></span>
            </a>
            <a
              href="/signin"
              className="block text-gray-900 px-4 py-2 relative overflow-hidden"
            >
              Log In
              <span className="underline"></span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
