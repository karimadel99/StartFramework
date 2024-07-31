import React from 'react';
import avatar from '../../assets/avataaars.svg';
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function Home() {
  return (
    <>
      <div className="container h-screen flex justify-center items-center text-center text-white bg-[#1ABC9C]">
        <div className="w-1/3">
          <img src={avatar} alt="Avatar" className="w-1/2 mx-auto" />
          <h1 className="text-5xl my-4 font-bold">START FRAMEWORK</h1>
          <div className="flex justify-center items-center my-2">
            <div className="border-t border-4 border-white w-1/4 mx-2"></div>
            <i className="fas fa-star text-white"></i>
            <div className="border-t border-4 border-white w-1/4 mx-2"></div>
          </div>
          <div className="text-lg my-2">
            <span>Graphic Artist - Web Designer - Illustrator</span>
          </div>
        </div>
      </div>
    </>
  );
}
