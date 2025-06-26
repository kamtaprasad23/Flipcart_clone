import product_Data from "../models/product.js";

const product = async (req, res) => {
  try {
    const newProducts = await product_Data.insertMany(req.body);
    res.status(201).json(newProducts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Product create failed" });
  }
};


// Get All Products
const getProducts = async (req, res) => {
  try {
    const products = await product_Data.find();
    const finalProducts = products.map(p => ({
      ...p.toObject(),
      _id: p._id.toString(), // 👈 ObjectId ko string bana diya
    }));
    res.status(200).json(finalProducts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch products" });
  }
};

export {product,getProducts}