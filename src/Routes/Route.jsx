import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/Home";
import Layout from "../Layout/Layout";
import Menu from "./../pages/Menu";
import Order from "../pages/Order";
import Dashboard from "../pages/Dashboard";
import Cart from './../pages/dashboard/Cart';
import UserHome from './../pages/dashboard/UserHome';
import Reservation from './../pages/dashboard/Reservation';
import Payment from './../pages/dashboard/Payment';
import Booking from './../pages/dashboard/Booking';
import Review from './../pages/dashboard/Review';
import Login from './../components/Login';
import Register from './../components/Register';
import AllUser from "../pages/dashboard/Admin/AllUser";

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
        {
          path: 'login',
          element: <Login/>
        },
        {
          path: 'register',
          element: <Register/>
        }
      ],
    },
    {
      path: "dashboard",
      element: <Dashboard />,
      children: [
        {
        path: 'cart',
        element: <Cart/>
        },
        {
          path: 'user-home',
          element: <UserHome/>
        },
        {
          path: 'reservation',
          element: <Reservation/>
        },
        {
          path: 'payment',
          element: <Payment/>
        },
        {
          path: 'booking',
          element: <Booking/>
        },
        {
          path: 'review',
          element: <Review/>
        },
        {
          path: 'all-user',
          element: <AllUser/>
        }
      ],
    },
  ]);
  return <RouterProvider router={route} />;
};

export default Route;
