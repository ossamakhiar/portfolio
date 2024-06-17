import { useParams } from "react-router-dom";
import projects from "../data/projects.json"
import { BsGithub } from "react-icons/bs";


interface IndividualProject {
    id: number;
    title: string;
    content: string;
    img: string;
    sourceCodeLink: string;
    tags: string[];
}

const IndividualProject = () => {
    const projectId : number = +(useParams().id || 0);
    const project : IndividualProject | undefined = projects.find(project => project.id === projectId);

    return (
        <div className="mx-10 lg:mx-auto lg:max-w-7xl">
            { project ? (
                <>
                    <h1 className="font-bold text-5xl text-center dark:text-white">{project.title}</h1>
                    <div className="flex md:flex-row flex-col gap-4 mt-5 font-semibold text-xl">
                        <div className="flex-grow md:w-2/5">
                            <img src={project.img} className="rounded-2xl" />
                        </div>
                        <div className="flex-grow mt-2 md:w-3/5 dark:text-white">
                            {project.content}
                        </div>
                    </div>
                    <div className="mb-3">
                        <h1 className="mt-5 mb-2 font-semibold text-3xl dark:text-white underline m">Skills :</h1>
                        <div className="flex gap-4">
                            {project.tags.map((tag) => {
                                return (
                                    <span className=" bg-blue-500 text-white text-xs md:text-sm font-semibold px-2 py-0.5 md:py-1 rounded-lg">#{tag}</span>
                                )
                            })}
                        </div>
                    </div>
                    <div className="flex justify-center w-screen">
                        {/* <a href="https://github.com/ossamakhiar" style={{ width: '150px' }} className="flex justify-center items-center gap-2 hover:scale-125 bg-blue-500 hover:bg-blue-700 dark:hover:bg-blue-700 dark:bg-blue-600 py-2 rounded-lg font-bold text-white transition duration-300 focus:ring-4 focus:outline-none focus:ring-blue-300">
                            <BsGithub size={30}/>
                            {project.title}
                        </a> */}
                        <a href={project.sourceCodeLink} className="p-1 hover:scale-105 flex gap-2 border-gray-900 dark:border-white border rounded-md transition duration-300">
                                    <BsGithub size={25} className="dark:fill-white fill-black"/>
                                    <p className="font-semibold dark:text-white">source code</p>
                        </a>
                    </div>
                </>
            ) : (
                <p className="text-5xl text-center dark:text-white">Project not found</p>
            )}
        </div>
    )

}

export default IndividualProject;