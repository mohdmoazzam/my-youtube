import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";

const Home = () => (
  <div className="flex flex-col h-screen">
    <Header />
    <div className="flex overflow-hidden">
      <Sidebar />
      <Outlet />
    </div>
  </div>
);

export default Home;
