"use client"
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import { getUser } from '@/utils/Session';

export default function AppBar() {
  const [isSuccess, setIsSuccess] = useState(false);
  const { push } = useRouter();

  const handleLogout = async (event) => {
    event.preventDefault();

    try {
      const res = await fetch("/api/auth/logout");

      alert(JSON.stringify(res));
      push("/");
    } catch (e) {
      const error = e;

      alert(error.message);
    }
  };


  useEffect(() => {
    (async () => {
      const { user, error } = await getUser();

      if (error) {
        push("/");
        return;
      }
      setIsSuccess(true);
    })();
  }, [push]);

  if (!isSuccess) {
    return <p>Loading...</p>;
  }
  return (
    <div className='w-full p-3 flex justify-between items-center border-b'>
      <h1 className='font-bold text-xl'>Home of sloutions</h1>

      <div className='flex gap-5 px-10'>
        {isSuccess ? (
          <>
            <button
              className='text-sm font-semibold text-black cursor-pointer'
              onClick={handleLogout}
            >
              LogOut
            </button>
          </>
        ) : (
          <>
            <Link
              href={'/auth/login'}
              className='text-sm font-semibold text-black'
            >
              LogIn
            </Link>
          </>
        )}



      </div>
    </div>
  )
}
