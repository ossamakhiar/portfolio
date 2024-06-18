import { FC, useEffect, useRef } from "react";
import projects from "../data/projects.json"
import { BsGithub } from "react-icons/bs";
import { Link } from "react-router-dom";

interface ProjectsProps {
    listAllProjects: boolean;
}


const Projects: FC<ProjectsProps> = ({listAllProjects}) => {
    const targetsRef = useRef<Element[]>([]);

    // console.log(listAllProjects);

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            // console.log(entries.length)
            entries.forEach(entry => {

                if (entry.isIntersecting)
                    entry.target.classList.add('opacity-100');
                else
                    entry.target.classList.remove('opacity-100');
            });
        }, { threshold: 0.5 });


        // console.log(targetsRef);
        targetsRef.current.forEach(target => {
            // console.log(target);
            observer.observe(target);
        });

        return () => {
            console.log("unmount");
            observer.disconnect();
        };
    }, []);



    return (
        <div className="mx-auto my-6 lg:max-w-7xl">
            <h1 className='mb-10 font-bold text-5xl text-center text-gray-900 dark:text-white'>Projects</h1>
            
            {/* <div className="flex justify-center"> */}
            <div className="items-center gap-4 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-4">
                {projects.reverse()
                    .slice(0, (listAllProjects ? projects.length : 9))
                    .map((project) => {
                        return (
                            // redundant check
                        <div key={project.id} ref={el => el && !targetsRef.current.find((elem) => elem === el) && targetsRef.current.push(el)} className="border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 opacity-0 shadow border rounded-lg sm:w-full md:max-w-sm transition-opacity duration-1000 ease-in-out">
                            {/* <a href={`/projects/${project.id}`}> */}
                                <img className="rounded-t-lg object-cover" src={project.img} alt="" />
                            {/* </a> */}
                            <div className="p-5">
                                <Link to={`/projects/${project.id}`}>
                                    <h5 className="mb-2 font-bold text-2xl text-gray-900 dark:text-white tracking-tight">{project.title}</h5>
                                </Link>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{(project.content.length <= 105 ? project.content : project.content.substring(0, 100) + "...")}</p>

                                <div className="flex justify-between items-center mt-4">
                                    <a href={project.sourceCodeLink} className="px-3 py-2 text-sm hover:scale-105 flex gap-2 border-gray-900 dark:border-white border rounded-md transition duration-300">
                                        <BsGithub size={20} className="dark:fill-white fill-black"/>
                                        <p className="font-semibold dark:text-white">source code</p>
                                    </a>
                                    <Link to={`/projects/${project.id}`} className="inline-flex items-center bg-blue-700 hover:bg-blue-800 dark:hover:bg-blue-700 dark:bg-blue-600 px-3 py-2 rounded-lg font-medium text-center text-sm text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                                        Read more
                                        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        )
                })}
            {/* </div> */}
            </div>
        </div>
    )

};

export default Projects;