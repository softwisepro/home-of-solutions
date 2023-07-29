import React from 'react'
import Link from 'next/link'

export default function AppBar() {
  return (
    <div className='w-full p-5 flex justify-between items-center shadow-inner shadow-orange-300'>
      <Link
        href={'/'}
        className="text-xl font-bold text-orange-400"
      >
        Atomatiki Site Admnistration
      </Link>

      <div className='flex '>
        <div className='text-xs font-normal p-1  '>
          <span>Welcome,</span>
          <Link
            href={'/'}
            className='text-xs font-normal p-1  '
          >

            <span className='text-xs text-orange-200 lowercase'> ericegidius01@gmail.com</span>
          </Link>
        </div>
        <span>/</span>
        <Link
          href={'https://blog.atomatiki.tech'}
          target={'_blank'}
          className='text-xs font-normal p-1  '
        >
          visite site
        </Link>
        <span>/</span>
        <Link
          href={'/'}
          className='text-xs font-normal p-1  '
        >
          settings
        </Link>
        <span>/</span>
        <Link
          href={'/'}
          className='text-xs font-normal p-1  '
        >
          Log out
        </Link>
      </div>
    </div>
  )
}
