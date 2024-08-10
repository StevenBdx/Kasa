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
import ErrorUrl from "./components/error";

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
        path: "/location",
        element: <Location />,
      },
      {
        path:"/*",
        element: <ErrorUrl />,
      }
    ]
  },
 
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);




