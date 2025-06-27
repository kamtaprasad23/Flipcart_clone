import React, { useState } from "react";
import {FiSearch,FiUser,FiShoppingCart,FiMoreVertical,FiMenu,FiBell,FiHeadphones,FiTrendingUp,FiDownload,} from "react-icons/fi";
import { FaStore } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import LoginDropdown from "../pages/LoginDropDown";
import { useDispatch, useSelector } from "react-redux";
import { openCart } from "../redux/counter/counterSlice.jsx";

const Topbar = () => {
  const navigate = useNavigate();
  const [loginDropdown, setLoginDropdown] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [moreMenuOpen, setMoreMenuOpen] = useState(false);
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div className="flex items-center justify-between px-6 py-2 shadow-md bg-white relative sticky top-0 z-10">
      {/* Logo */}
      <div
        className="flex items-center space-x-1 cursor-pointer"
        onClick={() => navigate("/")}
      >
        <img
          src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-44005d.svg"
          alt="flipkart logo"
          className="w-[130px]"
        />
      </div>

      {/* Search Bar */}
      <div className="hidden md:flex items-center bg-blue-50 px-4 py-1 rounded w-[400px] lg:w-[500px]">
        <FiSearch className="text-gray-500 text-lg" />
        <input
          type="text"
          placeholder="Search for Products, Brands and More"
          className="bg-transparent outline-none px-2 py-1 w-full text-sm"
        />
      </div>

      {/* Right side icons */}
      <div className="hidden md:flex items-center space-x-6 text-black">
        {/* Login */}
        <div
          className="relative flex items-center space-x-1 cursor-pointer  hover:bg-blue-500 hover:text-white p-1 rounded"
          onMouseEnter={() => setLoginDropdown(true)}
          onMouseLeave={() => setLoginDropdown(false)}
        >
          <FiUser className="text-lg" />
          <button onClick={() => navigate("/login")} >Login</button>
          {loginDropdown && <LoginDropdown />}
        </div>

        {/* Cart */}
        <div
        onClick={() => dispatch(openCart())}

        className="flex items-center space-x-1 cursor-pointer"
      >
        🛒 <sup>{count}</sup> <span>Cart</span>
      </div>

        {/* Become Seller */}
        <div
          className="flex items-center space-x-1 cursor-pointer"
          onClick={() => navigate("/seller")}
        >
          <FaStore className="text-lg" />
          <span>Become Seller</span>
        </div>

        {/* More Dropdown */}
        <div
          className="relative flex items-center space-x-1 cursor-pointer"
          onClick={() => setMoreMenuOpen(true)}
          onMouseLeave={() => setMoreMenuOpen(false)}
        >
          <FiMoreVertical className="text-lg" />

          {/* Dropdown */}
          {moreMenuOpen && (
            <div className="absolute  right-1 top-5 w-56 rounded-md shadow-lg bg-white ring-1 ring-black/5 z-50">
              <div className="py-1">
                <a
                  href="#"
                  className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  <FiBell className="w-4 h-4 mr-2" />
                  Notification Preferences
                </a>
                <a
                  href="#"
                  className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  <FiHeadphones className="w-4 h-4 mr-2" />
                  24x7 Customer Care
                </a>
                <a
                  href="#"
                  className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  <FiTrendingUp className="w-4 h-4 mr-2" />
                  Advertise
                </a>
                <a
                  href="#"
                  className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  <FiDownload className="w-4 h-4 mr-2" />
                  Download App
                </a>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Menu Icon */}
      <div
        className="md:hidden text-2xl cursor-pointer"
        onClick={() => setMobileMenu(!mobileMenu)}
      >
        <FiMenu />
      </div>

      {/* Mobile Dropdown */}
      {mobileMenu && (
        <div className="absolute top-16 right-4 bg-white shadow-lg rounded w-48 p-4 space-y-3 z-50 text-black text-base">
          <div
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => navigate("/login")}
          >
            <FiUser />
            <span>Login</span>
          </div>
          <div
            className="flex items-center space-x-2 cursor-pointer"
           onClick={() => dispatch(openCart())}
          >
            <FiShoppingCart />
            <span>Cart</span>
          </div>
          <div
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => navigate("/seller")}
          >
            <FaStore />
            <span>Seller</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Topbar;
