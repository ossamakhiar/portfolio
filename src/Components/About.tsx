
const About = () => {

    return (
        <div className="about  max-w-7xl mx-auto">
            <h1 className='text-5xl font-bold text-center mb-3 text-gray-900 dark:text-white'>About me</h1>
            <p className='text-2xl  text-gray-900 dark:text-white font-medium'>
            I am a passionate software engineering student at 1337 School, deeply engaged in developing my skills and contributing to 
            various projects across my curriculum. My journey involves leveraging the power of C/C++ and Node.js to address 
            a diverse range of challenges. From the intricacies of UNIX programming to the elegance of data structures and algorithms, 
            I delve into multifaceted domains with enthusiasm. My explorations extend to the vibrant world of web development and mastering tools like Express.js. Additionally, I am delving into the realm of Docker, 
            seeking to broaden my understanding of containerization and its impact on modern software deployment practices.
            </p>
            <p className="flex justify-between mt-5">
                {/* set all those in a file */}
                <a href="https://www.linux.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg" alt="linux" width="50" height="50"/> </a>
                <a href="https://www.cprogramming.com/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg" alt="c" width="50" height="50"/> </a> 
                <a href="https://www.w3schools.com/cpp/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg" alt="cplusplus" width="50" height="50"/></a>
                <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="50" height="50"/> </a>
                <a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" alt="typescript" width="50" height="50"/> </a> 
                <a href="https://nodejs.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="50" height="50"/> </a>
                <a href="https://expressjs.com" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" alt="express" width="50" height="50"/> </a>
                <a href="https://www.postgresql.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg" alt="postgresql" width="50" height="50"/> </a>
                <a href="https://www.docker.com/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg" alt="docker" width="50" height="50"/> </a>
                <a href="https://reactjs.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="50" height="50"/> </a>
            </p>
        </div>
    )

};

export default About;