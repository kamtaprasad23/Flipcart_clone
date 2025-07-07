import { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
import Dropmenupage from "../pages/dropmenuPage.jsx";
// Optional: import Electronics, SidebarMenu if defined
// import Electronics from "./Electronics";
// import SidebarMenu from "./SidebarMenu";

const Navbar = () => {

  const [showHome, setShowHome] = useState(false);
  const [showBeuti, setShowBeuti] = useState(false);
  const [showTwo, setShowTwo] = useState(false);
  const [showDropdown, setShowDropdown] = useState({
    fashion: false,
    electronics: false,
    homefurniture: false,

  });

  const handleHover = (category, status) => {
    setShowDropdown((prev) => ({ ...prev, [category]: status }));
  };
  // Fetch categories from backend


  return (
    <div className=" flex gap-13 m-4 justify-center items-center overflow-x-auto p-4 bg-white z-[999] ">
      {/* Static Menus */}
      <div className="flex flex-col items-center gap-2 w-20 text-center">
        <img src="https://rukminim2.flixcart.com/flap/64/64/image/29327f40e9c4d26b.png?q=100" alt="" className="w-16 h-16 object-contain" />
        <span className="text-sm">Kilos</span>
      </div>

      <div className=" flex flex-col items-center gap-2 text-center">
        <img src="https://rukminim2.flixcart.com/flap/64/64/image/22fddf3c7da4c4f4.png?q=100" alt="" className="w-16 h-16 object-contain" />
        <span className="text-sm">Mobiles</span>
      </div>

      <div
        onMouseEnter={() => handleHover("fashion", true)}
        onMouseLeave={() => handleHover("fashion", false)}
        className=" flex flex-col items-center gap-2 w-20 text-center"
      >
        <img src="https://rukminim2.flixcart.com/fk-p-flap/64/64/image/0d75b34f7d8fbcb3.png?q=100" alt="Fashion" className="w-16 h-16 object-contain" />
        <div className=" flex gap-1 items-center text-sm font-bold">
          Fashion {showDropdown.fashion ? <FaAngleUp /> : <FaAngleDown />}
        </div>
        {showDropdown.fashion && (
          <Dropmenupage categorySlug="fashion" />
        )}
      </div>

      {/* Electronics */}
      <div
        onMouseEnter={() => handleHover("electronics", true)}
        onMouseLeave={() => handleHover("electronics", false)}
        className=" flex flex-col items-center gap-2 text-center"
      >
        <img src="https://rukminim2.flixcart.com/flap/64/64/image/69c6589653afdb9a.png?q=100" alt="Electronics" className="w-16 h-16 object-contain" />
        <div className="flex gap-1 items-center text-sm font-bold">
          Electronics {showDropdown.electronics ? <FaAngleUp /> : <FaAngleDown />}
        </div>
        {showDropdown.electronics && (
          <Dropmenupage categorySlug="electronics" />
        )}
      </div>
      <div
        onMouseEnter={() => handleHover("homefurniture", true)}
        onMouseLeave={() => handleHover("homefurniture", false)}
        className=" flex flex-col items-center gap-2 w-20 text-center"
      >
        <img
          src="https://rukminim2.flixcart.com/flap/64/64/image/ab7e2b022a4587dd.jpg?q=100"
          alt=""
          className="w-16 h-16 object-contain"
        />
        <div className="flex gap-2 justify-center items-center">
          <span className=" flex text-sm font-bold">
            Home & Furniture
            {showDropdown.homefurniture ? <FaAngleUp className="font-bold" /> : <FaAngleDown />}
          </span>
        </div>

        {showDropdown.homefurniture && (
          <Dropmenupage categorySlug="home-furniture" />
        )}
      </div>


      <div className="flex flex-col items-center gap-2 text-center">
        <img src="https://rukminim2.flixcart.com/fk-p-flap/64/64/image/0139228b2f7eb413.jpg?q=100" alt="" className="w-16 h-16 object-contain" />
        <span className="text-sm">Appliances</span>
      </div>

      <div className="flex flex-col items-center gap-2 text-center">
        <img src="https://rukminim2.flixcart.com/flap/64/64/image/71050627a56b4693.png?q=100" alt="" className="w-16 h-16 object-contain" />
        <span className="text-sm">Flight Booking</span>
      </div>

      <div
        onMouseEnter={() => handleHover("beautymore", true)}
        onMouseLeave={() => handleHover("beautymore", false)}
        className=" flex flex-col items-center gap-2 w-20 text-center"
      >
        <img src="https://rukminim2.flixcart.com/flap/64/64/image/dff3f7adcf3a90c6.png?q=100" alt="" className="w-16 h-16 object-contain" />
        <div className="flex gap-2 justify-center items-center">
          <span className="text-sm font-bold">Beauty & More</span>
          {showDropdown.beautymore? <FaAngleUp /> : <FaAngleDown />}
        </div>
        {showDropdown.beautymore && (
          <Dropmenupage categorySlug="beauty-more" />
        )}
      </div>

      {/* Two Wheelers */}
      <div
        onMouseEnter={() => setShowTwo(true)}
        onMouseLeave={() => setShowTwo(false)}
        className="flex flex-col  items-center gap-2 cursor-pointer text-center hover:text-blue-600"
      >
        <img src="https://rukminim2.flixcart.com/fk-p-flap/64/64/image/05d708653beff580.png?q=100" alt="" className="w-16 h-16 object-contain" />
        <div className="flex gap-2 justify-center items-center">
          <span className="text-sm font-bold">Two Wheelers</span>
          {showTwo ? <FaAngleUp /> : <FaAngleDown />}
        </div>
        {showTwo && (
          <div className="absolute top-46 bg-white rounded-xl shadow-lg w-44 text-left text-black z-50">
            <ul className="list-none p-2">
              <li className="px-3 py-2 hover:bg-gray-200 rounded">Petrol Vehicles</li>
              <li className="px-3 py-2 hover:bg-gray-200 rounded">Electric Vehicles</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
