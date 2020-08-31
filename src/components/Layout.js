import React from "react";

import Background from "./Background";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = (props) => {
  return (
    <div className="md:min-h-screen md:overflow-hidden md:flex md:flex-col">
      <Background />
      <Navbar/>
      <main className="px-5 md:flex-auto md:overflow-visible max-w-lg mt-16 md:max-w-full md:px-0 relative">
      {props.children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
