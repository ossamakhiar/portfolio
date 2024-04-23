import Navbar from './Template/Navbar';
import Footer from './Template/Footer';
import Home from './Pages/Home';
import "../style/index.css"
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Projects from './Projects';
import Contact from './Contact';
import AboutPage from './Pages/AboutPage';
import IndividualProject from './Pages/IndividualProject';


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
	},
	{
		path: "/projects/:id",
		element: <IndividualProject />
	},
	{
		path: "*",
		element: <h1 className='text-5xl font-bold dark:text-white'></h1> // ! set a 404 page
	}])

	return (
		<div className='dark:bg-gray-900'>
			<Navbar />
			<div className="min-h-screen flex flex-col justify-between">
				<div className=" mt-[59px]">
					<RouterProvider router={router} />
				</div>
				<Footer />
			</div>
		</div>
	);
}

export default App
