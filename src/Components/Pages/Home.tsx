import About from '../About';
import LandingPanel from '../LandingPanel';
import HomeProjects from '../HomeProjects';
import Contact from '../Contact';

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