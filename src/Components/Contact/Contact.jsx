import React, { useState } from 'react'

export default function Contact() {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };


    const [Age, setAge] = useState('');

    const handleAge = (event) => {
        setAge(event.target.value);
    };


    const [email, setEmail] = useState('');

    const handleEmail = (event) => {
        setEmail(event.target.value);
    };


    const [Password, setPassword] = useState('');

    const handlePassword = (event) => {
        setPassword(event.target.value);
    };
  return <>
  
  <div className="container h-screen flex justify-center items-center">

    <div action="" className='w-1/2'>
    <h1 className='text-6xl text-center font-bold my-5'>conatct section</h1>
    <div className="flex justify-center items-center my-2">
            <div className="border-t border-4 border-black w-1/6 mx-2"></div>
            <i className="fas fa-star text-black"></i>
            <div className="border-t border-4 border-black w-1/6 mx-2"></div>
  </div>
    <div className="relative my-9">
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm border-0 border-b-2  focus:outline-none focus:ring-0 text-black rounded border-b-slate-300"
                placeholder="userName"
            />
            <label
                htmlFor="filled_success"
                className={`absolute text-lg text-green-600 dark:text-green-500 duration-1000 transform ${inputValue ? 'translate-y-1 opacity-100' : 'translate-y-6 opacity-0'} scale-75 -top-4  z-10 origin-[0] start-2.5`}
            >
                UserName
            </label>
        </div>
        <div className="relative my-9">
            <input
                type="text"
                value={Age}
                onChange={handleAge}
                className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm border-0 border-b-2  focus:outline-none focus:ring-0 text-black rounded border-b-slate-300"
                placeholder="Age"
            />
            <label
                htmlFor="filled_success"
                className={`absolute text-lg text-green-600 dark:text-green-500 duration-1000 transform ${Age ? 'translate-y-1 opacity-100' : 'translate-y-6 opacity-0'} scale-75 -top-4  z-10 origin-[0] start-2.5`}
            >
                Age
            </label>
        </div>
        <div className="relative my-9">
            <input
                type="text"
                value={email}
                onChange={handleEmail}
                className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm border-0 border-b-2  focus:outline-none focus:ring-0 text-black rounded border-b-slate-300"
                placeholder="Email"
            />
            <label
                htmlFor="filled_success"
                className={`absolute text-lg text-green-600 dark:text-green-500 duration-1000 transform ${email ? 'translate-y-1 opacity-100' : 'translate-y-6 opacity-0'} scale-75 -top-4  z-10 origin-[0] start-2.5`}
            >
                Email
            </label>
        </div>
        <div className="relative my-9">
            <input
                type="text"
                value={Password}
                onChange={handlePassword}
                className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm border-0 border-b-2  focus:outline-none focus:ring-0 text-black rounded border-b-slate-300"
                placeholder="Password"
            />
            <label
                htmlFor="filled_success"
                className={`absolute text-lg text-green-600 dark:text-green-500 duration-1000 transform ${Password ? 'translate-y-1 opacity-100' : 'translate-y-6 opacity-0'} scale-75 -top-4  z-10 origin-[0] start-2.5`}
            >
                Password
            </label>
        </div>
        
        <button className='bg-[#1ABC9C] px-5 py-2 text-white my-3 rounded'>Submit</button>

    </div>

  </div>
  </>
}
