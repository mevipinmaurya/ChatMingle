import React from 'react'

const MessageNavbar = () => {
    return (
        <>
            <div className="flex-1">
                <div className='flex'>
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img
                                alt="Tailwind CSS Navbar component"
                                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                    </div>
                    <div>
                        <p className='text-white'>Jess Troff</p>
                        <div className='flex items-center gap-2'>
                            <div className="badge bg-green-400 badge-xs"></div>
                            <p className='text-[12px] text-[lightgrey]'>Online</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex-none">
                <button className="btn btn-square btn-ghost text-white">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        className="inline-block h-5 w-5 stroke-current">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path>
                    </svg>
                </button>
            </div>
        </>
    )
}

export default MessageNavbar