import { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";


const Navbar = () => {

  const [showFasion, setShowFasion] = useState(false)
  const [showEe, setShowEe] = useState(false)
  const [showHome, setShowHome] = useState(false)
  const [showBeuti, setShowBeuti] = useState(false)
  const [showTwo, setShowTwo] = useState(false)
  return (
    <div className="flex gap-10  m-4  justify-center items-center overflow-x-auto p-4 bg-white">

      <div className="flex flex-col items-center gap-2 w-20 text-center">
        <img src="https://rukminim2.flixcart.com/flap/64/64/image/29327f40e9c4d26b.png?q=100" alt="" className="w-16 h-16 object-contain" />
        <span className="text-sm">kilos</span>
      </div>
      <div className="flex flex-col items-center gap-2 text-center">
        <img src="https://rukminim2.flixcart.com/flap/64/64/image/22fddf3c7da4c4f4.png?q=100" alt="" className="w-16 h-16 object-contain" />
        <span className="text-sm">Mobiles</span>
      </div>
      <div className="flex flex-col items-center gap-2 cursor-pointer text-center  hover:text-blue-600">
        <img src="https://rukminim2.flixcart.com/fk-p-flap/64/64/image/0d75b34f7d8fbcb3.png?q=100" alt="" className="w-16 h-16 object-contain" />
        <div className="flex gap-2 justify-center items-center">
          <span className="text-sm font-bold">Fasion</span>
          {
            showFasion ? <FaAngleUp /> : <FaAngleDown />
          }

        </div>
        {showFasion && <Fasion />}
      </div>
      <div className="flex flex-col items-center gap-2  cursor-pointer text-center  hover:text-blue-600">
        <img src="https://rukminim2.flixcart.com/flap/64/64/image/69c6589653afdb9a.png?q=100" alt="" className="w-16 h-16 object-contain" />
        <div className="flex gap-2 justify-center items-center">
          <span className="text-sm font-bold">Electronics</span>
          {
            showEe ? <FaAngleUp /> : <FaAngleDown />
          }
        </div>
        {
          showEe && <Electronics />
        }
      </div>
      <div  className="flex flex-col items-center cursor-pointer gap-2 text-center  hover:text-blue-600">
        <img src="https://rukminim2.flixcart.com/flap/64/64/image/ab7e2b022a4587dd.jpg?q=100" alt="" className="w-16 h-16 object-contain" />
        <div className="flex gap-2 justify-center items-center">
          <span className="text-sm font-bold ">Home & Furniture</span>
          {
            showHome ? <FaAngleUp /> : <FaAngleDown />
          }
        </div>
        {
          showHome && <SidebarMenu />
        }
      </div>
      <div className="flex flex-col items-center gap-2  text-center">
        <img src="https://rukminim2.flixcart.com/fk-p-flap/64/64/image/0139228b2f7eb413.jpg?q=100" alt="" className="w-16 h-16 object-contain" />
        <span className="text-sm">Appliances</span>
      </div>
      <div className="flex flex-col items-center gap-2  text-center">
        <img src="https://rukminim2.flixcart.com/flap/64/64/image/71050627a56b4693.png?q=100" alt="" className="w-16 h-16 object-contain" />
        <span className="text-sm">Flight Booking</span>
      </div>
      <div className="flex flex-col items-center cursor-pointer gap-2 text-center  hover:text-blue-600">
        <img src="https://rukminim2.flixcart.com/flap/64/64/image/dff3f7adcf3a90c6.png?q=100" alt="" className="w-16 h-16 object-contain" />
        <div className="flex gap-2 justify-center  items-center">
          <span className="text-sm font-bold">Beauty toy & More</span>
          {
            showBeuti ? <FaAngleUp /> : <FaAngleDown />
          }
        </div>
        {
          showBeuti && <SidebarMenu/>
        }
      </div>
      <div onMouseEnter={() => setShowTwo(true)} onMouseLeave={() => setShowTwo(false)} className="flex flex-col items-center gap-2 cursor-pointer text-center  hover:text-blue-600">
        <img src="https://rukminim2.flixcart.com/fk-p-flap/64/64/image/05d708653beff580.png?q=100" alt="" className="w-16 h-16 object-contain" />
        <div className="flex gap-2 justify-center items-center">
          <span className="text-sm font-bold">Two Wheelers</span>
          {
            showTwo ? <FaAngleUp /> : <FaAngleDown />
          }
        </div>
        {showTwo && (
          <div className="absolute top-24 md:top-45 z-10 bg-white  rounded-xl shadow-lg w-44 text-left text-black">
            <ul className="list-none p-2">
              <li className="px-3 py-2 hover:bg-gray-200 rounded ">Petrol Vehicles</li>
              <li className="px-3 py-2 hover:bg-gray-200 rounded">Electric Vehicles</li>
            </ul>
          </div>
        )}
      </div>




    </div>
  );
};

export default Navbar;
