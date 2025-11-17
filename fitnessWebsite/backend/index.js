import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import application from "./routes/application.js"
import product from "./routes/productRoutes.js";
import homepage from "./routes/homepageroutes.js";  
import login from "./routes/loginroutes.js";
import contact from "./routes/contactroutes.js";
import { addingProduct } from "./controller/application.js";
const app = express();
app.use(cors());
app.use(cors({
  origin: "http://localhost:5173",
  methods: "GET,POST",
}));
app.use("/login", login);
app.use(bodyParser.json({extended:true}));
app.use(express.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use('/Products', product);
app.use('/registration',application)
app.use('/',application)
app.use('/',homepage);


mongoose.connect(url, {useNewUrlParser: true,useUnifiedTopology:true}).then(()=>console.log("Database Connected")).catch(err => console.error(err));

app.listen(5000, () => console.log("Server is running"));


