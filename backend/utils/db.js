import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config({
    path:"./.env"
})

const connectDb = () => {
    mongoose.connect(process.env.MONGO_URI).then(()=>{
        console.log("Mongodb is connected successfully");
    }).catch((error)=>{
        console.log(error);
    })
};
export default connectDb;