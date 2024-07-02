import express from "express"
import { Server } from "socket.io"
import cors from "cors"
import http, { createServer } from "http"
import userRouter from "./routes/UserRoute.js"
import { connectDb } from "./config/db.js"
import chatRouter from "./routes/ChatRoute.js"
import messageRouter from "./routes/MessageRoute.js"

const app = express();
const port = 3000 || process.env.PORT;

// Middleware
app.use(cors())
app.use(express.json())

// Database connection
connectDb();


// API Endpoints
app.use("/api/user", userRouter)
app.use("/api/chats", chatRouter)
app.use("/api/messages", messageRouter)


app.get("/", (req, res) => {
    res.send("I am groot")
})

const users = [{}];
const server = createServer(app);
const io = new Server(server);

io.on("connection", (socket) => {
    console.log("New Connection");

    socket.on("joined", ({ user }) => {
        users[socket.id] = user;
        console.log("New user joined the chat")

        // Broadcast the message to everyone except the joined one.
        socket.broadcast.emit("user-joined", { user: "Admin", message: `${users[socket.id]} has Joined !!` })

        // Message for a new joined user
        socket.emit("welcome", { user: "Admin", message: `welcome to the chat ${users[socket.id]}` })
    })

    // To display all messages
    socket.on("message", ({message, id})=>{
        io.emit("sendMessage", {user : users[id], message, id})
    })

    // When user left the chat
    socket.on("leave", () => {
        socket.broadcast.emit("user-left", { user: "Admin", message: `${users[socket.id]} has left.` })
    })
})



server.listen(port, () => {
    console.log(`listening on port ${port}`)
})
