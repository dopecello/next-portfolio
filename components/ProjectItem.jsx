import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { BsGithub } from 'react-icons/bs'
import { BiLinkExternal } from 'react-icons/bi'

const ProjectItem = ({ title, alt, tech, bgImg, projectURL, githubURL }) => {
    return (
        <div className='border border-black/20 relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-200 rounded-xl group transition bg-white hover:bg-[#001f54] duration-300'>
            <Image src={bgImg} alt={alt} className='rounded-xl group-hover:opacity-10' />
            <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                <h3 className='lg:text-2xl text-[13px] xxs:text-lg xs:text-lg sm:text-lg text-white tracking-wider text-center'>{title}</h3>
                <p className='pb-4 pt-2 text-xs xxs:text-sm xs:text-sm sm:text-sm lg:text-sm text-white text-center'>{tech}</p>
                <div className='flex justify-center gap-6'>
                    <div className='bg-slate-100 p-1 sm:p-2 rounded-full cursor-pointer transition hover:bg-lite-blue hover:text-slate-100 duration-100'>
                        <Link href={githubURL} title='GitHub Repo' target='_blank' rel='noopener noreferrer'>
                            <BsGithub size={20} className='xxs:hidden xs:hidden sm:hidden' />
                            <BsGithub size={30} className='hidden xxs:block xs:block sm:block'/>
                        </Link>
                    </div>
                    <div className='bg-slate-100 p-1 sm:p-2 rounded-full cursor-pointer transition hover:bg-lite-blue hover:text-slate-100 lg:hover:scale-105 ease-in duration-[0ms]'>
                        <Link href={projectURL} title='Deployed Project' target='_blank' rel='noopener noreferrer'>
                            <BiLinkExternal size={20} className='xxs:hidden xs:hidden sm:hidden' />
                            <BiLinkExternal size={30} className='hidden xxs:block xs:block sm:block' />
                        </Link>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ProjectItem
