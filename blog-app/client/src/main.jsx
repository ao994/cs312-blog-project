import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import App from "./App";
import Home from "./components/Home";
import Blog from "./components/Blog";
import Login from "./components/Login";

// Import our custom CSS
import './scss/styles.scss';

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap';
//import Search from "./components/Search";

import "./index.css";
import SignUp from "./components/SignUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App 
      user={localStorage.getItem("username")}
    />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  {
    path: "/login",
    element: <App />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
  {
    path: "/:username",
    element: <App />,
    children: [
      {
        path: "/:username",
        element: <Blog />,
      },
    ],
  },
  {
    path: "/signup",
    element: <App />,
    children: [
      {
        path: "/signup",
        element: <SignUp />,
      },
    ],
  },
  
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);