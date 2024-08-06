import { Outlet } from "react-router-dom";
import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";


const App = (user) => {
  return (
    <div className="w-full p-6">
      <Header 
        username={sessionStorage.getItem("username") || ""}
      />
      <Outlet />
      <Footer />
    </div>
  );
};
export default App;

