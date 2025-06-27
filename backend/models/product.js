import mongoose from "mongoose";


const product = new mongoose.Schema(
    {
        id: {
            type: String
        },
        image: {
            type: String
        },
        name: {
            type: String
        },
        price: {
            type: String
        }

    }
)
export default mongoose.model("product_Data", product)