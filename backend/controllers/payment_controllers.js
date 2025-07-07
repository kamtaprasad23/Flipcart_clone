import Razorpay from "razorpay";
import {key_id,key_secret} from "../env/envconfig.js"
import dotenv from "dotenv";
dotenv.config();
export const instance = new Razorpay({
key_id:process.env.RAZORPAY_KEY_ID,
key_secret:process.env.RAZORPAY_SECRET
})

export const paymentProcess =async(req,res)=>{
    const options = {
        amount:Number(req.body.amount*100),
        currency:"INR"
    }
    const order = await instance.orders.create(options)
    res.status(200).json({
        success:true,
        order
    })

   res.status(200).json({success:true});
}
export const getkey=(req,res)=>{
    res.status(200).json({
       key: process.env.RAZORPAY_KEY_ID 
    })
}