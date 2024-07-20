import React, { useState } from 'react';

export default function Navbar() {
  const [isNavVisible, setIsNavVisible] = useState(false);
  
  const toggleNavbar = () => {
    setIsNavVisible(!isNavVisible);
  };

  return (
    <nav className='fixed top-0 left-0 right-0 z-50'>
      <div className='flex flex-wrap bg-gradient-to-b from-black from-20% to-transparent to-100% justify-around items-center w-screen h-auto py-8'>
        <h1 className="text-2xl lg:text-3xl cursor-pointer font-bold bg-gradient-to-r from-purple-600 to-pink-500 inline-block text-transparent bg-clip-text">MovieMeter</h1>
        <img src='/src/assets/hamburger.png' className='h-8 md:hidden cursor-pointer' onClick={toggleNavbar} alt="Menu" />
        <ul id='options' className={`gap-5 ${isNavVisible ? 'flex w-full justify-center py-6' : 'hidden'} md:text-lg md:w-auto md:flex lg:text-xl font-medium`}>
          <li className='cursor-pointer hover:text-purple-400'>Movies</li>
          <li className='cursor-pointer hover:text-purple-400'>Series</li>
          <li className='cursor-pointer hover:text-purple-400'>Community</li>
          <li className='cursor-pointer hover:text-purple-400'>About</li>
        </ul>
      </div>
    </nav>

  );
}