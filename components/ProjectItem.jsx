import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const ProjectItem = ({ title, alt, tech, bgImg, projectURL }) => {
    return (
        <div className='bg-white border hover:bg-gradient-to-r from-[#04348B] to-[#0854e2d0] relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-200 rounded-xl p-4 group'>
            <Image src={bgImg} alt={alt} className='rounded-xl group-hover:opacity-10' />
            <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                <h3 className='text-2xl text-white tracking-wider text-center'>{title}</h3>
                <p className='pb-4 pt-2 text-white text-center'>{tech}</p>
                <Link href={projectURL}>
                    <p className='text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg'>More Info</p>
                </Link>
            </div>
        </div>

    )
}

export default ProjectItem