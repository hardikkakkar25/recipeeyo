import React, { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-amber-500 text-white shadow-md top-0" style={{ position: 'sticky', top: 0, zIndex: 100 }}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-3xl font-bold flex items-center">
          <span className="mr-2 text-4xl">🍽️</span>
          Recipeeyo
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <a href="#home" className="hover:text-gray-200">Home</a>
          <a href="#about" className="hover:text-gray-200">Menu</a>
          <a href="#recipes" className="hover:text-gray-200">Recipes</a>
          <a href="#contact" className="hover:text-gray-200">Contact</a>
        </nav>

        {/* Mobile Hamburger Icon */}
        <div className="md:hidden flex items-center" onClick={toggleMenu}>
          <button className="text-white">
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
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <nav className="md:hidden bg-yellow-600 text-white space-y-4 px-6 py-4">
          <a href="#home" className="block hover:text-gray-200">Home</a>
          <a href="#about" className="block hover:text-gray-200">About</a>
          <a href="#recipes" className="block hover:text-gray-200">Recipes</a>
          <a href="#contact" className="block hover:text-gray-200">Contact</a>
        </nav>
      )}
    </header>
  );
};

export default Header;
