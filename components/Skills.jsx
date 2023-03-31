import Image from 'next/image'

const Skills = () => {

    const imageArr = [
        { src: "/../public/assets/html-square.png", alt: "The HTML5 logo", h3: "HTML5"},
        { src: "/../public/assets/css3-square.png", alt: "The CSS3 logo", h3: "CSS3"},
        { src: "/../public/assets/js.png", alt: "The JavaScript logo", h3: "JavaScript"},
        { src: "/../public/assets/ts.png", alt: "The TypeScript logo", h3: "TypeScript"},
        { src: "/../public/assets/react-square.png", alt: "The React.js logo", h3: "React"},
        { src: "/../public/assets/nextjs.png", alt: "The Next.js logo", h3: "Next"},
        { src: "/../public/assets/node-transformed.png", alt: "The Node.js logo", h3: "Node"},
        { src: "/../public/assets/gcp.png", alt: "The Google Cloud Platform logo", h3: "GCP"},
        { src: "/../public/assets/tailwind.png", alt: "The Tailwind CSS logo", h3: "Tailwind"},
        { src: "/../public/assets/bulma.png", alt: "The Bulma logo", h3: "Bulma"},
        { src: "/../public/assets/mui.png", alt: "The Material UI logo", h3: "Material UI"},
        { src: "/../public/assets/firebase-transformed.png", alt: "The Firebase logo", h3: "Firebase"},
        { src: "/../public/assets/mysql-transformed.png", alt: "The MySQL logo", h3: "MySQL"},
        { src: "/../public/assets/sqlize-resize.png", alt: "The Sequelize ORM logo", h3: "Sequelize"},
        { src: "/../public/assets/mongo.png", alt: "The MongoDB logo", h3: "Mongo"},
        { src: "/../public/assets/mongoose.png", alt: "The Mongoose ODM logo", h3: "Mongoose"},
    ]

    return (
        <div className='w-full lg:h-screen p-2 pt-10'>
            <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
                <p className='text-xl tracking-widest uppercase text-[#059ae6]'>Skills</p>
                <h2 className='py-4'>I&apos;m Experienced In</h2>
                <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
                    {imageArr.map((index) => { 
                    return(
                    <div className='p-6 shadow-lg rounded-xl hover:scale-105 ease-in duration-300 border border-black/5' key={index}>
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

