import React from 'react'
import "./style.css"

const MessageBox = ({ user, message, classs, bg }) => {


    if (user) {
        return (
            <div className={`chat ${classs}`}>
                <div className="chat-image avatar">
                    <div className="w-7 rounded-full">
                        <img
                            alt="Tailwind CSS chat bubble component"
                            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                    </div>
                </div>
                <div className={`chat-bubble ${bg} bg-opacity-50`}>{message}</div>
                <time className="text-xs opacity-50">12:45</time>
            </div>
        )
    }
    else {
        return (
            <div className={`chat ${classs}`}>
                <div className="chat-image avatar">
                    <div className="w-7 rounded-full">
                        <img
                            alt="Tailwind CSS chat bubble component"
                            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                    </div>
                </div>
                <div className={`chat-bubble ${bg} bg-opacity-50`}>{message}</div>
                <time className="text-xs opacity-50">12:45</time>
            </div>
        )
    }
    // return (
    //     <>

    //         <div className="chat chat-start ">
    //             <div className="chat-image avatar">
    //                 <div className="w-7 rounded-full">
    //                     <img
    //                         alt="Tailwind CSS chat bubble component"
    //                         src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
    //                 </div>
    //             </div>
    //             <div className="chat-bubble bg-[grey] bg-opacity-50">You were the Chosen One!</div>
    //             <time className="text-xs opacity-50">12:45</time>
    //         </div>
    //         <div className="chat chat-end">
    //             <div className="chat-image avatar">
    //                 <div className="w-7 rounded-full">
    //                     <img
    //                         alt="Tailwind CSS chat bubble component"
    //                         src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
    //                 </div>
    //             </div>
    //             <div className="chat-bubble bg-[#2ca12c] bg-opacity-50">I hate you!</div>
    //             <time className="text-xs opacity-50">12:45</time>
    //         </div>

    //     </>
    // )
}

export default MessageBox