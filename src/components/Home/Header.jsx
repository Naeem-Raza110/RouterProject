import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Container from "../../pages/HomePages/Container";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [storedUser, setStoredUser] = useState(() => localStorage.getItem("user"));

  useEffect(() => {
    const updateUser = () => {
      setStoredUser(localStorage.getItem("user"));
    };

    window.addEventListener("storage", updateUser);

    return () => window.removeEventListener("storage", updateUser);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full bg-black/40 backdrop-blur z-50">
      <Container>
        <div className="flex items-center justify-between py-4">
          <Link to="/">
            <h1 className="text-2xl font-bold text-white drop-shadow-md">MyBrand</h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6 text-lg">
            <Link to="/" className="text-white hover:text-blue-400">Home</Link>
            <Link to="/features" className="text-white hover:text-blue-400">Features</Link>
            <Link to="/contact" className="text-white hover:text-blue-400">Contact</Link>

            {!storedUser ? (
              <Link to="/auth" className="text-white hover:text-blue-400">Sign In</Link>
            ) : (
              <Link to="/dashboard" className="text-white hover:text-blue-400">Dashboard</Link>
            )}
          </nav>

          {/* Mobile Menu */}
          <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <span className="text-2xl">&#10005;</span> : <span className="text-2xl">&#9776;</span>}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden bg-black/80 w-full text-center py-4 space-y-4">
            <Link to="/" onClick={() => setIsOpen(false)} className="block text-white">Home</Link>
            <Link to="/features" onClick={() => setIsOpen(false)} className="block text-white">Features</Link>
            <Link to="/contact" onClick={() => setIsOpen(false)} className="block text-white">Contact</Link>

            {!storedUser ? (
              <Link to="/auth" onClick={() => setIsOpen(false)} className="block text-white">
                Sign In / Sign Up
              </Link>
            ) : (
              <Link to="/dashboard" onClick={() => setIsOpen(false)} className="block text-white">
                Dashboard
              </Link>
            )}
          </nav>
        )}
      </Container>
    </header>
  );
};

export default Header;
