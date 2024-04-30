import About from '../Components/About';
import LandingPanel from '../Components/LandingPanel';
import HomeProjects from '../Components/HomeProjects';
import Contact from '../Components/Contact';

const Home = () => {
    return (
        <div className=''>
            <LandingPanel />
            <div className='bg-white dark:bg-gray-900 py-4'>
                <About />
                <HomeProjects />
                <Contact />
            </div>
        </div>
    )
}

export default Home;