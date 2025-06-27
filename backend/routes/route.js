import express from "express"
import {home,reg,login,otp} from "../controllers/controllers.js"
import { product,getProducts } from "../controllers/productdata.js";
import { getBanners,createBanners } from "../controllers/bannerControllers.js";
import {getHomepageData} from "../controllers/productControllers.js";

const route=express.Router();

route.get("/",home);
route.post("/reg",reg);
route.post("/login",login)
route.post("/product",product)
route.get("/getproducts", getProducts);
route.post("/otp",otp);
route.get("/banners",getBanners)
route.post("/banners",createBanners)
route.get("/homepage-data",getHomepageData)
export default route

