import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai"
import { FaGithub, FaLinkedinIn } from "react-icons/fa"
import { BsFillPersonLinesFill } from "react-icons/bs"

const Nav = () => {

    const [nav, setNav] = useState(false)
    const handleNav = () => {
        setNav(!nav)
    }

    return (
        <div className='fixed w-full h-20 shadow-xl z-[100]'>
            <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
                <Image
                    src="/../public/assets/initials-logo-nobg.png"
                    alt="logo with the initials W, C, and L to represent the creators name"
                    width='50'
                    height='50' />
                <div>
                    <ul className='hidden md:flex'>
                        <Link href="/">
                            <li className="ml-10 text-sm uppercase hover:border-b">Home</li>
                        </Link>
                        <Link href="/">
                            <li className="ml-10 text-sm uppercase hover:border-b">About</li>
                        </Link>
                        <Link href="/">
                            <li className="ml-10 text-sm uppercase hover:border-b">Skills</li>
                        </Link>
                        <Link href="/">
                            <li className="ml-10 text-sm uppercase hover:border-b">Projects</li>
                        </Link>
                        <Link href="/">
                            <li className="ml-10 text-sm uppercase hover:border-b">Contact</li>
                        </Link>
                    </ul>
                    <div onClick={handleNav} className='md:hidden'>
                        <AiOutlineMenu size={25} />
                    </div>
                </div>
            </div>
            <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''}>
                <div className={nav
                    ? 'fixed left-0 top-0 w-[75%] sm:w-[45%] md:w-[45%] h-screen bg-white p-[1.5rem] ease-in duration-500'
                    : 'fixed left-[-100%] top-0 p-[1.5rem] ease-in duration-500'
                }
                >
                    <div>
                        <div className='flex w-full items-center justify-between'>
                            <Image
                                src='/../public/assets/initials-logo-nobg.png'
                                alt='logo with the initials W, C, and L to represent the creators name'
                                width='87'
                                height='85'
                            />
                            <div onClick={handleNav} className='rounded-full shadow-lg shadow-gray-300 p-2 cursor-pointer border border-black/5'>
                                <AiOutlineClose />
                            </div>
                        </div>
                        <div className='border-b border-gray-300 my-4'>
                            <p className='w-[85%] md:w-[90%] py-3 px-[.rem]'>Let&apos;s build something awesome.</p>
                        </div>
                    </div>
                    <div className='py-4 flex flex-col'>
                        <ul className='uppercase'>
                            <Link href='/'>
                                <li className='py-4 text-sm'>Home</li>
                            </Link>
                            <Link href='/'>
                                <li className='py-4 text-sm'>About</li>
                            </Link>
                            <Link href='/'>
                                <li className='py-4 text-sm'>Skills</li>
                            </Link>
                            <Link href='/'>
                                <li className='py-4 text-sm'>Projects</li>
                            </Link>
                            <Link href='/'>
                                <li className='py-4 text-sm'>Contact</li>
                            </Link>
                        </ul>
                        <div className='pt-40'>
                            <p className=' uppercase tracking-widest text-[#059ae6] font-medium'>Let&apos;s Connect</p>
                            <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                                <div className='rounded-full shadow-lg shadow-gray-300 p-3 cursor-pointer hover:scale-105 ease-in duration-300 border border-black/5'>
                                    <FaLinkedinIn />
                                </div>
                                <div className='rounded-full shadow-lg shadow-gray-300 p-3 cursor-pointer hover:scale-105 ease-in duration-300 border border-black/5'>
                                    <FaGithub />
                                </div>
                                <div className='rounded-full shadow-lg shadow-gray-300 p-3 cursor-pointer hover:scale-105 ease-in duration-300 border border-black/5'>
                                    <AiOutlineMail />
                                </div>
                                <div className='rounded-full shadow-lg shadow-gray-300 p-3 cursor-pointer hover:scale-105 ease-in duration-300 border border-black/5'>
                                    <BsFillPersonLinesFill />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Nav