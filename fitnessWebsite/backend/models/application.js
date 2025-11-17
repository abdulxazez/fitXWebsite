 import mongoose from "mongoose";
 
 const learnifyApplicationStructure=mongoose.Schema({
    firstName:String,
    lastName:String,
    email:String,
    password:String,
    dob:String,
   
 });

 const learnifyApplicationModel=mongoose.model('Application Users',learnifyApplicationStructure);
 export default learnifyApplicationModel;

