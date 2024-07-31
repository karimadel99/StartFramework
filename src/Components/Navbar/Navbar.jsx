import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className='bg-slate-700 text-center'>
        <div className="container mx-auto py-4 flex flex-col md:flex-row justify-between items-center px-4 md:px-0 w-3/4">
          <div className="logo text-4xl font-bold text-white my-3">
            <NavLink to=""><h2>START FRAMEWORK</h2></NavLink>
          </div>
          <div className={`nav-links text-white text-lg font-bold flex-col md:flex-row flex md:flex ${isOpen ? 'block' : 'hidden'}`}>
            <NavLink to="about" className=" mx-2 md:mx-5 rounded p-3">About</NavLink>
            <NavLink to="portfolio" className=" mx-2 md:mx-5 rounded p-3" >Portfolio</NavLink>
            <NavLink to="contact" className=" mx-2 md:mx-5 rounded p-3">Contact</NavLink>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}
