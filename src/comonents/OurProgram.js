import React from 'react'

import {AiOutlineCheckSquare} from "react-icons/ai"

export default function OurProgram() {
  return (
    <section className='text-white py-2 my-16 flex flex-col gap-12 justify-center items-center'>
                <header className='h-1 w-full mx-96 bg-white flex justify-center items-center'>
                    <p className='text-center text-4xl bg-gray-900 max-w-fit px-9'>Our program</p>
                </header>
                <div className='flex flex-col items-center text-black'>
                    <div className='flex flex-col gap-10 w-1 relative bg-gray-300 h-full py-12'>
                        <div className='flex flex-row items-center w-fit'>
                            <div className='w-32 bg-gray-300  h-1'></div>
                            <div className='w-fit flex flex-row gap-2 justify-center items-center rounded-full py-2 px-9 bg-gray-300'>
                                <AiOutlineCheckSquare size={30}/>
                                <p>Check in</p>
                            </div>
                        </div>
                        <div className='flex flex-row items-center w-fit -translate-x-full'>
                            <div className=' w-fit flex flex-row gap-2 justify-center items-center rounded-full py-2 px-9 bg-gray-300'>
                                <AiOutlineCheckSquare size={30}/>
                                <p>Check in</p>
                            </div>
                            <div className='w-32 bg-gray-300 h-1'></div>
                        </div>
                        <div className='flex flex-row items-center w-fit'>
                            <div className='w-32 bg-gray-300  h-1'></div>
                            <div className='w-fit flex flex-row gap-2 justify-center items-center rounded-full py-2 px-9 bg-gray-300'>
                                <AiOutlineCheckSquare size={30}/>
                                <p>Check in</p>
                            </div>
                        </div>
                        <div className='flex flex-row items-center w-fit -translate-x-full'>
                            <div className=' w-fit flex flex-row gap-2 justify-center items-center rounded-full py-2 px-9 bg-gray-300'>
                                <AiOutlineCheckSquare size={30}/>
                                <p>Check in</p>
                            </div>
                            <div className='w-32 bg-gray-300 h-1'></div>
                        </div>
                        <div className='flex flex-row items-center w-fit'>
                            <div className='w-32 bg-gray-300  h-1'></div>
                            <div className='w-fit flex flex-row gap-2 justify-center items-center rounded-full py-2 px-9 bg-gray-300'>
                                <AiOutlineCheckSquare size={30}/>
                                <p>Check in</p>
                            </div>
                        </div>
                        <div className='flex flex-row items-center w-fit -translate-x-full'>
                            <div className=' w-fit flex flex-row gap-2 justify-center items-center rounded-full py-2 px-9 bg-gray-300'>
                                <AiOutlineCheckSquare size={30}/>
                                <p>Check in</p>
                            </div>
                            <div className='w-32 bg-gray-300 h-1'></div>
                        </div>
                    </div>
                </div>
            </section>
  )
}
