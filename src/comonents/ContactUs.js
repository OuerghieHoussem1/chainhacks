import React, { useState } from 'react'


export default function ContactUs() {
    function handleFormSubmit(e) {
        e.preventDefault();
      }
    
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
  
    return (
    <section className='text-white py-2 my-16 flex flex-col gap-12 justify-center items-center'>
    <header className='h-1 w-full mx-96 bg-white flex justify-center items-center'>
        <p className='text-center text-4xl bg-gray-900 max-w-fit px-9'>Contact us</p>
    </header>
    <div className="flex flex-wrap items-center justify-cente w-full py-3 px-5">
        <form
            onSubmit={handleFormSubmit}
            className="flex flex-col w-full lg:w-1/2 p-8 lg:p-12 bg-white text-black rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <div className="mb-4">
            <label htmlFor="name" className="block font-bold mb-2">
                Name
            </label>
            <input
                type="text"
                id="name"
                value={name}
                onChange={(event) => setName(event.target.value)}
                className="w-full px-3 py-2 border border-gray-400 rounded-md"
                required
            />
            </div>
            <div className="mb-4">
            <label htmlFor="email" className="block font-bold mb-2">
                Email
            </label>
            <input
                type="email"
                id="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className="w-full px-3 py-2 border border-gray-400 rounded-md"
                required
            />
            </div>
            <div className="mb-4">
            <label htmlFor="message" className="block font-bold mb-2">
                Message
            </label>
            <textarea
                id="message"
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                className="w-full px-3 py-2 border border-gray-400 rounded-md"
                rows={5}
                required
            />
            </div>
            <button
            type="submit"
            className="bg-gray-300 text-white py-2 px-4 rounded-md hover:bg-gray-400"
            >
            Submit
            </button>
        </form>
        <div className="w-full sm:w-1/2 lg:w-1/3 flex flex-col items-center mt-8 sm:mt-0">
            <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
            <p className="text-lg font-bold text-white mb-2">Address</p>
            <p className="text-gray-600 mb-4">ESPRIT ELGHAELA</p>
            <p className="text-lg font-bold text-white mb-2">Phone</p>
            <p className="text-gray-600 mb-4">11 111 111</p>
            <p className="text-lg font-bold text-white mb-2">Email</p>
            <p className="text-gray-600">example@esprit.tn</p>
        </div>
    </div>
</section>
  )
}
