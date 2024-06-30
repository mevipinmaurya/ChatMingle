import React from 'react'

const Menu = () => {
  return (
    <div className='w-full rounded-md'>
        <div className='pt-2 pb-2 pl-4 flex items-center gap-5'>
            <p className='text-sm cursor-pointer'>All Messages</p>
            <p className='text-sm cursor-pointer'>New messages</p>
        </div>
    </div>
  )
}

export default Menu