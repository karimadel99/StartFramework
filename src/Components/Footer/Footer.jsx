import React from 'react'

export default function Footer() {
  return <>
  <div className=" flex flex-col md:flex-row justify-around items-center px-4 py-5 text-center text-white bg-[#2C3E50] font-semibold w-full" >
    <div className="w-1/4 my-5">
        <div className="card">
            <h3 className='text-3xl my-2'>LOCATION</h3>
            <p>2215 John Daniel Drive</p>
            <p>Clark, MO 65243</p>
        </div>
    </div>
    <div className="w-1/4 my-5">
        <div className="card">
            <h3 className='text-3xl my-2'>AROUND THE WEB</h3>
            <div className="flex space-x-3 justify-evenly my-5 text-lg">
            <i  className="fa-brands fa-facebook  icon border-white rounded-full p-2 border-2" ></i>
            <i  className="fa-brands fa-twitter  icon  border-white rounded-full p-2 border-2"></i>            
            <i  className="fa-brands fa-linkedin-in  icon  border-white rounded-full p-2 border-2"></i>
            <i  className="fa-solid fa-globe  icon  border-white rounded-full p-2 border-2"></i>
            </div>
        </div>
    </div>
    <div className="w-1/4 my-5">
        <div className="card">
            <h3 className='text-3xl my-2'>ABOUT FREELANCER</h3>
            <p>Freelance is a free to use, licensed tailwind theme created by Karim</p>
        </div>
    </div>
  </div>
  <div className='bg-slate-800 text-white w-full text-center py-5'>
    <p>Copyright © Your Website 2021</p>
  </div>
  </>
}
