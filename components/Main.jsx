import React from 'react'
import Link from 'next/link'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'
import { AiOutlineMail } from 'react-icons/ai'

const Main = () => {
    return (

        <div id='home' className='md:pt-[19rem] pt-[5rem] w-full text-center z-1'>
            <div className='w-full h-full mx-auto flex justify-center items-center'>
                <div className='m-auto p-6 max-w-[95%] md:mt-0 xl:max-w-[67%] text-left md:text-center'>
                    <p className='uppercase text-sm tracking-widest text-gray-600 pb-2 md:pb-4'>Let&apos;s build something together.</p>
                    <h1 className='pt-2 md:pt-0 md:py-4 text-gray-700'>
                        Hi, I&apos;m <span className='text-lite-blue'>William,</span>
                    </h1>
                    <h1 className='md:py-2 text-gray-700'>
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
                        <Link href='https://www.linkedin.com/in/williamcareylocke/' rel='noopener norefferer' target='_blank'>
                            <div className='rounded-full shadow-lg shadow-gray-300 p-6 cursor-pointer border border-black/20 transition bg-white hover:bg-lite-blue hover:text-slate-100 lg:hover:scale-105 ease-in-out duration-300 '>
                                <FaLinkedinIn size={20} />
                            </div>
                        </Link>
                        <Link href='https://github.com/dopecello' rel='noopener norefferer' target='_blank'>
                            <div className='rounded-full shadow-lg shadow-gray-300 p-6 cursor-pointer border border-black/20 transition bg-white hover:bg-lite-blue hover:text-slate-100 lg:hover:scale-105 ease-in-out duration-300 '>
                                <FaGithub size={20} />
                            </div>
                        </Link>
                        <Link href='mailto:williamlocke.dev@gmail.com'>
                            <div className='rounded-full shadow-lg shadow-gray-300 p-6 cursor-pointer border border-black/20 transition bg-white hover:bg-lite-blue hover:text-slate-100 lg:hover:scale-105 ease-in-out duration-300 '>
                                <AiOutlineMail size={20} />
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Main 