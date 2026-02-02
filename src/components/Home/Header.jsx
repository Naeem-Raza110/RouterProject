import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-black/40 backdrop-blur z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <Link to="/">
          <h1 className="text-2xl font-bold text-white drop-shadow-md">MyBrand</h1>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 text-lg">
          <Link to="/" className="text-white hover:text-blue-400 transition drop-shadow-md">
            Home
          </Link>
          <Link to="/features" className="text-white hover:text-blue-400 transition drop-shadow-md">
            Features
          </Link>
          <Link to="/contact" className="text-white hover:text-blue-400 transition drop-shadow-md">
            Contact
          </Link>
          <Link to="/auth" className="text-white hover:text-blue-400 transition drop-shadow-md">
            Sign In / Sign Up
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <span className="text-2xl">&#10005;</span> // X icon
          ) : (
            <span className="text-2xl">&#9776;</span> // Hamburger icon
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <nav className="md:hidden bg-black/80 backdrop-blur w-full text-center py-4 space-y-4">
          <Link
            to="/"
            className="block text-white text-lg hover:text-blue-400 transition"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/features"
            className="block text-white text-lg hover:text-blue-400 transition"
            onClick={() => setIsOpen(false)}
          >
            Features
          </Link>
          <Link
            to="/contact"
            className="block text-white text-lg hover:text-blue-400 transition"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
          <Link
            to="/auth"
            className="block text-white text-lg hover:text-blue-400 transition"
            onClick={() => setIsOpen(false)}
          >
            Sign In / Sign Up
          </Link>
        </nav>
      )}
    </header>
  );
};

export default Header;
