import Navbar from './Template/Navbar';
import Footer from './Template/Footer';
import Home from './Pages/Home';
import "../style/index.css"
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import ProjectsPage from './Pages/ProjectsPage';
import Projects from './Projects';
// import About from './About';
import Contact from './Contact';
import AboutPage from './Pages/AboutPage';


function App() {
	const router = createBrowserRouter([{
		path: '/',
		element: <Home />
	},
	{
		path: "/projects",
		element: <Projects />,
	},
	{
		path: '/about',
		element: <AboutPage />
	},
	{
		path: "/contact-me",
		element: <Contact />
	}])

	return (
		<div className='dark:bg-gray-900'>
			<Navbar />
			<div className="min-h-screen">
				<div className=" mt-[59px]">
					<RouterProvider router={router} />
				</div>
			</div>
			<Footer />
		</div>
	);
}

export default App
