// import Footer from './Components/Template/Footer';
import "./style/index.css"
import {  RouterProvider } from 'react-router-dom';
import router from "./router"


function App() {
	return (
		<div className='dark:bg-gray-900'>
			{/* <div className="flex flex-col justify-between min-h-screen"> */}
				<div className="">
					<RouterProvider router={router} />
				</div>
				{/* <Footer /> */}
			{/* </div> */}
		</div>
	);
}

export default App
