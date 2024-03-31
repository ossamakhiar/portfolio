import Navbar from './Template/Navbar';
import Footer from './Template/Footer';
import Home from './Home';

import "../style/index.css"

function App() {
	return (
		<div className="App w-screen h-screen" >
			<Navbar />

			<Home />


			<div className="about my-8">
				<h1 className=' text-3xl'>About</h1>
				<p className=' max-w-5xl'>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque dolorum saepe voluptatum vero porro sint, 
					pariatur necessitatibus natus animi iure non, explicabo eaque maxime praesentium quod. Ut consequuntur accusamus porro.
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque dolorum saepe voluptatum vero porro sint, pariatur 
					necessitatibus natus animi iure non, explicabo eaque maxime praesentium quod. Ut consequuntur accusamus porro.
				</p>
			</div>

			<Footer />
		</div>
	);
}

export default App
