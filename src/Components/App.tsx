import Navbar from './Template/Navbar';
import Footer from './Template/Footer';
import Home from './Home';
import About from './About';
import Projects from './Projects'
import Contact from './Contact';
import "../style/index.css"
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {
	return (
		<div className="App w-screen h-screen dark:bg-gray-900" >
			<Navbar />

		
			<Home />
			<div className='bg-white dark:bg-gray-900 py-4'>
				<About />
				<Projects />
				<Contact />
			</div>
			<Footer />
		</div>
	);
}

export default App
