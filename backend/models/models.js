import mongoose from "mongoose";


const reg = mongoose.Schema(
    {
    name:{
        type:String
    },
     email:{
        type:String
    },
     password:{
        type:String
    },
     mobile:{
        type:Number
    }
}
)
export default mongoose.model("regstation_Data",reg)