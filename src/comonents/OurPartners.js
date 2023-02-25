import React from 'react'


import atsl from "../assets/images/ATSL.png"
import crt from "../assets/images/CRT.png"
import gov from "../assets/images/gov.png"
import ma3an from "../assets/images/ma3an.png"
import onet from "../assets/images/ONET.png"
import usaid from "../assets/images/USAID.png"
export default function OurPartners() {
  return (
    <section className='text-white py-2 my-16 flex flex-col gap-12 justify-center items-center'>
        <header className='h-1 w-full mx-96 bg-white flex justify-center items-center'>
            <p className='text-center text-4xl bg-gray-900 max-w-fit px-9'>Our partners</p>
        </header>
        <div className='grid grid-cols-6 w-full'>
            <div className='bg-gray-300 flex items-center border-2 py-2 flex-col justify-between'>
                <img alt='' src={atsl} className="w-52"/>
                <p className='text-black font-bold text-xl'>LOGO NAME</p>
                <p className='text-black font-light text-lg'>description</p>
            </div>
            <div className='bg-gray-300 flex items-center border-2 py-2 flex-col  justify-between-col'>
                <img alt='' src={crt} className="w-52"/>
                <p className='text-black font-bold text-xl'>LOGO NAME</p>
                <p className='text-black font-light text-lg'>description</p>
            </div>
            <div className='bg-gray-300 flex items-center border-2 py-2 flex-col justify-between-col'>
                <img alt='' src={gov} className="w-52"/>
                <p className='text-black font-bold text-xl'>LOGO NAME</p>
                <p className='text-black font-light text-lg'>description</p>
            </div>
            <div className='bg-gray-300 flex items-center border-2 py-2 flex-col justify-between'>
                <img alt='' src={ma3an} className="w-52"/>
                <p className='text-black font-bold text-xl'>LOGO NAME</p>
                <p className='text-black font-light text-lg'>description</p>
            </div>
            <div className='bg-gray-300 flex items-center border-2 py-2 flex-col justify-between'>
                <img alt='' src={onet} className="w-52"/>
                <p className='text-black font-bold text-xl'>LOGO NAME</p>
                <p className='text-black font-light text-lg'>description</p>
            </div>
            <div className='bg-gray-300 flex items-center border-2 py-2 flex-col justify-between'>
                <img alt='' src={usaid} className="w-52"/>
                <p className='text-black font-bold text-xl'>LOGO NAME</p>
                <p className='text-black font-light text-lg'>description</p>
            </div>
        </div>
    </section>
  )
}
