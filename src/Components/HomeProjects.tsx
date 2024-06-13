import Projects from './Projects';
import projects from "../data/projects.json"



const ShowAllButton = ({ button }: {button: boolean}) => {
    if (!button)
        return ;
    return (
        <div className="flex justify-center mt-5">
            <a href='/projects' className="bg-blue-700 hover:bg-blue-800 dark:hover:bg-blue-700 dark:bg-blue-600 px-3 py-2 rounded-lg text-center text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">Show All</a>
        </div>
    )
};

const HomeProjects = () => {
    return (
        <div>
            <Projects listAllProjects={false} />
            <ShowAllButton button={projects.length >= 9} />
        </div>
    );
}

export default HomeProjects;