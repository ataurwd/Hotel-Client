import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/Home";
import Layout from "../Layout/Layout";
import Menu from "./../pages/Menu";
import Order from "../pages/Order";

const Route = () => {
  const route = new createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/menu",
          element: <Menu />,
        },
        {
          path: "/order",
          element: <Order />,
        },
      ],
    },
  ]);
  return <RouterProvider router={route} />;
};

export default Route;
