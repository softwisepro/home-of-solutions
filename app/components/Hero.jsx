import React from 'react'

export default function Hero() {
    return (
        <div className='w-full h-[80vh] container mx-auto bg-transparent'>
            <div className='w-full h-full p-5 relative'>
                <div className='absolute z-10 flex flex-col justify-center h-full px-40 items-start gap-10'>
                    <div className='text-white text-7xl flex flex-col gap-5'>
                        <span>
                            What
                        </span>
                        <span>
                            Are You
                        </span>
                        <div>
                            Waiting For?
                        </div>
                    </div>
                    <p className='text-white text-2xl'>
                        Give your future a boost at Marist Boys Secondary School
                    </p>
                    <div className='flex gap-10'>
                        <button
                            className='px-10 py-4 border-2 border-white text-white bg-transparent uppercase'
                        >
                            Apply
                        </button>
                        <button
                            className='px-10 py-4 border-2 border-white text-white bg-transparent uppercase'
                        >
                            Courses
                        </button>
                        <button
                            className='px-10 py-4 border-2 border-white text-white bg-transparent uppercase'
                        >
                            News & Events
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
