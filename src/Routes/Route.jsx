import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/Home";
import Layout from "../Layout/Layout";
import Menu from "./../pages/Menu";
import Order from "../pages/Order";
import Dashboard from "../pages/Dashboard";
import Cart from './../pages/dashboard/Cart';

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
          path: "menu",
          element: <Menu />,
        },
        {
          path: "order",
          element: <Order />,
        },
      ],
    },
    {
      path: "dashboard",
      element: <Dashboard />,
      children: [{
        path: 'cart',
        element: <Cart/>
      }],
    },
  ]);
  return <RouterProvider router={route} />;
};

export default Route;
