import React from 'react'
import Image from 'next/image'
import bgImg from '../public/assets/whitewall2.jpg'

const Background = () => {

    return (
        <div className='fixed h-screen w-full -z-10'>
            <Image
                src={bgImg}
                alt='A white wall textured by a putty knife resembling the walls of a house in Santorini'
                fill
                className='object-cover'
            />
        </div>
    )

}

export default Background