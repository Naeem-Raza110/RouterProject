import React from 'react';
import { Link } from 'react-router';

function Footer() {
  return (
    <footer className="bg-[#010205] text-gray-300 pt-14 pb-8 px-6 relative z-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* About */}
        <div>
          <h3 className="text-xl font-semibold mb-3 text-white">MyBrand</h3>
          <p className="text-gray-400 leading-relaxed">
            Creating modern, responsive, and smooth digital experiences with clean design.
          </p>
        </div>

        {/* Quick Links */}
        <div>
  <h3 className="text-lg font-semibold mb-3 text-white">Quick Links</h3>
  <ul className="space-y-2 flex flex-col">
    <li>
      <Link to="/" className="hover:text-blue-400 transition">Home</Link>
    </li>
    <li>
      <Link to="/features" className="hover:text-blue-400 transition">Features</Link>
    </li>
    <li>
      <Link to="*" className="hover:text-blue-400 transition">Blog</Link>
    </li>
    <li>
      <Link to="*" className="hover:text-blue-400 transition">About Us</Link>
    </li>
  </ul>
</div>


        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-white">Services</h3>
          <ul className="space-y-2">
            <li>Web Development</li>
            <li>UI/UX Design</li>
            <li>React Applications</li>
            <li>Frontend Optimization</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-white">Contact</h3>
          <ul className="space-y-2">
            <li>Email: support@mybrand.com</li>
            <li>Phone: +92 300 1234567</li>
            <li>Location: Gilgit, Pakistan</li>
          </ul>
        </div>
      </div>

      <div className="text-center text-gray-500 border-t border-white/10 mt-10 pt-6">
        © 2026 MyBrand. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
