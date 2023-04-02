import React from 'react'
import Image from 'next/image'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'
import { AiOutlineMail } from 'react-icons/ai'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { HiOutlineChevronDoubleUp } from 'react-icons/hi'
import Link from 'next/link'

const Contact = () => {
    return (
        <div className='w-full lg:-h-screen'>
            <div className='max-w-[1240px] m-auto px-2 py-16 w-full'>
                <p className='text-xl tracking-widest uppercase text-lite-blue'>Contact</p>
                <h2 className='py-4'>Get In Touch</h2>
                <div className='grid lg:grid-cols-5 gap-8'>
                    {/* left side */}
                    <div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-100 rounded-xl p-4 border border-black/5'>
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
                                <p className='uppercase pt-8'>Connect with me</p>
                                <div className='flex items-center justify-between py-4'>
                                    <div className='rounded-full shadow-lg shadow-gray-300 p-6 cursor-pointer hover:scale-105 ease-in duration-300 border border-black/10'>
                                        <FaLinkedinIn />
                                    </div>
                                    <div className='rounded-full shadow-lg shadow-gray-300 p-6 cursor-pointer hover:scale-105 ease-in duration-300 border border-black/10'>
                                        <FaGithub />
                                    </div>
                                    <div className='rounded-full shadow-lg shadow-gray-300 p-6 cursor-pointer hover:scale-105 ease-in duration-300 border border-black/10'>
                                        <AiOutlineMail />
                                    </div>
                                    <div className='rounded-full shadow-lg shadow-gray-300 p-6 cursor-pointer hover:scale-105 ease-in duration-300 border border-black/10'>
                                        <BsFillPersonLinesFill />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* right-side */}
                    <div className='col-span-3 w-full h-auto shadow-xl shadow-gray-100 rounded-xl lg:p-4 border border-black/5'>
                        <div className='p-4'>
                            <form>
                                <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                                    <div className='flex flex-col'>
                                        <label className='uppercase text-sm py-2'>Name</label>
                                        <input className='border-2 rounded-lg p-3 flex border-gray-200' type="text" />
                                    </div>
                                    <div className='flex flex-col'>
                                        <label className='uppercase text-sm py-2'>Phone</label>
                                        <input className='border-2 rounded-lg p-3 flex border-gray-200' type="text" />
                                    </div>
                                </div>
                                <div className='flex flex-col py-2'>
                                    <label className='uppercase text-sm py-2'>Email</label>
                                    <input className='border-2 rounded-lg p-3 flex border-gray-200' type="email" />
                                </div>
                                <div className='flex flex-col py-2'>
                                    <label className='uppercase text-sm py-2'>Subject</label>
                                    <input className='border-2 rounded-lg p-3 flex border-gray-200' type="text" />
                                </div>
                                <div className='flex flex-col py-2'>
                                    <label className='uppercase text-sm py-2'>Message</label>
                                    <textarea className='border-2 rounded-lg p-3 border-gray-200' rows='10'></textarea>
                                </div>
                                <button className='w-full p-4 mt-5 text-gray-100'>Send Message</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex justify-center py-12'>
                <Link href='/' />
                <div className='rounded-full shadow-lg shadow-gray-300 p-6 cursor-pointer hover:scale-105 ease-in duration-300 border border-black/10'>
                    <HiOutlineChevronDoubleUp size={30} className='text-gray-400' />
                </div>
            </div>
        </div>
    )
}

export default Contact