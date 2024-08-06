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

const router = createBrowserRouter([
  {
    path: "/",
    element: <App 
      user={localStorage.getItem("username")}
    />,
    //loader: async () => {
    //  return fakeDb.from("teams").select("*");
    //},
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
    //loader: async () => {
    //  return fakeDb.from("teams").select("*");
    //},
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
    //loader: async () => {
    //  return fakeDb.from("teams").select("*");
    //},
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