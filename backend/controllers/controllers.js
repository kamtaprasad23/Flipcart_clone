import regstation_Data from "../models/models.js";
import { sid, auth, num } from "../env/envconfig.js";
import twilio from "twilio";

// Twilio client setup
const client = twilio(sid, auth);

// In-memory OTP store (for demo/testing purpose)
const otpStore = {};

// Utility: Generate 6-digit OTP
const generateOTP = () => {
  return Math.floor(100000 + Math.random() * 900000).toString();
};

// Homepage
const home = (req, res) => {
  res.send("This is the homepage");
};

// User Registration
const reg = async (req, res) => {
  const { name, email, password, mobile } = req.body;
  await regstation_Data.create({ name, email, password, mobile });
  res.end();
};

// User Login - Send OTP
const login = async (req, res) => {
  const { mobile } = req.body;
  const user = await regstation_Data.findOne({ mobile });

  if (user) {
    const otp = generateOTP();
    otpStore[mobile] = {
      code: otp,
      timestamp: Date.now(),
    };

    try {
      await client.messages.create({
        body: `Your verification code is ${otp}`,
        from: num,
        to: `+91${mobile}`,
      });

      res.json({ success: true, message: "OTP sent successfully" });
    } catch (err) {
      res.status(500).json({
        success: false,
        message: "Failed to send OTP",
        error: err.message,
      });
    }
  } else {
    res.json({ success: false, message: "Mobile number not registered" });
  }
};

// OTP Verification
const otp = (req, res) => {
  const { mobile, otpnum } = req.body;
  const record = otpStore[mobile];

  if (!record) {
    return res
      .status(400)
      .json({ success: false, message: "No OTP found. Please request again." });
  }

  const isExpired = Date.now() - record.timestamp > 5 * 60 * 1000;
  if (isExpired) {
    delete otpStore[mobile];
    return res.status(400).json({ success: false, message: "OTP expired" });
  }

  if (record.code === otpnum) {
    delete otpStore[mobile];
    return res.json({ success: true, message: "OTP verified. Login successful." });
  } else {
    return res.status(400).json({ success: false, message: "Invalid OTP" });
  }
};

// Add Single Product


export {home, reg, login, otp,};
