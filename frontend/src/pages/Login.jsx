import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const LoginPage = () => {
  const navigate = useNavigate();
  const [mobile, setMobile] = useState("");

  const handleRequestOtp = async () => {
    if (mobile.length !== 10) {
      alert("Please enter a valid 10-digit mobile number");
      return;
    }

    try {
      const res = await axios.post("http://localhost:5000/login", {
        mobile: mobile,
      });

      if (res.data.success) {
        alert("OTP sent successfully");
        localStorage.setItem("mobile", mobile); // store mobile for OTP verification
        navigate("/otp");
      } else {
        alert(res.data.message || "Failed to send OTP");
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong while requesting OTP");
    }

    console.log("Request OTP for: ", mobile);
  };

  return (
    <div className="flex h-96 m-auto bg-white w-[700px]">
      {/* Left Blue Section */}
      <div className="w-1/2 bg-blue-600 text-white p-8 flex flex-col justify-center">
        <h1 className="text-3xl font-bold mb-4">Login</h1>
        <p className="text-sm mb-8">
          Get access to your Orders, Wishlist and Recommendations
        </p>
        <img
          src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/login_img_c4a81e.png"
          alt="illustration"
          className="w-60"
        />
      </div>

      {/* Right White Section */}
      <div className="w-2/3 p-8 flex flex-col justify-center">
        <input
          type="text"
          placeholder="Enter Email/Mobile number"
          className="border-b border-gray-400 p-2 outline-none mb-6 w-80"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
        />

        <p className="text-xs text-gray-600 mb-4 w-80">
          By continuing, you agree to Flipkart's{" "}
          <span className="text-blue-600 cursor-pointer">Terms of Use</span> and{" "}
          <span className="text-blue-600 cursor-pointer">Privacy Policy</span>.
        </p>

        <button
          onClick={handleRequestOtp}
          className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 rounded w-80 mb-6"
        >
          Request OTP
        </button>

        <p className="text-sm text-center">
          New to Flipkart?{" "}
          <span
            className="text-blue-600 cursor-pointer font-medium"
            onClick={() => {
              navigate("/signup");
            }}
          >
            Create an account
          </span>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
