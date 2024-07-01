import express from "express"
import {Server} from "socket.io"
import cors from "cors"
import http, { createServer } from "http"
import mongoose from "mongoose"
import userRouter from "./routes/UserRoute.js"
import { connectDb } from "./config/db.js"

const app = express();
const port = 3000 || process.env.PORT;

// Middleware
app.use(cors())
app.use(express.json())

// Database connection
connectDb();


// API Endpoints
app.use("/api/user", userRouter)




app.get("/", (req, res)=>{
    res.send("I am groot")
})


const server = createServer(app);
const io = new Server(server);

io.on("connection", (socket)=>{
    console.log("New Connection");

})



server.listen(port, ()=>{
    console.log(`listening on port ${port}`)
})
