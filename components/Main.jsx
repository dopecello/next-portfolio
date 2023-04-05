import React from 'react'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'
import { AiOutlineMail } from 'react-icons/ai'
import { BsFillPersonLinesFill } from 'react-icons/bs'

const Main = () => {
    return (

        <div id='home' className='md:pt-[19rem] pt-[5rem] w-full text-center z-1'>
            <div className='w-full h-full mx-auto flex justify-center items-center'>
                <div className='m-auto p-6 gf:max-w-[95%] gf:mt-2 xxs:max-w-[90%] xxs:mt-2 xs:max-w-[83%] xs:mt-2 mt-2 sm:max-w-[80%] md:mt-0 xl:max-w-[67%]'>
                    <p className='uppercase text-sm tracking-widest text-gray-600'>Let&apos;s build something together.</p>
                    <h1 className='py-4 text-gray-700'>
                        Hi, I&apos;m <span className='text-lite-blue'>William,</span>
                    </h1>
                    <h1 className='py-2 text-gray-700'>
                        a Front-End Web Developer
                    </h1>
                    <div>
                        <p className='py-4 text-gray-600'>
                            I&apos;m a web developer pivoting from a background in Cello Performance in order to create practical,
                            efficient programming solutions for companies and commercial music artists.
                            I&apos;m often appointed as a project leader by management to spearhead team initiatives that need to satisfy short deadlines,
                            while preserving technical quality and excruciating attention to detail.
                        </p>
                    </div>
                    <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
                        <div className='rounded-full shadow-lg shadow-gray-300 p-6 cursor-pointer border border-black/20 transition bg-white hover:bg-lite-blue hover:text-slate-100 hover:scale-105 ease-in-out duration-300 '>
                            <FaLinkedinIn size={20} />
                        </div>
                        <div className='rounded-full shadow-lg shadow-gray-300 p-6 cursor-pointer border border-black/20 transition bg-white hover:bg-lite-blue hover:text-slate-100 hover:scale-105 ease-in-out duration-300 '>
                            <FaGithub size={20} />
                        </div>
                        <div className='rounded-full shadow-lg shadow-gray-300 p-6 cursor-pointer border border-black/20 transition bg-white hover:bg-lite-blue hover:text-slate-100 hover:scale-105 ease-in-out duration-300 '>
                            <AiOutlineMail size={20} />
                        </div>
                        <div className='rounded-full shadow-lg shadow-gray-300 p-6 cursor-pointer border border-black/20 transition bg-white hover:bg-lite-blue hover:text-slate-100 hover:scale-105 ease-in-out duration-300 '>
                            <BsFillPersonLinesFill size={20} />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Main 