import { Double, Int32} from "mongodb";
import mongoose from "mongoose";

const productStructure=mongoose.Schema({

    productName: {
        type: String,
        required: true
    },
    productId: {
        type: Int32,
        required: true
    },
    quantity: {
        type: Int32,
        required: true
    },
    price: {
        type: Double,
        required: true
    },
    category: {
        type: String,
        required: true
    }
 
    
 });

 const productModel = mongoose.model('Products',productStructure);
 export default productModel;