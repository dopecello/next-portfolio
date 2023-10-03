import React from 'react'
import Image from 'next/image'
import workRemoteImg from '../public/static/images/remote_working.webp'
import Link from 'next/link'

const About = () => {
    return (
        <div id='about' className='w-full p-6 mx-auto flex items-center xl:pt-[20rem] xl:pb-[10rem] max-w-[95%] xl:mt-[15%]'>
            <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
                <div className='col-span-2'>
                    <p className='uppercase text-xl tracking-widest py-4 text-lite-blue'>About</p>
                    <p className='py-2 text-gray-600'>
                        I earned a certificate in Full-Stack Web Development from the University of Miami in order to get familiarized
                        with the unique workflow of creating web applications as a solo developer and as a part of a professional team. My favorite way to code the front-end side of web applications
                        is by using Next.js with React and TypeScript. I am currently learning OOP-specific, back-end development through the usage of Java and C# using ASP.NET Core.
                        My goal is that one day I can help businesses, teams, and individuals come up with their own custom solutions to their real-world problems through leveraging technology. 
                    </p>
                    <p className='py-2 text-gray-600'>
                        I&apos;m seeking a hybrid/remote position that facilitates global collaboration and meaningful contribution to important problems.
                        I enjoy cross-functional group efforts to meet goals and I like to over-deliver on client expectations.
                    </p>
                    <Link href={'/#projects'} scroll={false}>
                        <p className='py-2 text-gray-600 font-semibold underline cursor-pointer'> Check out some of my latest projects </p>
                    </Link>
                </div>
                <div className='w-full h-auto m-auto shadow-xl bg-white shadow-gray-400 rounded-xl flex items-center justify-center lg:hover:scale-105 ease-in duration-300 border border-black/5'>
                    <Image
                        src={workRemoteImg}
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