import React, { useEffect } from 'react'
import socketIO from "socket.io-client"

const ENDPOINT = "http://localhost:3000/";

const Chat = () => {
    
    useEffect(() => {
        const socket = socketIO(ENDPOINT, { transports: ["websocket"] });
        socket.on("connect", ()=>{
            console.log("connected")
        })
    }, [])

    return (
        <div>Chat</div>
    )
}

export default Chat