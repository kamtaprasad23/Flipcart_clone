import Product from "../models/productModel.js";

export const getHomepageData = async (req, res) => {
  try {
    const electronics = await Product.find({ category: "electronics" }).limit(10);
    const beauty = await Product.find({ category: "beauty" }).limit(10);
    const sports = await Product.find({ category: "sports" }).limit(10);
    const discounts = await Product.find({ category: "discounts" }).limit(10);
    const homeStyle = await Product.find({ category: "homeStyle" }).limit(10);
    const seasonPicks = await Product.find({ category: "seasonPicks" }).limit(10);

    res.status(200).json({
      electronics,
      beauty,
      sports,
      discounts,
      homeStyle,
      seasonPicks
    });

  } catch (error) {
    res.status(1000).json({ error: "Data fetch failed" });
  }
};
export const productSearch = async (req, res) => {
  try {
    const searchTerm = req.query.keyword;
    console.log("Search term received: ", searchTerm);
    const products = await Product.find({
      title: { $regex: searchTerm, $options: "i" }  
    });
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch search results" });
  }
};

