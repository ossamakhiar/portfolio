import { useParams } from "react-router-dom";
import projects from "../../data/projects.json"
import { BsGithub } from "react-icons/bs";


interface IndividualProject {
    id: number;
    title: string;
    content: string;
    img: string;
    sourceCodeLink: string;
}

const IndividualProject = () => {
    const projectId : number = +(useParams().id || 0);
    const project : IndividualProject | undefined = projects.find(project => project.id === projectId);

    return (
        <div className="lg:max-w-7xl lg:mx-auto mx-10 ">
            { (project) ? (
                <>
                    <h1 className=" text-5xl text-center dark:text-white font-bold">{project.title}</h1>
                    <div className="flex flex-col md:flex-row mt-5 gap-4">
                        <div className="flex-grow md:w-2/5">
                            <img src={project.img} className=" rounded-2xl" />
                        </div>
                        <div className="flex-grow md:w-3/5 mt-2 dark:text-white">
                            {project.content}
                        </div>
                    </div>
                    <div>
                        <h1 className="text-3xl font-semibold dark:text-white mt-3 underline">Skills :</h1>
                        
                    </div>
                    <div className="w-screen flex justify-center">
                        {/* <a href="https://github.com/ossamakhiar" style={{ width: '150px' }} className=" flex justify-center items-center gap-2 hover:scale-125 transition duration-300 py-2 bg-blue-500 rounded-lg hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 text-white font-bold">
                            <BsGithub size={30}/>
                            {project.title}
                        </a> */}
                        <a href={project.sourceCodeLink} className="p-1 hover:scale-105 transition duration-300 flex gap-2 border border-gray-900 dark:border-white rounded-md">
                                    <BsGithub size={25} className="dark:fill-white fill-black"/>
                                    <p className="dark:text-white font-semibold">source code</p>
                        </a>
                    </div>
                </>
            ) : (
                <p className=" text-5xl text-center dark:text-white">Project not found</p>
            )}
        </div>
    )

}

export default IndividualProject;