import technologies from "../../data/techs.json"

const AboutPage = () => {

    return (
        <>
            <div className="flex justify-center flex-col items-center">
                <h1 className='text-5xl font-semibold text-center text-gray-900 dark:text-white mb-5'>About me</h1>
                <a href="https://github.com/ossamakhiar" className="badge">
                    <img src="https://badge.mediaplus.ma/darkblue/okhiar" alt="okhiar" />
                </a>
                <div className="max-w-7xl mx-auto items-center mt-10" id="section-about">
                    <p className='text-md md:text-xl  text-gray-900 dark:text-white font-medium font-basic mx-4'>
                    I'm an enthusiastic student of software engineering enrolled at 1337 School, fully immersed in honing my craft and actively 
                    contributing to a variety of projects within my curriculum. My educational journey revolves around harnessing the capabilities 
                    of C/C++ and Node.js to tackle a wide array of challenges. From navigating the complexities of UNIX programming to embracing 
                    the beauty of data structures and algorithms, I eagerly explore diverse domains. My interests also extend into the dynamic 
                    realm of web development, where I'm using tools like Express.js. Furthermore, I'm venturing into the world of Docker to 
                    deepen my understanding of containerization and its significance in modern software deployment methodologies.
                    </p>

                    <h1 className="text-3xl font-semibold mb-8 text-center  dark:text-white">Skills</h1>
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
                </div>
                <div className="container mx-auto py-8">
                    <h1 className="text-3xl font-semibold mb-8 text-center dark:text-white">Education Timeline</h1>
                    <div className="max-w-md mx-auto">
                        {/* Timeline Item 1 */}
                        <div className="relative">
                            <div className="border-l-2 border-gray-300  absolute h-full top-0 -left-5"></div>
                            <div className="bg-white dark:bg-slate-500 rounded-lg shadow-lg dark:shadow-slate-600 p-6 mb-6">
                                <h3 className="text-xl font-semibold mb-2 dark:text-gray-900">Bachelor's Degree</h3>
                                <p className="text-gray-600 dark:text-gray-900">University of Example</p>
                                <p className="text-gray-600 dark:text-gray-900">2010 - 2014</p>
                            </div>
                        </div>
                            {/* Timeline Item 2 */}
                        <div className="relative">
                            <div className="border-l-2 border-gray-300  absolute h-full top-0 -left-5"></div>
                            <div className="bg-white dark:bg-slate-500 rounded-lg shadow-lg dark:shadow-slate-600 p-6 mb-6">
                                <h3 className="text-xl font-semibold mb-2 dark:text-gray-900">Bachelor's Degree</h3>
                                <p className="text-gray-600 dark:text-gray-900">University of Example</p>
                                <p className="text-gray-600 dark:text-gray-900">2010 - 2014</p>
                            </div>
                        </div>
                            {/* Timeline Item 3 */}
                        <div className="relative">
                            <div className="border-l-2 border-gray-300  absolute h-full top-0 -left-5"></div>
                            <div className="bg-white dark:bg-slate-500 rounded-lg shadow-lg dark:shadow-slate-600 p-6 mb-6">
                                <h3 className="text-xl font-semibold mb-2 dark:text-gray-900">Bachelor's Degree</h3>
                                <p className="text-gray-600 dark:text-gray-900">University of Example</p>
                                <p className="text-gray-600 dark:text-gray-900">2010 - 2014</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutPage;