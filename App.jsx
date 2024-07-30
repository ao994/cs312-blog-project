import { Outlet } from "react-router-dom";
import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";


const App = () => {
  return (
    <div className="w-full p-6">
      <Navbar />
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};
export default App;

