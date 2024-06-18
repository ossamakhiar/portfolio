import { createBrowserRouter } from 'react-router-dom';
import Home from '../Pages/Home';
import Contact from '../Components/Contact';
import AboutPage from '../Pages/AboutPage';
import IndividualProject from '../Pages/IndividualProject';
import ProjectsPage from '../Pages/ProjectsPage';
import Layout from '../layouts/Layout';



const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout><Home /></Layout>
    },
    {
        path: "/projects",
        element: <Layout><ProjectsPage /></Layout>,
    },
    {
        path: '/about',
        element: <Layout><AboutPage /></Layout>
    },
    {
        path: "/contact-me",
        element: <Layout><Contact /></Layout>
    },
    {
        path: "/projects/:id",
        element: <Layout><IndividualProject /></Layout>
    },
    {
        path: "*",
        element: <h1 className='text-5xl font-bold dark:text-white text-center'>Page Not found -_-</h1> // ! set a 404 page
    }
]);


export default router;