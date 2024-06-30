import React from 'react'
import UserBox from './UserBox'
import "./style.css"

const Left = () => {
  return (
    <>
      <div>
        <p>Contacts</p>
      </div>
      <div id='left' className='w-full'>
        <div className='w-full h-[95vh] flex flex-col gap-2 items-center rounded-xl cursor-pointer pr-3'>
          <UserBox />
          <UserBox />
          <UserBox />
          <UserBox />
          <UserBox />
          <UserBox />
          <UserBox />
          <UserBox />
          <UserBox />
          <UserBox />
          <UserBox />
          <UserBox />
          <UserBox />
          <UserBox />
          <UserBox />
          <UserBox />
          <UserBox />
          <UserBox />
        </div>
      </div>
    </>
  )
}

export default Left