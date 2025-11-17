import learnifyApplicationModel from "../models/application.js";
import productModel from "../models/productModel.js";
import ContactModel from "../models/contactsModel.js";

export const postUsers = async (req, res) => {

  console.log("posting....")
  console.log("Received data:", req.body)

  try {
    const newUser = new learnifyApplicationModel(req.body)
    const savedUser = await newUser.save()
    res.json(savedUser)
  } catch (error) {
    console.log("not saved")
  }
}

export const addingProduct=async(req,res)=>{
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
}

export const seeUsers=async (req,res)=>{
 try{
  const users= await learnifyApplicationModel.find();
  res.json(users);

 }catch(error){
   console.log("Not found any data");
 }
}

export const editingUser = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedUser = req.body;

    const result = await learnifyApplicationModel.findByIdAndUpdate( id, updatedUser, { new: true });
    if (!result) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ message: "User updated successfully", result });
  } catch (error) {
    console.error("Error editing user:", error);
    res.status(500).json({ message: "Failed to edit user" });
  }
};

export const deletingUser = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedUser = await learnifyApplicationModel.findByIdAndDelete(id);
    if (!deletedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    console.error("Error deleting user:", error);
    res.status(500).json({ message: "Failed to delete user" });
  }
};


export const postLoginCredentials = async (req, res) => {
  try {
    const { username, password } = req.body;
    console.log(username)
    if (username === "abdulaziz" && password === "admin"){
      console.log("Admin has been logged in")
      return res.status(200).json({
        role: "admin",
        message: "Admin login successful",
      });
    } else {
      console.log("Wrong username or password entered");
    }
  } catch (error) {
    console.error("InvalidCredentials");
    
  }
};
