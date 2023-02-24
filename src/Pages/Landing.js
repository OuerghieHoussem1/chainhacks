import React from 'react'

export default function Landing() {
  return (
    <>
        <div className='h-screen bg-black'>
            <nav className='w-screen flex flex-row pr-36 pl-28 py-6'>
                <div className='flex grow'>
                    <h1 className='text-white'>ChainHacks</h1>
                </div>
                <div className='flex flex-row gap-4 justify-center items-center'>
                    <p className='text-white'>Home</p>
                    <p className='text-white'>About us</p>
                    <p className='text-white'>Contact us</p>
                    <button className='text-white bg-white bg-opacity-50 px-6 py-3 rounded-full'>Create a team</button>
                </div>
            </nav>
        </div>
    </>
  )
}
