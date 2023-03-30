import React from 'react'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'
import { AiOutlineMail } from 'react-icons/ai'
import { BsFillPersonLinesFill } from 'react-icons/bs'

const Main = () => {
    return (
        <div className='gf:pt-[45vh] xxs:pt-[31vh] xs:pt-[15vh] pt-0 w-full h-screen text-center z-0'>
            <div className='w-full h-full mx-auto flex justify-center items-center absolute'>
                <div>
                    <p className='uppercase text-sm tracking-widest text-gray-600'>Let&apos;s build something together.</p>
                    <h1 className='py-4 text-gray-700'>
                        Hi, I&apos;m <span className='text-[#059ae6]'>Dr. Locke</span>
                    </h1>
                    <h1 className='py-2 text-gray-700'>
                        A Full-Stack Web Developer
                    </h1>
                    <p className='py-4 text-gray-600 gf:max-w-[95%] xxs:max-w-[85%] xs:max-w-[83%] md:max-w-[70%] lg:max-w-[70%] m-auto'>
                        I&apos;m a web developer pivoting from a background in Cello Performance in order to create practical,
                        efficient programming solutions for companies and commercial music artists.
                        I&apos;m often appointed as a project leader by management to spearhead team initiatives that need to satisfy short deadlines,
                        while preserving technical quality and excruciating attention to detail.
                        <br />
                        <br />
                        I earned a certificate in Full-Stack Web Development from the University of Miami in order
                        to develop proficiency in technologies like JS/TS using Next.js with React,
                        CSS via Tailwind and Bulma, HTML, as well as SQL and NoSQL while using ODMs like Sequelize and Mongoose.js.
                        I practiced operating in Agile team development frameworks, Git flow, data containerization, and more.
                        <br />
                        <br />
                        I&apos;m seeking a hybrid/remote, cloud-based position that facilitates global collaboration and meaningful contribution.
                        I enjoy cross-functional group efforts to meet goals and I like to over-deliver on client expectations.
                        My current project is a social media site designed to help musicians get jobs within the
                        music industry by providing shareable profiles and leveraging investments through ISA agreements.
                    </p>
                    <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
                        <div className='rounded-full shadow-lg shadow-gray-300 p-6 cursor-pointer hover:scale-105 ease-in duration-300 border border-black/5'>
                            <FaLinkedinIn />
                        </div>
                        <div className='rounded-full shadow-lg shadow-gray-300 p-6 cursor-pointer hover:scale-105 ease-in duration-300 border border-black/5'>
                            <FaGithub />
                        </div>
                        <div className='rounded-full shadow-lg shadow-gray-300 p-6 cursor-pointer hover:scale-105 ease-in duration-300 border border-black/5'>
                            <AiOutlineMail />
                        </div>
                        <div className='rounded-full shadow-lg shadow-gray-300 p-6 cursor-pointer hover:scale-105 ease-in duration-300 border border-black/5'>
                            <BsFillPersonLinesFill />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main