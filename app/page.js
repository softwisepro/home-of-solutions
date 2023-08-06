import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'

export default function page() {
  return (
    <div className='w-full h-full overflow-auto bg-transparent'>
        <Navbar />
        <Hero />
    </div>
  )
}
