import { Int32 } from "mongodb";
import mongoose from "mongoose";

const productStructure=mongoose.Schema({

    productName:String,
    productId:Int32,
    quantity:String,
    price:Int32,
    category:String,
    
 });

 const productModel = mongoose.model('product',productStructure);
 export default productModel;