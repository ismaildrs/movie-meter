import React from 'react';
import "../index.css"; // Import CSS file for transitions
import useRouteChange from '../hooks/routeChange';

export default function CarouselItem({ bgUrl, logoUrl, desc, active, id }) {
  return (
    <div className={`w-screen carousel-item relative ${active ? 'active' : ''}`}>
      <div className="relative">
        <img
          src={bgUrl}
          className="w-screen h-screen object-cover object-center"
          alt="Background"
        />
        <div className='absolute flex flex-col bottom-16 z-20 gap-y-3 left-5 md:left-14'>
          <img src={logoUrl} className='w-44 lg:w-44 xl:w-48' alt='Logo' />
          <div className='w-11/12 max-w-2xl text-sm lg:text-lg xl:text-xl rounded-md bg-gradient-to-br from-black/100 to-black/15 p-2'>
            <p>{desc}</p>
          </div>
          <div className='flex gap-3 lg:gap-4'>
            <button className='bg-gradient-to-r from-purple-600 to-pink-500 px-8 py-3 rounded-full font-bold text-sm lg:text-lg xl:text-xl' onClick={() => useRouteChange(`/movie/${id}`)}>Discover More</button>
            <button className='border-2 border-white bottom-4 px-8 py-3 rounded-full font-bold text-sm lg:text-lg xl:text-xl'>Add to favorite</button>
          </div>
        </div>
      </div>
      
      
    </div>
  );
}
