import React from "react";
import { TbShoppingCartCheck } from "react-icons/tb";
import { Link, NavLink } from "react-router-dom";
import useCart from "../Hooks/useCart";

const Navbar = () => {
  const [cart] = useCart()
  return (
    <div className={`navbar md:px-20 fixed z-10 bg-opacity-50 bg-black text-white max-w-screen-xl`}>
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className={`z-50 menu menu-sm dropdown-content rounded-boxmt-3 w-52 p-2 shadow bg-white `}
          >
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                isActive ? "text-gray-400 " : "text-black"
              }
            >
              Home
            </NavLink>
            <NavLink
              to={"/all-visa"}
              className={({ isActive }) =>
                isActive ? "text-gray-400 " : "text-black"
              }
            >
              CONTACT US
            </NavLink>

            <NavLink
              to={"/add-visa"}
              className={({ isActive }) =>
                isActive ? "text-gray-400 " : "text-black"
              }
            >
              DASHBOARD
            </NavLink>

            <NavLink
              to={"/menu"}
              className={({ isActive }) =>
                isActive ? "text-gray-400 " : "text-black"
              }
            >
              OUR MENU{" "}
            </NavLink>

            <NavLink
              to={"/my-visa-application"}
              className={({ isActive }) =>
                isActive ? "text-gray-400 " : "text-black"
              }
            >
              OUR SHOP
            </NavLink>
          </ul>
        </div>
        <Link to={"/"} className="font-semibold text-xl">
          BISTRO BOSS
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul
          className={`menu menu-horizontal px-1 space-x-5 text-[16px] font-semibold`}
        >
          <NavLink
            to={"/"}
            className={({ isActive }) => `${isActive ? "text-primary" : ""}`}
          >
            HOME
          </NavLink>
          <NavLink
            to={"/all-visa"}
            className={({ isActive }) => `${isActive ? "text-primary" : ""}`}
          >
            CONTACT US
          </NavLink>
          <NavLink
            to={"/add-visa"}
            className={({ isActive }) => `${isActive ? "text-primary" : ""}`}
          >
            DASHBOARD
          </NavLink>
          <NavLink
            to={"/menu"}
            className={({ isActive }) => `${isActive ? "text-primary" : ""}`}
          >
            OUR MENU
          </NavLink>
          <NavLink
            to={"/order"}
            className={({ isActive }) => `${isActive ? "text-primary" : ""}`}
          >
            ORDER
          </NavLink>
        </ul>
      </div>
      <div className="navbar-end flex items-center space-x-4">
        <Link to={'dashboard/cart'} className="space-x-3 bg-primary h-10 w-10 rounded-full flex items-center justify-center">
          <TbShoppingCartCheck size={20}/> {cart.length}
        </Link>
        <Link to={"/login"}>
          <button className="px-5 bg-primary font-semibold text-white py-1 rounded-md">
            Login
          </button>
        </Link>
        <Link to={"/register"}>
          <button className="hidden lg:block md:block px-5 bg-primary font-semibold text-white py-1 rounded-md">
            Register
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
