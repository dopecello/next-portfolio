import React from 'react'
import Image from 'next/image'

const About = () => {
    return (
        <div id='about' className='w-full p-2 flex items-center xl:pt-[20rem] xl:pb-[10rem]'>
            <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
                <div className='col-span-2'>
                    <p className='uppercase text-xl tracking-widest py-4 text-lite-blue'>About</p>
                    <p className='py-2 text-gray-600'>
                        I earned a certificate in Full-Stack Web Development from the University of Miami in order
                        to develop proficiency in technologies like JS/TS using Next.js with React,
                        CSS via Tailwind and Bulma, HTML, as well as SQL and NoSQL while using ODMs like Sequelize and Mongoose.js.
                        I practiced operating in Agile team development frameworks, Git flow, data containerization, and more.
                    </p>
                    <p className='py-2 text-gray-600'>
                        I&apos;m seeking a hybrid/remote, cloud-based position that facilitates global collaboration and meaningful contribution.
                        I enjoy cross-functional group efforts to meet goals and I like to over-deliver on client expectations.
                        My current project is a social media site designed to help musicians get jobs within the
                        music industry by providing shareable profiles and leveraging investments through ISA agreements.
                    </p>
                    <p className='py-2 text-gray-600 underline cursor-pointer'> Check out some of my latest projects </p>
                </div>
                <div className='w-full h-auto m-auto shadow-xl bg-white shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300 border border-black/5'>
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