import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import { login } from "./controller/loginCredentials.js";
import { addUser } from "./controller/user.js";
import { addProduct } from "./controller/product.js";
import { connectDB } from "./db/connect.js";
const app = express();

// CORS FIRST
app.use(cors({
  origin: "http://localhost:5173",
  methods: "GET, POST",
}));

// BODY PARSERS BEFORE ROUTES
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// FIXED ROUTES
//app.use("/loginPage", login);

// Option A: Use your actual controller function (RECOMMENDED)
app.post("/registeration", addUser);


app.post("/Products", addProduct);
await connectDB();
app.listen(5000, () => {
  console.log("Server is running on port 5000")
  console.log("Database connected")
   
});