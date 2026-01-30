import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Home/Header";
import Footer from "../components/Home/Footer";

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen relative bg-[#010205] text-white">
      
      {/* Side lighting */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-0 top-0 h-full w-40 bg-white/5 blur-3xl"></div>
        <div className="absolute right-0 top-0 h-full w-40 bg-white/5 blur-3xl"></div>
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] pointer-events-none"></div>

      <Header />

      {/* Main content grows to fill space */}
      <main className="flex-grow relative z-10">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default MainLayout;
