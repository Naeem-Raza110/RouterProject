import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full flex items-center justify-between px-8 py-6 bg-black/40 backdrop-blur z-50">
      <Link to="/">
        <h1 className="text-2xl font-bold text-white drop-shadow-md">MyBrand</h1>
      </Link>

      <nav className="space-x-6 text-lg flex items-center">
        <Link to="/" className="text-white hover:text-blue-400 transition drop-shadow-md">
          Home
        </Link>
        <Link to="/features" className="text-white hover:text-blue-400 transition drop-shadow-md">
          Features
        </Link>
        <Link to="/contact" className="text-white hover:text-blue-400 transition drop-shadow-md">
          Contact
        </Link>
        {/* Auth Links */}
        <Link to="/auth" className="text-white hover:text-blue-400 transition drop-shadow-md">
          Sign In / Sign Up
        </Link>
      </nav>
    </header>
  );
};

export default Header;
