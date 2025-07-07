import dropmenuData from "../models/dropmenuModel.js";

 export const dropmenu =async(req, res) => {
  const category = req.query.category;
  const products = await dropmenuData.find(category ? { category } : {});
  res.json(products);
};
