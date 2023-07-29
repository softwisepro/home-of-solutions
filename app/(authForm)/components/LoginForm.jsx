"use client"
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'

export const LoginForm = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { push } = useRouter()

  const hundleOnsubmit = (e) => {
    e.preventDefault();

    (async () => {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password })
      })
      const data = await res.json()
      console.log(data)

      if (data.success) {
        setEmail('');
        setPassword('');
        push('/')
      } else {
        alert('Unable to login')
      }
    })();

  }

  return (
    <div className='w-full h-full flex flex-col gap-10 justify-center items-center'>
      <h1>LogIn HOS</h1>
      <form onSubmit={hundleOnsubmit} className='flex jusdtify-start items-start flex-col gap-5'>
        <input
          type='email'
          placeholder='email'
          value={email}
          onChange={e => setEmail(e.target.value)}
          className='border p-3 outline-none'
        />
        <input
          type='password'
          placeholder='password'
          value={password}
          onChange={e => setPassword(e.target.value)}
          className='border p-3 outline-none'
        />

        <button type="submit" className='border p-2'>
          Login
        </button>
      </form>
    </div>
  )
}
