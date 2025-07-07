import React, { useState } from "react";
import axios from "axios";

const PaymentPage = () => {
  const [amount, setAmount] = useState("");

  const handlePayment = async () => {
    try {
      // Create order on backend
      const { data } = await axios.post("https://e-commerce-website-2ksc.onrender.com/payment", {
        amount: amount || 100, // fallback ₹100
      });

      const { id: order_id, currency, amount: order_amount } = data.order;

      // Get Razorpay key from backend
      const { data: keyData } = await axios.get("https://e-commerce-website-2ksc.onrender.com/getkey");

      // Razorpay options
      const options = {
        key: keyData.key,
        amount: order_amount,
        currency: currency,
        name: "Flip Clone",
        description: "Test Payment",
        order_id: order_id,
        handler: function (response) {
          alert("✅ Payment Successful!");
          console.log("Payment Response: ", response);
        },
        prefill: {
          name: "Test User",
          email: "testuser@gmail.com",
          contact: "9000000000",
        },
        notes: {
          address: "Razorpay Corporate Office",
        },
        theme: {
          color: "#3399cc",
        },
        method: ["upi", "card", "netbanking"], // ⭐ important for UPI QR support
      };

      const razorpayInstance = new window.Razorpay(options);
      razorpayInstance.open();
    } catch (error) {
      console.error("❌ Payment failed:", error);
      alert("Payment Failed. Please try again.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Payment Page</h1>

      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Enter Amount (₹)"
        className="border border-gray-300 rounded-lg p-3 w-64 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <button
        onClick={handlePayment}
        className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300"
      >
        Pay Now
      </button>
    </div>
  );
};

export default PaymentPage;
