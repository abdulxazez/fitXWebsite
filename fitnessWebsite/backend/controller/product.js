export const addProduct=async(req,res)=>{
   console.log("posting....")
  console.log("Received data:", req.body)
try{
  const newProduct = new productModel(req.body);
  const savedProduct = await newProduct.save();
  res.json(savedProduct);
}
catch (error)
{
console.log("Product Not Added")
}
};