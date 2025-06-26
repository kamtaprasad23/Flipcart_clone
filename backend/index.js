import express from "express";
import {port,mongourl} from "./env/envconfig.js";
import route from "./routes/route.js";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";


const app = express();
app.use(cors());
app.use(bodyParser.json());
mongoose.connect(mongourl).then(()=>{
    console.log("mongodb connect")
}).catch((err) => {
  console.log(err)
})

app.use(route)
app.listen(port,()=>{
    console.log("server is running");
});