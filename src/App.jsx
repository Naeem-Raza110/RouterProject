import React from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/HomePages/Home";
import Features from "./pages/HomePages/Features";
import Contact from "./pages/HomePages/Contact";
import Auth from "./pages/auth/Auth";
import DashboardLayout from "./layouts/DashboardLayout";
import Dashboard from "./pages/dashboardPages/Dashboard";
import Profile from "./pages/dashboardPages/Profile";
import Settings from "./pages/dashboardPages/Settings";
import Analytics from "./pages/dashboardPages/Analytics";

const App = () => {
  return (
    <div>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/features" element={<Features />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/auth" element={<Auth />} />
        </Route> 
         <Route path="dashboard" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} />
          <Route path="analytics" element={<Analytics />} />
        </Route>
      </Routes>
     
    </div>
  );
};

export default App;
