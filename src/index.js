import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/home'
import About from "./pages/about";
import Layout from "./components/layout";
import Location from "./pages/location";
 

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        
        element: <Home />,
        index: true
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/location/:locationId",
        element: <Location />,
      },
    ]
  },
 
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);




