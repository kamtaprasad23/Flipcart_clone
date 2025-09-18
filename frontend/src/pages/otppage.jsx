import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setUsername } from "../redux/counter/counterSlice";
import { useNavigate } from "react-router-dom";

const VerifyOTP = () => {
  const [otp, setOtp] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const mobile = localStorage.getItem("mobile");

  const handleVerifyOtp = async () => {
    try {
      const res = await axios.post("https://backend-3q55.onrender.com/otp", {
        mobile,
        otpnum: otp,
      });

      if (res.data.success) {
      dispatch(setUsername(res.data.username));  // name store
      alert("Login Successful");
      navigate("/");
    } else {
        alert("Invalid OTP");
      }
    } catch (err) {
      console.error(err);
      alert("Verification failed");
    }
  };

  return (
    <div className="flex flex-col items-center mt-20">
      <h2 className="text-2xl font-bold mb-4">Enter OTP</h2>
      <input
        type="text"
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
        className="border p-2 mb-4 w-60"
        placeholder="Enter OTP"
      />
      <button
        onClick={handleVerifyOtp}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Verify OTP
      </button>
    </div>
  );
};

export default VerifyOTP;
