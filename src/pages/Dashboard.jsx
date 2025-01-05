import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import Cart from "./dashboard/Cart";
import {
  TbHome,
  TbCalendar,
  TbCreditCard,
  TbShoppingCart,
  TbStar,
  TbFileText,
  TbMenu,
  TbShoppingBag,
  TbContract,
} from "react-icons/tb";

const Dashboard = () => {
  return (
    <div className="flex">
      <div className="w-80 bg-primary min-h-screen">
        <div className="w-3/4 mx-auto rounded-md text-left p-4 bg-white my-2">
          <NavLink
            to={"/dashboard/user-home"}
            className={({ isActive }) =>
              `flex items-center ml-5 ${
                isActive ? "text-primary" : "text-black"
              }`
            }
          >
            <TbHome className="mr-3" /> User Home
          </NavLink>
        </div>
        <div className="w-3/4 mx-auto rounded-md text-center p-4 bg-white my-2">
          <NavLink
            to={"/dashboard/reservation"}
            className={({ isActive }) =>
              `flex items-center ml-5 ${
                isActive ? "text-primary" : "text-black"
              }`
            }
          >
            <TbCalendar className="mr-3" /> Reservation
          </NavLink>
        </div>
        <div className="w-3/4 mx-auto rounded-md text-center p-4 bg-white my-2">
          <NavLink
            to={"/dashboard/payment"}
            className={({ isActive }) =>
              `flex items-center ml-5 ${
                isActive ? "text-primary" : "text-black"
              }`
            }
          >
            <TbCreditCard className="mr-3" /> Payment History
          </NavLink>
        </div>
        <div className="w-3/4 mx-auto rounded-md text-center p-4 bg-white my-2">
          <NavLink
            to={"/dashboard/cart"}
            className={({ isActive }) =>
              `flex items-center ml-5 ${
                isActive ? " text-primary" : "text-black"
              }`
            }
          >
            <TbShoppingCart className="mr-3" /> My Cart
          </NavLink>
        </div>
        <div className="w-3/4 mx-auto rounded-md text-center p-4 bg-white my-2">
          <NavLink
            to={"/dashboard/review"}
            className={({ isActive }) =>
              `flex items-center ml-5 ${
                isActive ? "text-primary" : "text-black"
              }`
            }
          >
            <TbStar className="mr-3" /> Add Review
          </NavLink>
        </div>
        <div className="w-3/4 mx-auto rounded-md text-center p-4 bg-white my-2">
          <NavLink
            to={"/dashboard/booking"}
            className={({ isActive }) =>
              `flex items-center ml-5 ${
                isActive ? "text-primary" : "text-black"
              }`
            }
          >
            <TbFileText className="mr-3" /> My Booking
          </NavLink>
        </div>
        <div className="border-b-2"></div>
        <div className="w-3/4 mx-auto rounded-md text-center p-4 bg-white mt-5">
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              `flex items-center ml-5 ${
                isActive ? "text-primary" : "text-black"
              }`
            }
          >
            <TbHome className="mr-3" /> Home
          </NavLink>
        </div>
        <div className="w-3/4 mx-auto rounded-md text-center p-4 bg-white mt-5">
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              `flex items-center ml-5 ${
                isActive ? "text-primary" : "text-black"
              }`
            }
          >
            <TbMenu className="mr-3" /> Menu
          </NavLink>
        </div>
        <div className="w-3/4 mx-auto rounded-md text-center p-4 bg-white mt-5">
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              `flex items-center ml-5 ${
                isActive ? "text-primary" : "text-black"
              }`
            }
          >
            <TbShoppingBag className="mr-3" /> Shop
          </NavLink>
        </div>
        <div className="w-3/4 mx-auto rounded-md text-center p-4 bg-white my-5">
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              `flex items-center ml-5 ${
                isActive ? "text-primary" : "text-black"
              }`
            }
          >
            <TbContract className="mr-3" /> Contact
          </NavLink>
        </div>
      </div>
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
