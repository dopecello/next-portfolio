import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaExternalLinkAlt, FaGithubSquare } from 'react-icons/fa'

const ProjectItem = ({ title, alt, tech, bgImg, projectURL, githubURL }) => {
    return (
        <div className='border border-black/20 relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-200 rounded-xl group transition bg-white hover:bg-[#001f54] duration-300'>
            <Image src={bgImg} alt={alt} className='rounded-xl group-hover:opacity-10' />
            <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                <h3 className='text-2xl text-white tracking-wider text-center'>{title}</h3>
                <p className='pb-4 pt-2 text-white text-center'>{tech}</p>
                <div className='flex justify-center gap-6'>
                    <div className='rounded-full shadow-lg bg-slate-100 p-4 cursor-pointer transition hover:bg-lite-blue hover:text-slate-100 lg:hover:scale-105 ease-in duration-75'>
                        <Link href={githubURL} title='GitHub Repo' target='_blank' rel='noopener noreferrer'>
                            <FaGithubSquare size={30} />
                        </Link>
                    </div>
                    <div className='rounded-full shadow-lg bg-slate-100 p-4 cursor-pointer transition hover:bg-lite-blue hover:text-slate-100 lg:hover:scale-105 ease-in duration-[0ms]'>
                        <Link href={projectURL} title='Deployed Project' target='_blank' rel='noopener noreferrer'>
                            <FaExternalLinkAlt size={30} />
                        </Link>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ProjectItem

//I want to add the FaGithubSquare icon and FaExternalLinkAlt