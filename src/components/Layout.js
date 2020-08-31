import React from "react";

import Header from "./Header";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = (props) => {
  return (
    <div className="md:min-h-screen md:overflow-hidden">
      <Header />
      <Navbar/>
      <main className="px-5 mx-auto max-w-lg mt-16 md:max-w-full md:px-0 md:pl-8 relative">
      {props.children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
