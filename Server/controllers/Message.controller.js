import messageModel from "../models/message.model.js"

// Create Message 
const createMessage = async (req, res) => {
    const { chatId, senderId, text } = req.body;
    const message = new messageModel({
        chatId, senderId, text
    })

    try {
        const response = await message.save();
        res.status(200).json(response)
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            success: false,
            message: "Error"
        })
    }
}


// get message
const getMessage = async (req, res)=>{
    const {chatId} = req.params;

    try {
        const messages = await messageModel.find({chatId})
        res.status(200).json(messages);
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            success: false,
            message: "Error"
        })
    }
}



export {createMessage, getMessage}