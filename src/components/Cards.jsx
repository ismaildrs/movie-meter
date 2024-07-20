import React from 'react'
import { Link } from 'react-router-dom'

export default function Cards({logoUrl, title, id}) {

  return (
    <div className='flex relative justify-center w-full md:w-auto md:inline-block'>
        <img className='min-w-32 max-w-32 md:min-w-44 cursor-pointer md:max-w-44 rounded-s-lg md:rounded-e-lg' src={logoUrl} alt="Movie image"></img>
        <div className='p-2 relative md:absolute md:top-0 md:left-0 w-full h-full md:opacity-0 hover:opacity-100 text-sm lg:text-lg bg-gradient-to-bl from-black/50 to-black/15 rounded-e-lg'>
            <h1 className='text-lg font-semibold'>{title}</h1>
            <Link className='text-pink-200 absolute bottom-5 right-5 cursor-pointer inline-block font-semibold' to={`/movie/${id}`}>See more</Link>
        </div>
    </div>
  )
}
