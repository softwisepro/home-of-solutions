import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { RiFacebookLine, RiInstagramLine } from 'react-icons/ri'

export default function Navbar() {
    return (
        <div className='w-full'>
            <div className='w-full top-0 sticky z-50 bg-white'>
                <div className='w-full flex justify-between items-center p-5 container mx-auto'>
                    <div className='h-full'>
                        <Image
                            src='/marist.png'
                            height='80'
                            width='80'
                            alt='MARIST BOYS SECONDARY SCHOOL EMBLEM'
                        />
                    </div>
                    <div className='flex justify-center items-center gap-5 font-bold'>
                        <div className='bg-indigo-200 p-2 rounded-full text-indigo-800'>
                            <RiFacebookLine fontSize={20} />
                        </div>
                        <div className='bg-indigo-200 p-2 rounded-full text-indigo-800'>
                            <RiInstagramLine fontSize={20} />
                        </div>
                    </div>
                </div>

                <div className='w-full flex justify-center items-center p-5 container mx-auto uppercase font-bold text-xl gap-5'>
                    <Link
                        href='/'
                    >Home</Link>
                    <div className='h-6 w-[2px] bg-black'></div>
                    <Link
                        href='/'
                    >Admission</Link>
                    <div className='h-6 w-[2px] bg-black'></div>
                    <Link
                        href='/'
                    >Accademics</Link>
                    <div className='h-6 w-[2px] bg-black'></div>
                    <Link
                        href='/'
                    >International students</Link>
                    <div className='h-6 w-[2px] bg-black'></div>
                    <Link
                        href='/'
                    >news & events</Link>
                    <div className='h-6 w-[2px] bg-black'></div>
                    <Link
                        href='/'
                    >Contact</Link>
                </div>
            </div>
            <div className='w-full flex justify-between items-center p-10 bg-indigo-100'>
                <div className='constiner mx-auto'>
                    <p className='font-medium text-2xl max-w-6xl text-center text-indigo-700 tracking-wider'>
                        Sorry, we are currently <span className='underline underline-offset-4'> not accepting</span> enrollments for the Spring/Summer terms.
                        For more information about Marist Boys Secondary School, email <span className='text-blue-300'>info@maristboys.school</span>
                    </p>
                </div>
            </div>
        </div>
    )
}
