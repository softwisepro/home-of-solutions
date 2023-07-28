import React from 'react'
import AppBar from './components/AppBar'

export default function DefaultLayout({ children }) {
  return (
    <div>
      <AppBar />
      <main className='py-10'>
        {children}
      </main>
    </div>
  )
}
