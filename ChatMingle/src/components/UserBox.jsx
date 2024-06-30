import React from 'react'

const UserBox = () => {
    return (
        <div className='border-[1px] w-full rounded-xl p-2 hover:bg-[#e8e8e8]'>
            <div className="flex items-center gap-3">
                <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                        <img
                            src="https://img.daisyui.com/tailwind-css-component-profile-2@56w.png"
                            alt="Avatar Tailwind CSS Component" />
                    </div>
                </div>
                <div className='w-full flex justify-between items-center'>
                    <div>
                        <div className="font-bold">Hart Hagerty</div>
                        <div className="text-sm opacity-50">United States</div>
                    </div>
                    <div>
                        <p className='text-sm text-[grey]'>04:15 AM</p>
                        <div className="badge float-right border-none text-[9px] text-white bg-[red] badge-md">2</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserBox