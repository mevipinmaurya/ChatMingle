import React, { useEffect, useState } from 'react'
import MessageBox from './MessageBox'
import MessageSendBox from './MessageSendBox'
import MessageNavbar from './MessageNavbar'
import socketIO from 'socket.io-client'
import { IoSend } from "react-icons/io5";
import ReactScrollToBottom from "react-scroll-to-bottom"



let socket;
let user;

const ENDPOINT = "http://localhost:3000/";
// const socket = socketIO(ENDPOINT, { transports: ["websocket"] });



const Right = () => {

    const [id, setId] = useState("");
    const [messages, setMessages] = useState([]);

    const send = () => {
        const message = document.getElementById("chatInput").value;
        socket.emit("message", { message, id });
        document.getElementById("chatInput").value = "";
    };

    useEffect(() => {
        if (localStorage.getItem("name")) {
            user = localStorage.getItem("name")
            console.log(user)
        }

        socket = socketIO(ENDPOINT, { transports: ["websocket"] });

        socket.on("connect", () => {
            console.log("Connected");
            setId(socket.id)
        });

        socket.emit("joined", { user })

        socket.on("user-joined", (data) => {
            // setMessages([...messages, data])
            console.log(data.user, " - ", data.message)
        })

        socket.on("welcome", (data) => {
            // setMessages([...messages, data])
            console.log(data.user, " - ", data.message)
        })

        // Showing message to everyone when any user left the chat
        socket.on("user-left", (data) => {
            setMessages([...messages, data])
            console.log(data.user, " - ", data.message);
        });

        return () => {
            socket.emit("leave");
            socket.off();
        }
    }, []);

    console.log(messages);


    useEffect(() => {
        socket.on("sendMessage", (data) => {
            setMessages([...messages, data])
            console.log(data.user, data.message, data.id);
        });

        return () => {
            socket.off();
        }
    }, [messages]);


    return (
        <>
            <div className='w-full'>

                <div className="navbar rounded-t-2xl bg-[#005372]">
                    <MessageNavbar />
                </div>

                <div className='mt-2'>
                    <div id='rightMsgBox' className='p-5 max-h-[75vh] min-h-[75vh]'>
                        {/* <MessageBox /> */}
                        {
                            messages.map((items, i) => (
                                <MessageBox key={i} user={items.id === id ? "" : items.user} message={items.message} classs={items.id === id ? "chat-end" : "chat-start"} bg={items.id === id ? "bg-[#2ca12c]" : "bg-[grey]"}/>
                            ))
                        }
                    </div>
                </div>

                <div className='flex align-bottom p-5'>
                    {/* <MessageSendBox /> */}
                    <div className='w-full flex'>
                        <div className="join w-full">
                            <div className='w-full'>
                                <input onKeyPress={(e) => e.key === 'Enter' ? send() : null} id='chatInput' className="input focus:border-none focus:outline-none w-full bg-[lightgrey] join-item" placeholder="Type here..." />
                            </div>
                            <div className="">
                                <button onClick={send} className="btn border-none text-[#005372] outline-none bg-[lightgrey] hover:bg-[lightgrey] join-item text-2xl"><IoSend /></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Right