import React from "react";
import { Outlet, Navigate} from "react-router-dom";
import Sidebar from "../components/Dashboard/Sidebar";

const DashboardLayout = () => {
  const storedUser = localStorage.getItem("user");
  if (!storedUser) {
    return <Navigate to="/auth" />; 
  }

  return (
    <div className="flex ">
      {/* Sidebar: fixed width with max-width and responsive */}
      <div className="w-[25%] min-w-[200px] max-w-[300px] bg-[#0f1625]">
        <Sidebar />
      </div>

      {/* Main content */}
      <div className="w-[75%] z-10 flex-1 overflow-auto ">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
