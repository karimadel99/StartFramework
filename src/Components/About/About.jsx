import React from 'react'

export default function About() {
  return <>

<div className="container h-screen flex justify-center items-center flex-col  text-white bg-[#1ABC9C]">
        <div className="w-1/3">
          <h1 className="text-5xl my-4 font-bold">ABOUT COMPONENT</h1>
          <div className="flex justify-center items-center my-2">
            <div className="border-t border-4 border-white w-1/4 mx-2"></div>
            <i className="fas fa-star text-white"></i>
            <div className="border-t border-4 border-white w-1/4 mx-2"></div>
          </div>
        </div>
        <div className="text-lg my-2 flex w-3/4 space-x-2">
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem deserunt reiciendis eveniet id laudantium animi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, accusantium.</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem deserunt reiciendis eveniet id laudantium animi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, maxime.</p>
          </div>
      </div>

  </>
}
