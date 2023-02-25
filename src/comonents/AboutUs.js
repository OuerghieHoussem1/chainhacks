import React from 'react'

import {BsCalendar2Date} from "react-icons/bs"
import {BiTime} from "react-icons/bi"
import {CiLocationOn} from "react-icons/ci"
import {IoShareSocialOutline} from "react-icons/io5"
import {FaFacebookF} from "react-icons/fa"
import {RiInstagramFill} from "react-icons/ri"
import {AiFillLinkedin} from "react-icons/ai"

export default function AboutUs() {
  return (
    <section className='text-white py-2 my-16 flex flex-col gap-12 justify-center items-center'>
        <header className='h-1 w-full mx-96 bg-white flex justify-center items-center'>
            <p className='text-center text-4xl bg-gray-900 max-w-fit px-9'>About us</p>
        </header>
        <div className='grid grid-cols-4 w-fit gap-16'>
            <div className='w-fit bg-gray-500 px-12 min-w-[300px] py-4 rounded-lg flex flex-col justify-center items-center gap-9'>
                <BsCalendar2Date size={50} />
                <p className='text-3xl'>Date</p>
                <p className='text-2xl'>11-12 March 2023</p>
            </div>
            <div className='w-fit bg-gray-500  px-12 min-w-[300px] py-4 rounded-lg flex flex-col justify-center items-center gap-9'>
                <BiTime size={50} />
                <p className='text-3xl'>Time</p>
                <p className='text-2xl'>08:00 AM</p>
            </div>
            <div className='w-fit bg-gray-500  px-12 min-w-[300px] py-4 rounded-lg flex flex-col justify-center items-center gap-9'>
                <CiLocationOn size={50} />
                <p className='text-3xl'>Location</p>
                <p className='text-2xl'>ESPRIT EL GHAZELA</p>
            </div>
            <div className='w-fit bg-gray-500  px-12 min-w-[300px] py-4 rounded-lg flex flex-col justify-center items-center gap-9'>
                <IoShareSocialOutline size={50} />
                <p className='text-3xl'>Social media links</p>
                <div className='flex gap-3'>
                    <FaFacebookF size={30}/>
                    <RiInstagramFill size={30}/>
                    <AiFillLinkedin size={30}/>
                </div>
            </div>
        </div>
    </section>
  )
}
