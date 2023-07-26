import React from "react";
import { Footer } from "../Components/Footer/Footer.jsx";
import Navbar from "../Components/Navbar/Navbar.jsx";

function Layout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
