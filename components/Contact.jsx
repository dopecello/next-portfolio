import React from 'react'
import Image from 'next/image'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'
import { AiOutlineMail } from 'react-icons/ai'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { HiOutlineChevronDoubleUp } from 'react-icons/hi'
import Link from 'next/link'

const Contact = () => {
    return (
        <div id='contact' className='w-full z-[1]'>
            <div className='max-w-[1240px] m-auto px-2 xl:py-20 w-full'>
                <p className='text-xl tracking-widest uppercase text-lite-blue py-6'>Contact</p>
                <div className='grid lg:grid-cols-5 gap-8'>
                    {/* left side */}
                    <div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-300 bg-slate-50 rounded-xl p-4 border border-black/20'>
                        <div className='lg:p-4 h-full'>
                            <div>
                                <Image
                                    src='/../public/assets/office.jpg'
                                    alt='My dream home office setup!'
                                    width='1280'
                                    height='720'
                                    className='rounded-xl hover:scale-105 ease-in duration-300' />
                            </div>
                            <div>
                                <h2 className='py-2'>William Locke</h2>
                                <p>Front-End Developer</p>
                                <p className='pt-4'>I am available for full-time positions worldwide.</p> <p>Contact me and let&apos;s get started.</p>
                                <div>
                                    <p className='uppercase pt-8'>Connect with me</p>
                                    <div className='flex items-center justify-between py-4'>
                                        <div className='rounded-full shadow-lg shadow-gray-300 p-6 cursor-pointer duration-200 border border-black/10 transition-colors hover:bg-navy-blue hover:text-white'>
                                            <FaLinkedinIn />
                                        </div>
                                        <div className='rounded-full shadow-lg shadow-gray-300 p-6 cursor-pointer duration-200 border border-black/10 transition-colors hover:bg-navy-blue hover:text-white'>
                                            <FaGithub />
                                        </div>
                                        <div className='rounded-full shadow-lg shadow-gray-300 p-6 cursor-pointer duration-200 border border-black/10 transition-colors hover:bg-navy-blue hover:text-white'>
                                            <AiOutlineMail />
                                        </div>
                                        <div className='rounded-full shadow-lg shadow-gray-300 p-6 cursor-pointer duration-200 border border-black/10 transition-colors hover:bg-navy-blue hover:text-white'>
                                            <BsFillPersonLinesFill />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* right-side */}
                    <div className='col-span-3 w-full h-auto shadow-xl shadow-gray-300 bg-slate-50 rounded-xl lg:p-4 border border-black/20'>
                        <div className='p-4'>
                            <form>
                                <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                                    <div className='flex flex-col'>
                                        <label className='uppercase text-sm py-2'>Name</label>
                                        <input className='border-2 rounded-lg p-3 flex border-gray-200 focus-visible:outline-lite-blue focus-visible:border-lite-blue caret' type="text" />
                                    </div>
                                    <div className='flex flex-col'>
                                        <label className='uppercase text-sm py-2'>Phone</label>
                                        <input className='border-2 rounded-lg p-3 flex border-gray-200 focus-visible:outline-lite-blue focus-visible:border-lite-blue' type="text" />
                                    </div>
                                </div>
                                <div className='flex flex-col py-2'>
                                    <label className='uppercase text-sm py-2'>Email</label>
                                    <input className='border-2 rounded-lg p-3 flex border-gray-200 focus-visible:outline-lite-blue focus-visible:border-lite-blue' type="email" />
                                </div>
                                <div className='flex flex-col py-2'>
                                    <label className='uppercase text-sm py-2'>Subject</label>
                                    <input className='border-2 rounded-lg p-3 flex border-gray-200 focus-visible:outline-lite-blue focus-visible:border-lite-blue' type="text" />
                                </div>
                                <div className='flex flex-col py-2'>
                                    <label className='uppercase text-sm py-2'>Message</label>
                                    <textarea className='border-2 rounded-lg p-3 border-gray-200 focus-visible:outline-lite-blue focus-visible:border-lite-blue' rows='10'></textarea>
                                </div>
                                <button className='w-full p-4 mt-4 text-gray-100'>Send Message</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex justify-center py-12'>
                <Link href='/#home' scroll={false}>
                    <div className='rounded-full shadow-lg shadow-gray-300 p-6 cursor-pointer hover:scale-105 ease-in duration-300 border bg-white border-black/20'>
                        <HiOutlineChevronDoubleUp size={30} className='text-gray-400' />
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Contact