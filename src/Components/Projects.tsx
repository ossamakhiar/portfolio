import { useEffect, useRef } from "react";


const Projects = () => {

    const blogs = [
        {id: 1,title: "Hello world", content: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."},
        {id: 2,title: "Trenscendance 2024", content: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."},
        {id: 3,title: "Piscine object", content: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."},
        {id: 4,title: "Blah blah", content: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."},
        {id: 5,title: "Blah blah", content: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."},
        {id: 6,title: "Piscine object", content: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."},
        {id: 7,title: "Blah blah", content: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."},
        {id: 8,title: "Blah blah", content: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."},
    
    ];


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
        <div className="max-w-7xl mx-auto mt-6">
            <h1 className='text-5xl font-bold text-center mb-5 text-gray-900 dark:text-white'>Projects</h1>
            
            <div className="flex flex-wrap gap-4">
                {blogs.map((blog) => {
                    return (
                        // redundant check
                    <div key={blog.id} ref={el => el && !targetsRef.current.find((elem) => elem === el) && targetsRef.current.push(el)} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700  transition-opacity duration-1000 ease-in-out opacity-0">
                        <a href="#">
                            <img className="rounded-t-lg" src="" alt="" />
                        </a>
                        <div className="p-5">
                            <a href="#">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{blog.title}</h5>
                            </a>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{blog.content}</p>
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
            </div>
        </div>
    )

};

export default Projects;