import React from 'react'
import Image from 'next/image'
import weatherApp from '../public/assets/weatherapp.png'
import Link from 'next/link'

const Projects = () => {
  return (
    <div className='w-full'>
        <div className='max-w-[1240px] mx-auto px-2 pt-10 pb-16'>
            <p className='text-xl tracking-widest uppercase text-lite-blue'>Projects</p>
            <h2 className='py-4'>What I Have Built:</h2>
            <div className='grid md:grid-cols-2 gap-8'>

                <div className='bg-gray-100 hover:bg-gradient-to-r from-[#04348B] to-[#0854e2d0] relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group'>
                    <Image src={weatherApp} alt='Weather Forecasting Application' className='rounded-xl group-hover:opacity-10'/>
                    <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                        <h3 className='text-2xl text-white tracking-wider text-center'>OpenWeather API Forecast Checker</h3>
                        <p className='pb-4 pt-2 text-white text-center'>Next.js</p>
                        <Link href='/'>
                            <p className='text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg'>More Info</p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Projects