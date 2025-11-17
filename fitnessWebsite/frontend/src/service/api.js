import axios from "axios";

const url="http://localhost:5000";

export const addUser=async (userData)=>{
   return await axios.post(`${url}/registration`, userData);
};

export const addingProduct = async(productData)=>{
  return await axios.post(`${url}/Products`, productData);
};
export const showProduct = async()=>{
  return await axios.get(`${url}/Products`);
}

export const deleteProduct = async(id) => {
  return await axios.delete(`${url}/Products${id}`)
}


export const postLoginCredentials = async(loginData)=>{
  console.log("Data received")

 try{
   return await axios.post(`${url}/login`,loginData);
 } catch (error) {
  console.log("")
 }
};
export const postcontact=async(contactData)=>
{
return await axios.post(`${url}/contacts`,contactData);
};