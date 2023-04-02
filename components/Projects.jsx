import React from 'react'
import weatherApp from '../public/assets/weatherapp.png'
import firesale from '../public/assets/firesale-final.png'
import ProjectItem from './ProjectItem'

const Projects = () => {

    const projItemArr = [
        {title: "OpenWeather API Forecast Checker", alt: "Weather Forecasting Application", tech: "Next.js", bgImg: weatherApp, projectURL: "https://dopecello.github.io/weather-app/"},
        {title: "SupaHot Online Marketplace", alt: "SupaHot Online Marketplace", tech: "CRA, GraphQL, MongoDB", bgImg: firesale, projectURL: "https://supa-hot-firesales.herokuapp.com/"}, 
    ]

    return (
        <div id='projects' className='w-full'>
            <div className='max-w-[1240px] mx-auto px-2 pt-10 pb-16'>
                <p className='text-xl tracking-widest uppercase text-lite-blue'>Projects</p>
                <h2 className='py-4'>What I Have Built:</h2>
                <div className='grid md:grid-cols-2 gap-8'>
                    {projItemArr.map((index) => {
                        return (
                            <ProjectItem key={index}
                                title={index.title}
                                alt={index.alt}
                                tech={index.tech}
                                bgImg={index.bgImg}
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