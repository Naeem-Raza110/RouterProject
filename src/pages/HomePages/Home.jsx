import React from "react";
import { Link } from "react-router";
import Button from "../../components/Ui/Button";
import HomeSection from "./HomeSections";
const Home = () => {
  return (
    <div className="min-h-screen bg-[#010205] text-white relative">
      <HomeSection />
    </div>
  );
};

export default Home;
