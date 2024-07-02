import express from "express"
import { createChat, findChat, findUserChat } from "../controllers/Chat.controller.js"

const chatRouter = express.Router()

chatRouter.post("/", createChat)
chatRouter.get("/:userId", findUserChat)
chatRouter.get("/find/:firstId/:secondId", findChat)

export default chatRouter;