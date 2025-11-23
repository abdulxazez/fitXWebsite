import productModel from "../models/productModel.js"

export const addProduct=async(req,res)=>{
   console.log("posting....")
  console.log("Received data:", req.body)
try{
  const newProduct = new productModel(req.body);

  const {productId} = newProduct
  console.log(productId)

  const savedProduct = await newProduct.save();
  res.json(savedProduct);
}
catch (error)
{
  res.status(500).json({errorMessage:error.message})
console.log("Product Not Added")
}
};