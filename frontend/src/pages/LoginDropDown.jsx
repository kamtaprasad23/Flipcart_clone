import { CiUser } from "react-icons/ci";
import { PiSparkleLight } from "react-icons/pi";
import { BsBoxSeam, BsHeart, BsGift } from "react-icons/bs";
import { MdCardGiftcard } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { CiLogout } from "react-icons/ci";
import { logout } from "../redux/counter/counterSlice.jsx";

const LoginDropdown = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  return (
    <div onClick={(e) => e.stopPropagation()} className="absolute top-7  w-64 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
      <div className="flex justify-between items-center px-4 py-3 border-b text-sm  text-black font-medium">
        <span onClick={() => navigate("/signup")}
          className="cursor-pointer text-blue-600 font-semibold">New customer?</span>
        <button onClick={() => { navigate("/login") }} className="text-blue-600 font-semibold cursor-pointer">
          Log in
        </button>
      </div>
      <ul className="text-sm text-gray-800">
        <li className="flex items-center gap-3 px-4 py-2 hover:bg-gray-100 cursor-pointer">
          <CiUser className="text-lg" />
          My Profile
        </li>
        <li className="flex items-center gap-3 px-4 py-2 hover:bg-gray-100 cursor-pointer">
          <PiSparkleLight className="text-lg" />
          Flipkart Plus Zone
        </li>
        <li className="flex items-center gap-3 px-4 py-2 hover:bg-gray-100 cursor-pointer">
          <BsBoxSeam className="text-lg" />
          Orders
        </li>
        <li className="flex items-center gap-3 px-4 py-2 hover:bg-gray-100 cursor-pointer">
          <BsHeart className="text-lg" />
          Wishlist
        </li>
        <li className="flex items-center gap-3 px-4 py-2 hover:bg-gray-100 cursor-pointer">
          <BsGift className="text-lg" />
          Rewards
        </li>
        <li className="flex items-center gap-3 px-4 py-2 hover:bg-gray-100 cursor-pointer">
          <MdCardGiftcard className="text-lg" />
          Gift Cards
        </li>
        <li
          className="flex items-center gap-3 px-4 py-2 hover:bg-gray-100 cursor-pointer"
          onClick={() => {
            dispatch(logout());
            navigate("/");
          }}
        >
          <CiLogout className="text-lg" />
          Logout
        </li>
      </ul>
    </div>
  );
};

export default LoginDropdown;
