import Image from 'next/image'

const Skills = () => {

    const imageArr = [
        { src: "/../public/assets/html.png", alt: "The HTML5 logo", h3: "HTML5" },
        { src: "/../public/assets/css.png", alt: "The CSS3 logo", h3: "CSS3", width: "80", height: "80" },
    ]

    return (
        <div className='w-full lg:h-screen p-2'>
            <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
                <p className='text-xl tracking-widest uppercase text-[#059ae6]'>Skills</p>
                <h2 className='py-4'>I&apos;m Experienced In</h2>
                <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
                    {imageArr.map((index) => { 
                    return(
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300' key={index}>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image key={index} src={index.src} alt={index.alt} width={index.width || "64"} height={index.height || "64"} />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3 key={index}>{index.h3}</h3>
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

// first I want to define a template to be reproduced, and define an array that contains the chanign info
// in a for loop, read first piece of infomraiton in imageArr and return a template to imageSpace with the first bit of info in the

