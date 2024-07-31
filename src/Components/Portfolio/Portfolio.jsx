import React, { useState } from 'react';
import img1 from '../../assets/poert1.png';
import img2 from '../../assets/port2.png';
import img3 from '../../assets/port3.png';

export default function Portfolio() {


  const [isOpen, setIsOpen] = useState(false);
  const [currentImg, setCurrentImg] = useState('');
  
  const openModal = (imgSrc) => {
    setCurrentImg(imgSrc);
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
    };

  const handleClickOutside = (e) => {
    if (e.target.id === 'modalOverlay') {
      closeModal();
    }
  };

  return (
    <>
      {isOpen && (
        <div
          id="modalOverlay"
          className="fixed inset-0 bg-blue-300 bg-opacity-50 flex justify-center items-center z-30"
          onClick={handleClickOutside}
        >
          <div className="bg-white rounded-xl shadow-lg relative w-1/2">
            <img src={currentImg} alt="Modal content" className="w-full h-auto rounded-xl " />
          </div>
        </div>
      )}

      <h1 className="text-5xl my-7 font-extrabold text-slate-700 text-center uppercase">
        Portfolio Component
      </h1>
      <div className="flex justify-center items-center my-2">
        <div className="border-t border-4 border-slate-700 w-1/12 mx-2"></div>
        <i className="fas fa-star text-slate-700"></i>
        <div className="border-t border-4 border-slate-700 w-1/12 mx-2"></div>
      </div>
      <div className="container mx-auto my-3 px-4">
        <div className="flex flex-wrap -mx-2">
          {[img1, img2, img3, img1, img3, img2].map((img, index) => (
            <div
              key={index}
              className="w-full sm:w-1/2 lg:w-1/3 p-8 mb-4"
              onClick={() => openModal(img)}
            >
              <div className="element relative cursor-pointer">
                <img src={img} alt="" className="relative z-0 w-full h-full rounded" />
                <div className="bg-[#1ABC9C] z-10 absolute inset-0 rounded opacity-0 hover:opacity-90 transition-opacity duration-300 flex justify-center items-center text-8xl text-white">
                  <i className="fa-solid fa-plus px-4 py-3 border-white border-4 rounded-full"></i>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
