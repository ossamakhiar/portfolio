
const About = () => {
    const technologies = [
        {
            id: 1, title: "C++", 
            img_src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg",
            link: "#"
        },
        {
            id: 3, title: "JavaScript", 
            img_src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
            link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
        },
        {
            id: 4, title: "TypeScript", 
            img_src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
            link: "https://www.typescriptlang.org/"
        },
        {
            id: 5, title: "Node.js",
            img_src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg",
            link: "https://nodejs.org"
        },
        {
            id: 6, title: "Express JS",
            img_src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg",
            link: "https://expressjs.com"
        },
        {
            id: 7, title: "Postgresql",
            img_src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg",
            link: "https://www.postgresql.org"
        },
        {
            id: 8, title: "Docker",
            img_src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg",
            link: "https://www.docker.com/"
        },
        {
            id: 9, title: "React JS",
            img_src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg",
            link: "https://reactjs.org/"
        },
    ]


    return (
        <div className="max-w-7xl mx-auto">
            <h1 className='text-5xl font-bold text-center mb-3 text-gray-900 dark:text-white'>About me</h1>
            <p className='text-2xl  text-gray-900 dark:text-white font-medium font-basic'>
                I am a passionate software engineering student at 1337 School, deeply engaged in developing my skills and contributing to 
                various projects across my curriculum. My journey involves leveraging the power of C/C++ and Node.js to address 
                a diverse range of challenges. From the intricacies of UNIX programming to the elegance of data structures and algorithms, 
                I delve into multifaceted domains with enthusiasm. My explorations extend to the vibrant world of web development and mastering tools like Express.js. Additionally, I am delving into the realm of Docker, 
                seeking to broaden my understanding of containerization and its impact on modern software deployment practices.
            </p>
            {/* <p className="flex justify-between mt-5">
                <a href="https://www.linux.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg" alt="linux" width="50" height="50"/> </a>
                <a href="https://www.cprogramming.com/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg" alt="c" width="50" height="50"/> </a> 
                <a href="https://www.w3schools.com/cpp/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg" alt="cplusplus" width="50" height="50"/></a>
                <a href="" target="_blank" rel="noreferrer"> <img src="" alt="javascript" width="50" height="50"/> </a>
                <a href="" target="_blank" rel="noreferrer"> <img src="" alt="typescript" width="50" height="50"/> </a> 
                <a href="https://nodejs.org" target="_blank" rel="noreferrer"> <img src="" alt="nodejs" width="50" height="50"/> </a>
                <a href="https://expressjs.com" target="_blank" rel="noreferrer"> <img src="" alt="express" width="50" height="50"/> </a>
                <a href="https://www.postgresql.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg" alt="postgresql" width="50" height="50"/> </a>
                <a href="https://www.docker.com/" target="_blank" rel="noreferrer"> <img src="" alt="docker" width="50" height="50"/> </a>
                <a href="https://reactjs.org/" target="_blank" rel="noreferrer"> <img src="" alt="react" width="50" height="50"/> </a>
            </p> */}

            <div className="grid grid-cols-4 gap-4 mt-5">

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
    )

};

export default About;