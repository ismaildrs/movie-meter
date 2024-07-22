import React from 'react'

export default function PageNotFound() {
  return (
    <div className='flex flex-col items-center justify-center w-full h-full gap-5'>
        <div className='text-center'>
            <h1 className='text-4xl md:text-5xl lg:text-6xl xl:text-8xl cursor-pointer font-extrabold bg-gradient-to-r from-purple-600 to-pink-500 inline-block text-transparent bg-clip-text'>Oops!</h1>
            <p className='text-md md:text-lg xl:text-3xl font-bold'>PAGE NOT FOUND</p>
        </div>
      <img src='src/assets/error-404.png' className='w-3/12'></img>
    </div>
  )
}
