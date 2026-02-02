import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Home/Header";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-[#010205] text-white relative flex items-center justify-center px-6">
<Header />
      {/* Side lighting */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-0 top-0 h-full w-40 bg-white/5 blur-3xl"></div>
        <div className="absolute right-0 top-0 h-full w-40 bg-white/5 blur-3xl"></div>
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] pointer-events-none"></div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-xl">
        <h1 className="text-6xl font-bold mb-6 drop-shadow-lg">404</h1>
        <h2 className="text-3xl font-semibold mb-4">Page Not Found</h2>
        <p className="text-gray-300 mb-8">
          The page you are looking for doesn’t exist or has been moved.
        </p>
        <Link
          to="/"
          className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-lg font-semibold transition"
        >
          Go Back Home
        </Link>
      </div>

    </div>
  );
};

export default NotFound;
