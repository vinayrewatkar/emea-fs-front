'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const items = [
  {
    front: '/Heart.jpg',
    back: '/Heart_Big.jpg',
    alt: 'Heart',
    description: 'Our people are at the heart of our business',
  },
  {
    front: '/Grow_Talent.jpg',
    back: '/Grow_Talent_Big.jpg',
    alt: 'Grow Talent',
    description: 'How do we create the best talent',
  },
  {
    front: '/Attract_Talent.jpg',
    back: '/Attract_Talent_Big.jpg',
    alt: 'Attract Talent',
    description: 'How do we ATTRACT TALENT',
  },
  {
    front: '/Grow_Skills.jpg',
    back: '/Grow_Skills_Big.jpg',
    alt: 'Grow Skills',
    description: 'How do we GROW, domain and Technology skills?',
  },
  {
    front: '/Retain_Talent.jpg',
    back: '/Retain_Talent_Big.jpg',
    alt: 'Retain Talent',
    description: 'How do we RETAIN talent',
  },
  {
    front: '/Engage_Talent.jpg',
    back: '/Engage_Talent_Big.jpg',
    alt: 'Engage Talent',
    description: 'How do we ENGAGE TALENT',
  },
];

const Page = () => {
  const [flippedIndex, setFlippedIndex] = useState<number | null>(null);
  const [modalImage, setModalImage] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gray-100">
  {/* NAVBAR - Full Width, No Padding */}
  <nav className="bg-blue-950 text-white px-6 py-6 flex justify-between items-center shadow w-full mb-6">
    <h2 className="text-white font-bold text-xl">HR Corner</h2>
    <ul className="flex items-center gap-4 text-sm">
      <li><Link href="/" className="text-orange-400">Home</Link></li>
      <li className="text-gray-400">/</li>
      <li><Link href="/pages/hrcorner" className="text-white">HR Corner</Link></li>
    </ul>
  </nav>
    <div className="min-h-screen bg-gray-100 p-6">
      {/* NAVBAR */}
       
       


      {/* IMAGE GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item, index) => (
          <div
            key={index}
            className="relative w-full h-64 perspective cursor-pointer"
            onClick={() => setFlippedIndex(index === flippedIndex ? null : index)}
          >
            <div
              className={`relative w-full h-full transition-transform duration-700 transform-style preserve-3d ${
                flippedIndex === index ? 'rotate-y-180' : ''
              }`}
            >
              {/* FRONT */}
              <div className="absolute w-full h-full backface-hidden rounded-lg overflow-hidden group">
         <img
             src={item.front}
             alt={item.alt}
             className="w-full h-full object-cover transition-all duration-500 ease-in-out group-hover:brightness-50 group-hover:blur-none rounded-lg"
          />
        {/*  Description */}
        <div className="absolute bottom-0 left-0 w-full text-center text-white text-lg font-sans p-7 bg-blend-luminosity opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in pointer-events-none">
            {item.description}
        </div>
        </div>


              {/* BACK */}
              <div
                className="absolute w-full h-full rotate-y-180 backface-hidden rounded-lg overflow-hidden"
                onClick={(e) => {
                  e.stopPropagation();
                  setModalImage(item.back);
                }}
              >
                <img
                  src={item.back}
                  alt={item.alt + ' big'}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* MODAL */}
{modalImage && (
  <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
    {/* Close Button */}
    <button
      onClick={() => {
        setModalImage(null);         
        setFlippedIndex(null);       
      }}
      className="absolute top-6 right-6 text-white text-3xl font-bold z-50 hover:text-red-400 transition duration-300"
      aria-label="Close modal"
    >
      &times;
    </button>

    {/* Fullscreen image */}
    <img
      src={modalImage}
      alt="Full View"
      className="max-w-full max-h-full rounded-lg shadow-lg"
    />
  </div>
)}

    </div>
    </div>
  );
};

export default Page;
