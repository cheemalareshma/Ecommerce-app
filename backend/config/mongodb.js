import mongoose from "mongoose";
const connectDB=async()=>{
    mongoose.connection.on("connected",()=>{
        console.log("database is connected");
    })
await mongoose.connect(`${process.env.mongodb_url}/e-commerce`)
}
export default connectDB;