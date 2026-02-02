import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Home/Header";
import Footer from "../components/Home/Footer";
const MainLayout = () => {
  return (
   
    <div className="flex flex-col min-h-screen relative bg-[#010205] text-white overflow-hidden">
  
      <Header />

      {/* Main content grows to fill space */}
      <main className="flex-grow relative z-10">
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default MainLayout;
