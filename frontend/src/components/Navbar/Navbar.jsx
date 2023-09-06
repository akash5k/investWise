import React, { useState } from 'react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-white"> {/* Apply the bg-white class for a white background */}
      <div className="container mx-auto px-8">
        <div className="flex justify-between items-center py-4">
          <div className="text-gray-900"> {/* Change text color to gray-900 */}
            <a href="/" className="text-xl font-bold text-gray-900">Your Logo</a>
          </div>

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

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-4">
            <a href="/" className="text-gray-900 hover:bg-gray-700 hover:text-white px-4 py-2 rounded">Home</a> 
            <a href="/about" className="text-gray-900 hover:bg-gray-700 hover:text-white px-4 py-2 rounded">About</a> 
            <a href="/contact" className="text-gray-900 hover:bg-gray-700 hover:text-white px-4 py-2 rounded">Contact</a> 
          </div>
        </div>

        {/* Mobile Menu (Collapsible) */}
        <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
          <a href="/" className="block text-gray-900 hover:bg-gray-700 px-4 py-2">Home</a> 
          <a href="/about" className="block text-gray-900 hover:bg-gray-700 px-4 py-2">About</a> 
          <a href="/contact" className="block text-gray-900 hover:bg-gray-700 px-4 py-2">Contact</a> 
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
