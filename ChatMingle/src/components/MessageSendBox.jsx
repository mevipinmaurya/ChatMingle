import React from 'react'
import { IoSend } from "react-icons/io5";

const MessageSendBox = () => {
    return (
        <>
            <div className='w-full flex'>
                <div className="join w-full">
                    <div className='w-full'>
                        <input className="input focus:border-none focus:outline-none w-full bg-[lightgrey] join-item" placeholder="Type here..." />
                    </div>
                    <div className="">
                        <button className="btn border-none text-[#005372] outline-none bg-[lightgrey] hover:bg-[lightgrey] join-item text-2xl"><IoSend /></button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MessageSendBox