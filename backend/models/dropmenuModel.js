import mongoose from "mongoose";

const dropmenu = new mongoose.Schema({
    name: String,
    price: Number,
    category: String

})
export default mongoose.model("dropmenuData", dropmenu);
