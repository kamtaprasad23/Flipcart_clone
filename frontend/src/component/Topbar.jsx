import React, { useState,useEffect } from "react";
import { FiSearch, FiMoreVertical, FiMenu } from "react-icons/fi";
import { FaRegUserCircle, FaStore } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { openCart } from "../redux/counter/counterSlice";
import LoginDropdown from "../pages/LoginDropDown";
import axios from "axios";

const Topbar = () => {
  const navigate = useNavigate();
  const [loginDropdown, setLoginDropdown] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const count = useSelector((state) => state.counter.value);
  const username = useSelector((state) => state.counter.username);
  const dispatch = useDispatch();

  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    if (!searchQuery.trim()) return;
    try {
      const { data } = await axios.get(`https://e-commerce-website-backend-oq8z.onrender.com/productSearch?keyword=${searchQuery}`);
      setSearchResults(data);
    } catch (err) {
      console.log("Search Error", err);
    }
  };
  useEffect(() => {
    if (searchQuery.length === 0) {
      setSearchResults([]);
    }
  }, [searchQuery]);
  return (
    <div className="flex items-center justify-between px-4 py-2 shadow-md bg-white relative sticky top-0 z-50">
      {/* Logo */}
      <div className="flex items-center space-x-1 cursor-pointer" onClick={() => navigate("/")}>
        <img
          src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-44005d.svg"
          alt="flipkart logo"
          className="w-[130px]"
        />
      </div>

    
      <div className="hidden md:flex items-center bg-blue-50 px-4 py-1 rounded w-[400px] lg:w-[500px]">
        <FiSearch
          onClick={handleSearch} className="text-gray-500 text-lg cursor-pointer" />
        <input
         type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search for Products, Brands and More"
          className="bg-transparent outline-none px-2 py-1 w-full text-sm"
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}

        />
      </div>
        {searchResults.length > 0 && (
        <div className="absolute top-14 left-0 bg-white w-full md:w-[500px] shadow-lg rounded p-2 z-50 max-h-[400px] overflow-y-auto">
          {searchResults.map((item) => (
            <div
              key={item._id}
              className="p-2 border-b cursor-pointer hover:bg-gray-100"
              onClick={() => navigate(`/product/${item._id}`)}
            >
              <p className="font-medium">{item.name}</p>
              <p className="text-xs text-gray-500">{item.category}</p>
            </div>
          ))}
        </div>
      )}

      {/* Desktop Nav Items */}
      <div className="hidden md:flex items-center space-x-6 text-black">
        {/* Login */}
        <div
          className="relative flex items-center space-x-1 cursor-pointer hover:bg-blue-500 hover:text-white p-1 rounded"
          onMouseEnter={() => setLoginDropdown(true)}
          onMouseLeave={() => setLoginDropdown(false)}
          onClick={() => navigate("/login")}
        >
          <FaRegUserCircle />
          <span className="text-sm">{username ? username : "Login"}</span>
          {loginDropdown && <LoginDropdown />}
        </div>

        {/* Cart */}
        <div
          onClick={() => dispatch(openCart())}
          className="flex items-center space-x-1 cursor-pointer"
        >
          🛒 <sup>{count}</sup>
          <span>Cart</span>
        </div>

        {/* Become Seller */}
        <div
          className="flex items-center space-x-1 cursor-pointer"
          onClick={() => navigate("/seller")}
        >
          <FaStore className="text-lg" />
          <span>Become Seller</span>
        </div>

        {/* More */}
        <div className="flex items-center space-x-1 cursor-pointer">
          <FiMoreVertical className="text-lg" />
        </div>
      </div>

      {/* Mobile Menu Button */}
      <div
        className="md:hidden text-2xl cursor-pointer"
        onClick={() => setMobileMenu(!mobileMenu)}
      >
        <FiMenu />
      </div>

      {/* Mobile Menu */}
      {mobileMenu && (
        <div className="absolute top-14 right-2 bg-white shadow-lg rounded border w-48 py-2 flex flex-col z-50">
          <button
            onClick={() => {
              navigate("/login");
              setMobileMenu(false);
            }}
            className="flex items-center px-4 py-2 text-sm hover:bg-gray-100"
          >
            <FaRegUserCircle className="mr-2" /> {username ? username : "Login"}
          </button>
          <button
            onClick={() => {
              dispatch(openCart());
              setMobileMenu(false);
            }}
            className="flex items-center px-4 py-2 text-sm hover:bg-gray-100"
          >
            🛒 <span className="ml-2">Cart ({count})</span>
          </button>
          <button
            onClick={() => {
              navigate("/seller");
              setMobileMenu(false);
            }}
            className="flex items-center px-4 py-2 text-sm hover:bg-gray-100"
          >
            <FaStore className="mr-2" /> Become Seller
          </button>
        </div>
      )}
    </div>
  );
};

export default Topbar;
