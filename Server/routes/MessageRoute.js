import express from "express"
import { createMessage, getMessage } from "../controllers/Message.controller.js"


const messageRouter = express.Router()

messageRouter.post("/", createMessage)
messageRouter.get("/:chatId", getMessage)

export default messageRouter;