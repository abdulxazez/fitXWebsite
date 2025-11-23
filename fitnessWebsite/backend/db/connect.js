import mongoose from "mongoose"; 

const uri = "mongodb+srv://podpeople100:Vision123@fitnessdatabase.yb9vzyw.mongodb.net/fitnessDatabase?retryWrites=true&w=majority";
export const connectDB = () => {

    console.log("Database connected")

    return mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

};