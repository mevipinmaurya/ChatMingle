import React from 'react'
import Left from './Left'
import Right from './Right'

const Body = () => {
    return (
        <div className='mt-3 shadow-md rounded-2xl'>
            <div className="flex w-full lg:flex-row flex-col gap-4">
                <div className="w-full lg:w-[30%] lg:h-screen lg:border-r-[1px] flex flex-col justify-start items-start h-auto flex-grow p-4 shadow-md bg-[whitesmoke] rounded-2xl ml-2">
                    <Left />
                </div>
                <div className="w-full lg:w-[70%] flex justify-start items-start h-auto flex-grow rounded-t-lg shadow-md bg-[whitesmoke] rounded-2xl mr-2">
                    <Right/>
                </div>
            </div>
        </div>
    )
}

export default Body