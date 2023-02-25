import React from 'react'

export default function Navbar() {
  return (
    <nav className='fixed w-screen flex flex-row px-10 py-2 items-center justify-center'>
        <div className='flex grow'>
            <h1 className='text-white font-bold'>ChainHacks</h1>
        </div>
        <div className='flex flex-row gap-4 justify-center items-center'>
            <p className='text-white'>Home</p>
            <p className='text-white'>About us</p>
            <p className='text-white'>Contact us</p>
            <button className='text-white bg-white bg-opacity-50 px-6 py-1 rounded-full'>Create a team</button>
        </div>
    </nav>
  )
}
