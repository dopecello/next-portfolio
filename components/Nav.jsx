import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai"
import { FaGithub, FaLinkedinIn } from "react-icons/fa"
import initialsLogo from '../public/static/images/initials-logo-nobg.png'

const Nav = () => {

    const [nav, setNav] = useState(false)
    const [shadow, setShadow] = useState(false)

    const navContents = [
        { title: 'Home', href: '/#home', id: 1 },
        { title: 'About', href: '/#about', id: 2 },
        { title: 'Skills', href: '/#skills', id: 3 },
        { title: 'Projects', href: '/#projects', id: 4 },
        { title: 'Contact', href: '/#contact', id: 5 }
    ]

    const handleNav = () => {
        setNav(!nav)
    }

    useEffect(() => {
        const handleShadow = () => {
            if (window.scrollY >= 120) {
                setShadow(true)
            } else {
                setShadow(false)
            }
        }
        window.addEventListener('scroll', handleShadow)
    }, [])


    return (
        <div className={shadow
            ? 'fixed w-full h-20 z-[10] bg-gradient-to-b from-white to-slate-100 top-0 transition shadow-xl'
            : 'bg-gradient-to-b from-white to-slate-100 fixed w-full h-20 z-[10] top-0 transition shadow-none'
        }>
            <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
                <Link href="/#home" scroll={false}>
                    <Image
                        src={initialsLogo}
                        alt="logo with the initials W, C, and L to represent the creators name"
                        width='80'
                        height='50' />
                </Link>
                <div>
                    <ul className='hidden md:flex'>
                        {navContents.map((index) => {
                            return (
                                <Link href={index.href} scroll={false} key={index.id}>
                                    <li className="ml-10 text-sm uppercase hover:border-b">{index.title}</li>
                                </Link>
                            )
                        })
                        }
                    </ul>
                    <div onClick={handleNav} className='md:hidden'>
                        <AiOutlineMenu size={25} />
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}

            <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''}>
                <div className={nav
                    ? 'fixed left-0 top-0 w-[75%] sm:w-[45%] md:w-[45%] h-screen bg-slate-100 p-[1.5rem] ease-in duration-500'
                    : 'fixed left-[-100%] top-0 p-[1.5rem] ease-in duration-500'}>
                    <div>
                        <div className='flex w-full items-center justify-between'>
                            <Image
                                src={initialsLogo}
                                alt='logo with the initials W, C, and L to represent the creators name'
                                width='87'
                                height='85'
                            />
                            <div onClick={handleNav} className='rounded-full shadow-md bg-white p-2 cursor-pointer border border-black/20'>
                                <AiOutlineClose />
                            </div>
                        </div>
                        <div className='border-b border-gray-300 my-4'>
                            <p className='w-[85%] md:w-[90%] py-3 px-[.rem]'>Let&apos;s build something awesome.</p>
                        </div>
                    </div>
                    <div className='py-4 flex flex-col'>
                        <ul className='uppercase'>
                            {navContents.map((index) => {
                                return (
                                    <Link href={index.href} scroll={false} onClick={handleNav} key={index.id}>
                                        <li className='py-4 text-sm'>{index.title}</li>
                                    </Link>
                                )
                            })
                            }
                        </ul>
                        <div className='gf:pt-[5rem] xxs:pt-[8rem] pt-[10rem]'>
                            <p className=' uppercase tracking-widest text-lite-blue font-medium'>Let&apos;s Connect</p>
                            <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                                <Link href='https://www.linkedin.com/in/williamcareylocke/' rel='noopener norefferer' target='_blank'>
                                    <div className='rounded-full shadow-lg shadow-gray-300 p-3 cursor-pointer hover:scale-105 ease-in duration-300 border border-black/5'>
                                        <FaLinkedinIn />
                                    </div>
                                </Link>
                                <Link href='https://github.com/dopecello' rel='noopener norefferer' target='_blank'>
                                    <div className='rounded-full shadow-lg shadow-gray-300 p-3 cursor-pointer hover:scale-105 ease-in duration-300 border border-black/5'>
                                        <FaGithub />
                                    </div>
                                </Link>
                                <Link href='https://mail.google.com/mail/?view=cm&source=mailto&to=williamlocke.cello@gmail.com' rel='noopener norefferer' target='_blank'>
                                    <div className='rounded-full shadow-lg shadow-gray-300 p-3 cursor-pointer hover:scale-105 ease-in duration-300 border border-black/5'>
                                        <AiOutlineMail />
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Nav


//RiMoonClearFill for dark mode
//MdLightMode for light mode