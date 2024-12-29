import React from "react";
import Navbar from "./../components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

const Layout = () => {
  return (
    <div className="max-w-screen-xl mx-auto">
      <Navbar />
      <div className="min-h-[calc(100vh-100px)]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
