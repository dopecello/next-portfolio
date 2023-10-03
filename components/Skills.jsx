import Image from 'next/image'
import React from 'react'
import html5logo from '../public/static/images/html-square.png'
import css3logo from '../public/static/images/css3-square.png'
import jslogo from '../public/static/images/js.png'
import tslogo from '../public/static/images/ts.png'
import reactlogo from '../public/static/images/react-square.png'
import nextjslogo from '../public/static/images/nextjs.png'
import nodejslogo from '../public/static/images/node-transformed.png'
import gcplogo from '../public/static/images/gcp.png'
import tailwindlogo from '../public/static/images/tailwind.png'
import bulmalogo from '../public/static/images/bulma.png'
import firebaselogo from '../public/static/images/firebase-transformed.png'
import graphqlLogo from '../public/static/images/gql.png'
import mysqlLogo from '../public/static/images/mysql-transformed.png'
import sqlizeLogo from '../public/static/images/sqlize-resize.png'
import mongoLogo from '../public/static/images/mongo.png'
import mongooselogo from '../public/static/images/mongoose.png'
import astroLogo from '../public/static/images/astro.png'
import javaLogo from '../public/static/images/javalogo.png'
import cSharpLogo from '../public/static/images/csharp.png'
import svelte from '../public/static/images/svelte.png'

const Skills = () => {

    const imageArr = [
        { src: html5logo, alt: "The HTML5 logo", h3: "HTML5", id: 1 },
        { src: css3logo, alt: "The CSS3 logo", h3: "CSS3", id: 2 },
        { src: jslogo, alt: "The JavaScript logo", h3: "JavaScript", id: 3 },
        { src: tslogo, alt: "The TypeScript logo", h3: "TypeScript", id: 4 },
        { src: reactlogo, alt: "The React.js logo", h3: "React", id: 5 },
        { src: nextjslogo, alt: "The Next.js logo", h3: "Next", id: 6 },
        { src: astroLogo, alt: "The Astro.js logo", h3: "Astro", id: 7 },
        { src: svelte, alt: "The Svelte.js logo", h3: "Svelte", id: 9 },
        { src: nodejslogo, alt: "The Node.js logo", h3: "Node", id: 9 },
        { src: gcplogo, alt: "The Google Cloud Platform logo", h3: "GCP", id: 10 },
        { src: tailwindlogo, alt: "The Tailwind CSS logo", h3: "Tailwind", id: 11 },
        { src: bulmalogo, alt: "The Bulma logo", h3: "Bulma", id: 12 },
        { src: javaLogo, alt: "The Java logo", h3: "Java", id: 13 },
        { src: cSharpLogo, alt: "The C-Sharp logo", h3: 'C#', id: 14 },
        { src: firebaselogo, alt: "The Firebase logo", h3: "Firebase", id: 15 },
        { src: graphqlLogo, alt: "The Graph QL logo", h3: "GraphQL", id: 16 },
        { src: mysqlLogo, alt: "The MySQL logo", h3: "MySQL", id: 17 },
        { src: sqlizeLogo, alt: "The Sequelize ORM logo", h3: "Sequelize", id: 18 },
        { src: mongoLogo, alt: "The MongoDB logo", h3: "Mongo", id: 19 },
        { src: mongooselogo, alt: "The Mongoose ODM logo", h3: "Mongoose", id: 20 },
        // {src: "/../public/static/images/mui.png", alt: "The Material UI logo", h3: "Material UI"},
    ]

    return (
        <div id='skills' className='max-w-[95%] xl:h-screen py-9 px-6 mx-auto xl:pt-[20rem] xl:pb-[19rem]'>
            <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
                <p className='text-xl tracking-widest uppercase text-lite-blue py-6'>Skills</p>
                <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
                    {imageArr.map((index) => {
                        return (
                            <div className='p-6 shadow-lg rounded-xl lg:hover:scale-105 ease-in duration-300 border border-black/20 bg-white' key={index.id}>
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

