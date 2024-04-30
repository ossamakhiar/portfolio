import { createBrowserRouter } from 'react-router-dom';
import Home from './Home';
import Contact from '../Components/Contact';
import AboutPage from '../Pages/AboutPage';
import IndividualProject from '../Pages/IndividualProject';
import ProjectsPage from '../Pages/ProjectsPage';



const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path: "/projects",
        element: <ProjectsPage />,
    },
    {
        path: '/about',
        element: <AboutPage />
    },
    {
        path: "/contact-me",
        element: <Contact />
    },
    {
        path: "/projects/:id",
        element: <IndividualProject />
    },
    {
        path: "*",
        element: <h1 className='text-5xl font-bold dark:text-white text-center'>Page Not found -_-</h1> // ! set a 404 page
    }
]);


export default router;