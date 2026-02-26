import express from "express"
import cors from 'cors'
import connectDB from './config/mongodb.js'
import connectCloudinary from './config/cloudinary.js'
import userRouter from './routes/userRoute.js'
import 'dotenv/config'
import productRouter from "./routes/productRoute.js"
import cartRouter from "./routes/cartRoute.js"
import orderRouter from "./routes/orderRoute.js"
//app config
const app=express();
const port=process.env.port||4000;
connectDB()
connectCloudinary()
//middlewears
app.use(express.json())
app.use(cors())
//api endpoints
app.use('/api/user',userRouter)
app.use('/api/product',productRouter)
app.use('/api/cart',cartRouter)
app.use('/api/orders',orderRouter)
app.get('/',(req,res)=>{
    res.send("api working");
})
app.listen(port,()=>{
    console.log("server running on port "+port);
})