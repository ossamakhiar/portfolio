import technologies from "../data/techs.json"


const About = () => {

    return (
        <div className="max-w-7xl mx-auto items-center">
            <h1 className='text-5xl font-bold text-center mb-3 text-gray-900 dark:text-white'>About me</h1>
            <p className='text-md md:text-xl  text-gray-900 dark:text-white font-medium font-basic mx-4'>
                I am a passionate software engineering student at 1337 School, deeply engaged in developing my skills and contributing to 
                various projects across my curriculum. My journey involves leveraging the power of C/C++ and Node.js to address 
                a diverse range of challenges. From the intricacies of UNIX programming to the elegance of data structures and algorithms, 
                I delve into multifaceted domains with enthusiasm. My explorations extend to the vibrant world of web development and mastering tools like Express.js. Additionally, I am delving into the realm of Docker, 
                seeking to broaden my understanding of containerization and its impact on modern software deployment practices.
                <a className="cursor-pointer text-blue-500 hover:text-blue-800"> Read more.</a>
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-5 mx-4">

                {technologies.map((tech) => {
                    return (
                        <a key={tech.id} href={tech.link} target="_blank" className="hover:scale-105 transition ease-in-out duration-300">
                            <div className="flex gap-3 items-center">
                                <div className="flex h-[60px] w-[60px] items-center justify-center rounded-full bg-cyan-800">
                                    <img src={tech.img_src} alt={tech.title.toLowerCase().replace(" ", "_")} width="30" height="30"/>
                                </div>
                                <h2 className="text-gray-900 dark:text-gray-100 text-lg">{tech.title}</h2>
                            </div>
                        </a>
                    );
                })}
            </div>
            {/* <div className="flex items-center justify-center mt-5">
                <button className="flex items-center bg-blue-500 rounded-lg hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 text-white font-bold py-2 px-4">
                    Explore more
                    <IoArrowForward  />
                </button>
            </div> */}
        </div>
    )
};

export default About;