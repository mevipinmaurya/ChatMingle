import express from "express"
import {Server} from "socket.io"
import cors from "cors"
import http, { createServer } from "http"
import mongoose from "mongoose"
import userRouter from "./routes/UserRoute.js"

const app = express();
const port = 3000 || process.env.PORT;
app.use(cors())
app.use(express.json())

// Database connection
try {
    mongoose.connect("mongodb+srv://vipinpoko:007007007@cluster0.9jlhcty.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
    console.log("Connection successfull")
} catch (error) {
    console.log(error);
}


app.get("/", (req, res)=>{
    res.send("I am groot")
})


// API
app.use("/api/user", userRouter)


const server = createServer(app);
const io = new Server(server);

io.on("connection", (socket)=>{
    console.log("New Connection");

})



server.listen(port, ()=>{
    console.log(`listening on port ${port}`)
})
