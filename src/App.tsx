import Navbar from './Components/Template/Navbar';
import Footer from './Components/Template/Footer';
import "./style/index.css"
import {  RouterProvider } from 'react-router-dom';
import router from "./Pages/router"


function App() {
	return (
		<div className='dark:bg-gray-900'>
			<Navbar />
			<div className="flex flex-col justify-between min-h-screen">
				<div className="mt-[59px]">
					<RouterProvider router={router} />
				</div>
				<Footer />
			</div>
		</div>
	);
}

export default App
