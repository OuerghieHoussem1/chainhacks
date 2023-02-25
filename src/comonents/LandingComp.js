import React from 'react'

export default function LandingComp() {
  return (
    <section className='mt-12 bg-arc bg-no-repeat bg-cover w-screen h-screen'>
        <div className='px-28 py-40 w-full h-full bg-gray-900 bg-opacity-50 text-white'>
            <p  className='text-xl font-light'>Event in</p>
            <p className='text-8xl font-bold'>30 : 23 : 55 : 15</p>
            <div className='flex h-full flex-col justify-end py-14'>
                <p className='max-w-4xl mb-12 text-lg'>Calling all developers, designers, and blockchain enthusiasts!
                    Join us for an exciting hackathon event as a part of the Blockchain Week. The theme of the hackathon is Unity and we will be bringing together the best and brightest minds in the industry to collaborate and build innovative solutions that address real-world problems.
                    You'll have the opportunity to showcase your skills, learn from experts in the field, and network with industry professionals. Plus, with prizes up for grabs, there's even more incentive to participate!
                    Don't miss out on this opportunity to be a part of something bigger than yourself and make a real impact in the blockchain field.
                </p>
                <p className='text-5xl font-bold'>ChainHacks</p>
            </div>
        </div>
    </section>
  )
}
