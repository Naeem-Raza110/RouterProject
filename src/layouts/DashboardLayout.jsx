import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/dashboard/Sidebar";

const DashboardLayout = () => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Content */}
      <div className="flex-1 min-h-screen bg-[#010205] text-white relative p-6">
        {/* Soft white lighting */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute left-0 top-0 h-full w-40 bg-white/5 blur-3xl"></div>
          <div className="absolute right-0 top-0 h-full w-40 bg-white/5 blur-3xl"></div>
        </div>

        {/* Grid overlay */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] pointer-events-none"></div>

        {/* Main content */}
        <div className="relative z-10">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
