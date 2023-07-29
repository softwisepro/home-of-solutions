"use client"
import { getUser } from '@/utils/Session';
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

export default function AuthLayout({ children }) {

  const [loggedIn, setLoggedIn] = useState(false);
  const [notLoggedIn, setNotLoggedIn] = useState(false)
  const { push } = useRouter();

  useEffect(() => {
    (async () => {
      const { user } = await getUser();
      if (user) {
        setLoggedIn(true)
      } else {
        setNotLoggedIn(true)
      }
    })();
  }, [])
  
  if (loggedIn) push('/')
  
  if(notLoggedIn)return (
    <div>
      { children }
    </div>
  )

  
}
