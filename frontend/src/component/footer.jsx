import React from "react";
import { useNavigate } from "react-router-dom";

const Footer = () => {
    const nav=useNavigate()
  return (
    <footer className="bg-gray-900 text-white py-8 mt-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        <div>
          <h3 className="text-lg font-semibold mb-4">About</h3>
          <p className="text-gray-400">This is a demo ecommerce clone made using MERN Stack. Designed for learning purposes.</p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#" className="hover:text-white" onClick={()=>nav("/")}>Home</a></li>
            <li><a href="#" className="hover:text-white"onClick={()=>nav("/product")}>Products</a></li>
            <li><a href="#" className="hover:text-white"onClick={()=>nav("/cart")}>Cart</a></li>
            <li><a href="#" className="hover:text-white"onClick={()=>nav("#")}>Contact Us</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Help</h3>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#" className="hover:text-white">Customer Support</a></li>
            <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white">Terms & Conditions</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4 text-gray-400">
            <a href="#"><i className="fab fa-facebook-f"></i> Facebook</a>
            <a href="#"><i className="fab fa-instagram"></i> Instagram</a>
            <a href="#"><i className="fab fa-twitter"></i> Twitter</a>
          </div>
        </div>

      </div>

      <div className="text-center text-gray-500 text-sm mt-6">
        © {new Date().getFullYear()} FlipCart. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
