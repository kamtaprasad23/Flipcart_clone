import dotenv from "dotenv"

dotenv.config();

const port=process.env.PORT
const mongourl=process.env.MONGODB
const sid=process.env.TWILIO_ACCOUNT_SID
const auth=process.env.TWILIO_AUTH_TOKEN
const num =process.env.TWILIO_PHONE_NUMBER
const key_id=process.env.RAZORPAY_KEY_ID
const key_secret=process.env.RAZORPAY_SECRET

export {port,mongourl,sid,auth,num,key_id,key_secret }