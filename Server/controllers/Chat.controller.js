import chatModel from "../models/chat.model.js";

// createChat
const createChat = async (req, res) => {
    const { firstId, secondId } = req.body;

    try {
        // Check if chats between two users are already exist
        const chat = await chatModel.findOne({
            members: { $all: [firstId, secondId] }
        })

        // If chats are already available
        if (chat) {
            return res.status(200).json(chat)
        }

        // If no chats found then create new one
        const newChat = new chatModel({
            members: [firstId, secondId]
        })

        // Save the new chats to the database
        const response = await newChat.save();
        res.status(200).json(response)

    } catch (error) {
        console.log(error)
        res.status(500).json({
            success: false,
            message: "Error"
        })
    }
}

// findUserChat
const findUserChat = async (req, res) => {
    const userId = req.params.userId;
    try {
        const chats = await chatModel.find({
            members: { $in: [userId] }
        })

        res.status(200).json(chats)
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success: false,
            message: "Error"
        })
    }
}


// findChat
const findChat = async (req, res) => {
    const {firstId, secondId} = req.body;
    try {
        const chat = await chatModel.findOne({
            members: { $all: [firstId, secondId] },
        })

        if(chat){
            return res.status(200).json(chat)
        }
        return res.status(500).json("Error")
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success: false,
            message: "Error"
        })
    }
}


export {createChat, findUserChat, findChat};