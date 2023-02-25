import React from 'react'




import Navbar from '../comonents/Navbar'
import AboutUs from '../comonents/AboutUs'
import OurPartners from '../comonents/OurPartners';
import OurProgram from '../comonents/OurProgram';
import ContactUs from '../comonents/ContactUs';
import LandingComp from '../comonents/LandingComp';


export default function Landing() {
  return (
    <>
        <div className='h-screen w-screen bg-gray-900 overflow-x-hidden'>
            <Navbar/>
            <LandingComp/>
            <AboutUs/>
            <OurPartners/>
            <OurProgram/>
            <ContactUs/>
        </div>
    </>
  )
}
