import React from 'react'
import MessageBox from './MessageBox'
import MessageSendBox from './MessageSendBox'
import MessageNavbar from './MessageNavbar'

const Right = () => {
    return (
        <>
            <div className='w-full'>

                <div className="navbar rounded-t-2xl bg-[#005372]">
                    <MessageNavbar />
                </div>

                <div className='mt-2'>
                    <MessageBox />
                </div>

                <div className='flex align-bottom p-5'>
                    <MessageSendBox />
                </div>
            </div>
        </>
    )
}

export default Right