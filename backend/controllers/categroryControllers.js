import Category from "../models/category.js";

export const category = async (req, res) => {
  try {
    const categorySlug = req.query.slug;
    if (!categorySlug) {
      return res.status(400).json({ message: "Category slug is required" });
    }

    const category = await Category.findOne({
      slug: { $regex: new RegExp(`^${categorySlug}$`, "i") },
    });

    if (!category) {
      return res.status(404).json({ message: "Category not found" });
    }

    res.json(category);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
