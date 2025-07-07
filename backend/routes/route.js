import express from "express"
import {home,reg,login,otp} from "../controllers/controllers.js"
import { product,getProducts } from "../controllers/productdata.js";
import { getBanners,createBanners } from "../controllers/bannerControllers.js";
import {getHomepageData,productSearch} from "../controllers/productControllers.js";
import {paymentProcess,getkey} from "../controllers/payment_controllers.js"
import {dropmenu} from "../controllers/dropmenuControllers.js"
import { category} from "../controllers/categroryControllers.js";

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
route.post("/payment", paymentProcess);
route.get("/getkey", getkey);
route.get("/dropmenu",dropmenu) 
route.get("/categories",category) 
route.get("/productSearch",productSearch)
  
export default route

