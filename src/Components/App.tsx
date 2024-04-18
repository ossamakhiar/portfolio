import Navbar from './Template/Navbar';
import Footer from './Template/Footer';
import Home from './Pages/Home';
import "../style/index.css"
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import ProjectsPage from './Pages/ProjectsPage';
import Projects from './Projects';
import About from './About';


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
		element: <About />
	},])

	return (
		<div className="min-h-screen dark:bg-gray-900">
			<Navbar />
			<div className=" mt-[59px]">
				<RouterProvider router={router} />
			</div>
			<Footer />
		</div>
	);
}

export default App
