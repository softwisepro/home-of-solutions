import React from 'react'
import AppBar from '../components/AppBar'
import SessionProvider from '../SessionProvider'
import LeftBar from '../components/LeftBar'

export default function DefaultLayout({ children }) {
  return (
    <SessionProvider >
      <div>
        <div className='w-full h-auto border-b'>
          <AppBar />
        </div>
        <div className='w-full h-screen flex justify-between items-start'>

          <div className='flex-none h-screen w-[20%] border-r '>
            <LeftBar />
          </div>

          <main className='w-[80%]'>
            {children}
          </main>

        </div>
      </div>
    </SessionProvider>
  )
}
