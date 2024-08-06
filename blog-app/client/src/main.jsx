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
import SignUp from "./components/SignUp";
import Search from "./components/Search";

// Import our custom CSS
import './scss/styles.scss';

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap';


import "./index.css";


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
    path: "/signup",
    element: <App />,
    children: [
      {
        path: "/signup",
        element: <SignUp />,
      },
    ],
  },
  {
    path: "/search",
    element: <App />,
    children: [
      {
        path: "/search",
        element: <Search />,
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
  
  
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);