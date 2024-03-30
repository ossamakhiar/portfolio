import dark_bg from "../assets/dark_bg.jpg"
import light_bg from "../assets/light_bg.jpg"
import Navbar from './Template/Navbar';
import Footer from './Template/Footer';
import "../style/index.css"

function App() {
	return (
		<div className="App w-screen h-screen"  style={{backgroundImage: `url(${localStorage.theme === 'dark' ? dark_bg : light_bg})`, backgroundSize: "cover"}}>
			<Navbar />

			<div className='h-full' style={{backgroundImage: `url(${localStorage.theme === 'dark' ? dark_bg : light_bg})`, backgroundSize: "cover"}}>
				<main>
					hello
				</main>
			</div>

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
