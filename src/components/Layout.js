import React from "react";
import Navbar from "./Navbar";
import "./layout.css";
import Footer from "./Footer";

export const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
