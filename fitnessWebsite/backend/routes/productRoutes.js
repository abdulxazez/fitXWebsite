import express from "express";
import {addingProduct, showingProduct,deletingProduct} from "../controller/application.js";

const router=express.Router();


router.post("/Product",addingProduct)
router.get("/Product",showingProduct)
router.delete("/Product", deletingProduct)


export default router;