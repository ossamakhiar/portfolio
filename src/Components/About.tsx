import technologies from "../data/techs.json"


const About = () => {

    return (
        <div className="items-center mx-auto mb-10 max-w-7xl">
            <h1 className='mb-10 font-bold text-5xl text-center text-gray-900 dark:text-white'>About me</h1>
            <p className='mx-4 font-basic font-medium text-gray-900 text-md md:text-xl dark:text-white'>
                I am a passionate software engineering student at 1337 School, deeply engaged in developing my skills and contributing to 
                various projects across my curriculum. My journey involves leveraging the power of C/C++ and Node.js to address 
                a diverse range of challenges. From the intricacies of UNIX programming to the elegance of data structures and algorithms, 
                I delve into multifaceted domains with enthusiasm. My explorations extend to the vibrant world of web development and mastering tools like Express.js. Additionally, I am delving into the realm of Docker, 
                seeking to broaden my understanding of containerization and its impact on modern software deployment practices.
                <a href="/about" className="font-semibold text-blue-500 hover:text-blue-800 cursor-pointer"> Read more.</a>
            </p>

            <h1 className="mx-4 mt-5 mb-4 font-semibold text-2xl text-blue-500 underline">Technologies:</h1>
            <div className="gap-4 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 mx-4">

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
            {/* <div className="flex justify-center items-center mt-5">
                <button className="flex items-center bg-blue-500 hover:bg-blue-700 dark:hover:bg-blue-700 dark:bg-blue-600 px-4 py-2 rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold text-white">
                    Explore more
                    <IoArrowForward  />
                </button>
            </div> */}
        </div>
    )
};

export default About;