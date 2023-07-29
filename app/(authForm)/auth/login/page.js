import React from 'react'
import { LoginForm } from '../../components/LoginForm'

export default function page() {
  return (
    <div className='w-full h-screen flex justify-center items-center bg-white dark:bg-gray-900'>
      <LoginForm />
    </div>
  )
}
