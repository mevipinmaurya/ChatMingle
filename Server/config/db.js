import mongoose from 'mongoose'

export const connectDb = async ()=>{
    await mongoose.connect("mongodb+srv://vipinpoko:007007007@cluster0.9jlhcty.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0").then(()=>console.log("Database connection successful"))
}