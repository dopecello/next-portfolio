import Image from 'next/image'
import React from 'react'

const Skills = () => {

    const imageArr = [
        {src: "/../public/static/images/html-square.png", alt: "The HTML5 logo", h3: "HTML5", id: 1},
        {src: "/../public/static/images/css3-square.png", alt: "The CSS3 logo", h3: "CSS3", id: 2},
        {src: "/../public/static/images/js.png", alt: "The JavaScript logo", h3: "JavaScript", id: 3},
        {src: "/../public/static/images/ts.png", alt: "The TypeScript logo", h3: "TypeScript", id: 4},
        {src: "/../public/static/images/react-square.png", alt: "The React.js logo", h3: "React", id: 5},
        {src: "/../public/static/images/nextjs.png", alt: "The Next.js logo", h3: "Next", id: 6},
        {src: "/../public/static/images/node-transformed.png", alt: "The Node.js logo", h3: "Node", id: 7},
        {src: "/../public/static/images/gcp.png", alt: "The Google Cloud Platform logo", h3: "GCP", id: 8},
        {src: "/../public/static/images/tailwind.png", alt: "The Tailwind CSS logo", h3: "Tailwind", id: 9},
        {src: "/../public/static/images/bulma.png", alt: "The Bulma logo", h3: "Bulma", id: 10},
        {src: "/../public/static/images/firebase-transformed.png", alt: "The Firebase logo", h3: "Firebase", id: 11},
        {src: "/../public/static/images/gql.png", alt: "The Graph QL logo", h3: "GraphQL", id: 12},
        {src: "/../public/static/images/mysql-transformed.png", alt: "The MySQL logo", h3: "MySQL", id: 13},
        {src: "/../public/static/images/sqlize-resize.png", alt: "The Sequelize ORM logo", h3: "Sequelize", id: 14},
        {src: "/../public/static/images/mongo.png", alt: "The MongoDB logo", h3: "Mongo", id: 15},
        {src: "/../public/static/images/mongoose.png", alt: "The Mongoose ODM logo", h3: "Mongoose", id: 16},
        // {src: "/../public/static/images/mui.png", alt: "The Material UI logo", h3: "Material UI"},
    ]

    return (
        <div id='skills' className='w-full xl:h-screen py-9 px-2 xl:pt-[20rem] xl:pb-[19rem]'>
            <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
                <p className='text-xl tracking-widest uppercase text-lite-blue py-6'>Skills</p>
                <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
                    {imageArr.map((index) => { 
                    return(
                    <div className='p-6 shadow-lg rounded-xl hover:scale-105 ease-in duration-300 border border-black/20 bg-white' key={index.id}>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image src={index.src} alt={index.alt} width="82" height="82" />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>{index.h3}</h3>
                            </div>
                        </div>
                    </div>
                    )
                })}
                </div>
            </div>
        </div>
    )
}

export default Skills

