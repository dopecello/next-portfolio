import React from 'react'
import Image from 'next/image'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'
import { AiOutlineMail } from 'react-icons/ai'
import { HiOutlineChevronDoubleUp } from 'react-icons/hi'
import Link from 'next/link'
import contactImg from '../public/static/images/office.jpg'
import ContactForm from './ContactForm'

const Contact = () => {
    return (
        <div id='contact' className='w-full z-[1] px-4'>
            <div className='max-w-[1240px] mx-auto xl:py-20 w-full'>
                <p className='text-xl tracking-widest uppercase text-lite-blue py-6'>Contact</p>
                <div className='grid lg:grid-cols-5 gap-8'>
                    {/* left side */}
                    <div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-300 bg-slate-50 rounded-xl p-4 border border-black/20'>
                        <div className='lg:p-4 h-full'>
                            <div>
                                <Image
                                    src={contactImg}
                                    alt='My dream home office setup!'
                                    width='1280'
                                    height='720'
                                    className='rounded-xl lg:hover:scale-105 ease-in duration-300' />
                            </div>
                            <div>
                                <h2 className='py-2'>William Locke</h2>
                                <p>Front-End Developer</p>
                                <p className='pt-4'>I am available for full-time positions worldwide.</p> <p>Contact me and let&apos;s get started.</p>
                                <div>
                                    <p className='uppercase pt-8'>Connect with me</p>
                                    <div className='flex items-center justify-between py-4'>
                                        <Link href='https://www.linkedin.com/in/williamcareylocke/' rel='noopener norefferer' target='_blank'>
                                            <div className='rounded-full shadow-lg shadow-gray-300 p-6 cursor-pointer duration-200 border border-black/10 transition-colors hover:bg-navy-blue hover:text-white'>
                                                <FaLinkedinIn />
                                            </div>
                                        </Link>
                                        <Link href='https://github.com/dopecello' rel='noopener norefferer' target='_blank'>
                                            <div className='rounded-full shadow-lg shadow-gray-300 p-6 cursor-pointer duration-200 border border-black/10 transition-colors hover:bg-navy-blue hover:text-white'>
                                                <FaGithub />
                                            </div>
                                        </Link>
                                        <Link href='mailto:williamlocke.dev@gmail.com'>
                                            <div className='rounded-full shadow-lg shadow-gray-300 p-6 cursor-pointer duration-200 border border-black/10 transition-colors hover:bg-navy-blue hover:text-white'>
                                                <AiOutlineMail />
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* right-side */}
                    <div className='col-span-3 w-full h-auto shadow-xl shadow-gray-300 bg-slate-50 rounded-xl lg:p-4 border border-black/20'>
                            <ContactForm />
                    </div>
                </div>
            </div>
            <div className='flex justify-center py-12'>
                <Link href='/#home' scroll={false}>
                    <div className='rounded-full shadow-lg shadow-gray-300 p-6 cursor-pointer lg:hover:scale-105 ease-in duration-300 border bg-white border-black/20'>
                        <HiOutlineChevronDoubleUp size={30} className='text-gray-400' />
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Contact