import React from 'react'
import samf from '../public/static/images/samf-site.png'
import ProjectItem from './ProjectItem'
import mealfind from '../public/static/images/mealfind.png'
import tictac from '../public/static/images/tictactoe.png'
import  deepThoughts from '../public/static/images/deepthoughts-sized.png'

const Projects = () => {

    const projItemArr = [
        { title: "Deep Thoughts", alt: "Deep Thoughts Social Media", tech: "MERN Stack, GraphQL, Bootstrap", bgImg: deepThoughts, projectURL: "https://mysterious-hollows-06431.herokuapp.com/", githubURL: "https://github.com/dopecello/deep-thoughts", id: 1 },
        { title: "MealFind", alt: "MealFind", tech: "TypeScript, Next.js, Prisma, PostgreSQL", bgImg: mealfind, projectURL: "https://meal-find.vercel.app", githubURL: "https://github.com/dopecello/meal-find", id: 3 },
        { title: "Tic-Tac-Toe", alt: "Tic-Tac-Toe", tech: "JavaScript, Vite, TailwindCSS", bgImg: tictac, projectURL: "https://gg-tictactoe.netlify.app/", githubURL: "https://github.com/dopecello/gg-tictactoe", id: 4 },
        { title: "Saint Augustine Music Festival", alt: "Saint Augustine Music Festival", tech: "Astro.js, TypeScript, MDX", bgImg: samf, projectURL: "https://samf-site.vercel.app/", githubURL: "https://github.com/dopecello/samf-site", id: 2 },
    ]

    return (
        <div id='projects' className='w-full xl:pt-[13rem] xl:pb-[5rem]'>
            <div className='max-w-[1240px] mx-auto px-2 pt-10 pb-10'>
                <p className='text-xl tracking-widest uppercase py-6 text-lite-blue'>Projects</p>
                <div className='grid md:grid-cols-2 gap-8'>
                    {projItemArr.map((index) => {
                        return (
                            <ProjectItem key={index.id}
                                title={index.title}
                                alt={index.alt}
                                tech={index.tech}
                                bgImg={index.bgImg}
                                githubURL={index.githubURL}
                                projectURL={index.projectURL}
                            />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Projects
