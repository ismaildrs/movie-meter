import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Body from '../components/Body'

export default function Home() {
  return (
    <div>
      <Hero/>
      <Body title="Series" type="series" search="batman"/>
      <Body title="Movies" type="movie" search="love"/>
    </div>
  )
}
