import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Header from "./components/Header";

const App = () => {
  return (
    <div className="w-full p-6">
      <Navbar />
      <Header />
      <Outlet />
    </div>
  );
};
export default App;

