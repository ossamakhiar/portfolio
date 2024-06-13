import technologies from "../data/techs.json"

const AboutPage = () => {

    return (
        <>
            <div className="flex flex-col justify-center items-center my-6 px-2">
                {/* <h1 className='mb-5 font-semibold text-5xl text-center text-gray-900 dark:text-white'>About me</h1> */}
                <div className="items-center mx-auto mt-10 max-w-7xl" id="section-about">
                    <div className="flex md:flex-row flex-col items-center gap-4">
                        <a href="https://github.com/ossamakhiar" className="flex-grow md:w-2/5">
                            <img src="/okhiar.jpeg" alt="okhiar" className="rounded-full"/>
                        </a>
                        <p className='flex-grow mx-3 md:w-3/5 font-basic font-medium text-gray-900 text-md md:text-xl dark:text-white'>
                            I'm an enthusiastic student of software engineering enrolled at 1337 School, fully immersed in honing my craft and actively 
                            contributing to a variety of projects within my curriculum. My educational journey revolves around harnessing the capabilities 
                            of C/C++ and Node.js to tackle a wide array of challenges. From navigating the complexities of UNIX programming to embracing 
                            the beauty of data structures and algorithms, I eagerly explore diverse domains. My interests also extend into the dynamic 
                            realm of web development, where I'm using tools like Express.js. Furthermore, I'm venturing into the world of Docker to 
                            deepen my understanding of containerization and its significance in modern software deployment methodologies.
                        </p>
                    </div>

                    <h1 className="my-8 font-semibold text-3xl text-center dark:text-white">Skills</h1>
                    <div className="gap-4 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 mx-4 mt-5">

                        {technologies.map((tech) => {
                            return (
                                <a key={tech.id} href={tech.link} target="_blank" className="hover:scale-105 transition duration-300 ease-in-out">
                                    <div className="flex items-center gap-3">
                                        <div className="flex justify-center items-center bg-cyan-800 rounded-full w-[60px] h-[60px]">
                                            <img src={tech.img_src} alt={tech.title.toLowerCase().replace(" ", "_")} width="30" height="30"/>
                                        </div>
                                        <h2 className="text-gray-900 text-lg dark:text-gray-100">{tech.title}</h2>
                                    </div>
                                </a>
                            );
                        })}
                    </div>
                </div>
                    {/* Experience Timeline */}
                    {/* <div className="container">
                        <h1 className="mb-8 font-semibold text-3xl text-center dark:text-white">Professional Experiences</h1>
                        <div className="mx-auto max-w-md">
                            <p className="font-bold dark:text-white">Seeking...</p>
                        </div>
                    </div> */}
            </div>
        </>
    )
}

export default AboutPage;