import express from "express"
import {Server} from "socket.io"
import cors from "cors"
import http, { createServer } from "http"

const app = express();
const port = 3000 || process.env.PORT;
app.use(cors())

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
