import React from 'react'
import Image from 'next/image'

const About = () => {
    return (
        <div className='w-full md:h-screen p-2 flex items-center pt-10'>
            <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
                <div className='col-span-2'>
                    <p className='uppercase text-xl tracking-widest text-[#059ae6]'>About</p>
                    <h2 className='py-4'>Who I Am</h2>
                    <p className='py-2 text-gray-600'>
                        say some stuff here. I just need to make some space
                    </p>
                    <p className='py-2 text-gray-600'>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore harum maxime quo amet cupiditate atque dolore esse assumenda, voluptates sint sapiente impedit quasi ipsam voluptatum ipsa, aut illum veritatis minus!
                    </p>
                    <p className='py-2 text-gray-600 underline cursor-pointer'> Check out some of my latest projects </p>
                </div>
                <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
                    <Image
                        src='/../public/assets/remote_working.webp'
                        alt='A cozy outdoor work remote setup surrounded by tropical nature.'
                        width='766'
                        height='375'
                        className='rounded-xl'
                    />
                </div>
            </div>
        </div>
    )
}

export default About