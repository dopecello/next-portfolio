import React from 'react'
import weatherApp from '../public/assets/weatherapp.png'
import firesale from '../public/assets/firesale-final.png'
import ProjectItem from './ProjectItem'

const Projects = () => {

    const projItemArr = [
        { title: "OpenWeather API Forecast Checker", alt: "Weather Forecasting Application", tech: "JavaScript, Bulma", bgImg: weatherApp, projectURL: "https://dopecello.github.io/weather-app/", githubURL: "https://github.com/dopecello/weather-app" },
        { title: "SupaHot Online Marketplace", alt: "SupaHot Online Marketplace", tech: "CRA, GraphQL, MongoDB", bgImg: firesale, projectURL: "https://supa-hot-firesales.herokuapp.com/", githubURL: "https://github.com/brian-gee/supa-hot-firesale" },
    ]

    return (
        <div id='projects' className='w-full xl:pt-[13rem] xl:pb-[5rem]'>
            <div className='max-w-[1240px] mx-auto px-2 pt-10 pb-10'>
                <p className='text-xl tracking-widest uppercase py-6 text-lite-blue'>Projects</p>
                <div className='grid md:grid-cols-2 gap-8'>
                    {projItemArr.map((index) => {
                        return (
                            <ProjectItem key={index}
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
