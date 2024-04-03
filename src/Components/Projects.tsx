import { useEffect, useRef } from "react";
import projects from "../data/projects.json"
import img from "../assets/netpractice.jpg"


const Projects = () => {
    const targetsRef = useRef<Element[]>([]);

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            console.log(entries.length)
            entries.forEach(entry => {

                if (entry.isIntersecting)
                    entry.target.classList.add('opacity-100');
                else
                    entry.target.classList.remove('opacity-100');
            });
        }, { threshold: 0.5 });


        console.log(targetsRef);
        targetsRef.current.forEach(target => {
            console.log(target);
            observer.observe(target);
        });

        return () => {
            console.log("unmount");
            observer.disconnect();
        };
    }, []);



    return (
        <div className="lg:max-w-7xl mx-auto  mt-6">
            <h1 className='text-5xl font-bold text-center mb-5 text-gray-900 dark:text-white'>Projects</h1>
            
            {/* <div className="flex justify-center"> */}
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-4 items-center">
                {projects.map((project) => {
                    return (
                        // redundant check
                    <div key={project.id} ref={el => el && !targetsRef.current.find((elem) => elem === el) && targetsRef.current.push(el)} className="sm:w-full md:max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700  transition-opacity duration-1000 ease-in-out opacity-0">
                        <a href="#">
                            <img className="rounded-t-lg" src={project.img} alt="" />
                        </a>
                        <div className="p-5">
                            <a href="#">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{project.title}</h5>
                            </a>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{project.content}</p>
                            <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Read more
                                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                </svg>
                            </a>
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