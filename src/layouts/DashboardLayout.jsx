import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/dashboard/Sidebar";

const DashboardLayout = () => {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar: fixed width, full height */}
      <div className="w-80 min-h-screen">
        <Sidebar />
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] pointer-events-none"></div>

      {/* Main content */}
      <div className="relative z-10 flex-1 overflow-auto">
        <Outlet />\
      </div>
    </div>
  );
};

export default DashboardLayout;
