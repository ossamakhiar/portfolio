import Projects from './Projects';
import projects from "../data/projects.json"


const ShowAll = (props) => {
    if (!props.button)
        return ;
    return (
        <div className="flex justify-center mt-5">
            <a href='/projects' className="px-3 py-2  text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Show All</a>
        </div>
    )
};

const HomeProjects = () => {
    return (<div>
        <Projects />
        <ShowAll button={projects.length >= 9} />
    </div>);
}

export default HomeProjects;