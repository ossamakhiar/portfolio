import { useEffect, useState } from "react";
import { BsFillBrightnessHighFill, BsFillMoonStarsFill } from "react-icons/bs";
import modeSubject from "../ModeSubject";
import { DisplayMode } from "../../types/DisplayModes";


const handleThemeSwitch = (theme: string, setTheme: React.Dispatch<React.SetStateAction<string>>) => {
	const oppositeTheme = (theme == DisplayMode.LIGHT) ? DisplayMode.DARK : DisplayMode.LIGHT;

	if (theme == DisplayMode.LIGHT) {
		localStorage.theme = oppositeTheme;
		setTheme(oppositeTheme);
	} else {
		localStorage.theme = oppositeTheme;
		setTheme(oppositeTheme);
	}
};

function switchPageTheme() : void {
	document.documentElement.classList.toggle(DisplayMode.DARK, localStorage.theme === DisplayMode.DARK);
}

function ThemeIcon({theme}) {
	if (theme !== DisplayMode.DARK)
		return <BsFillMoonStarsFill size={25} />
	
    return <BsFillBrightnessHighFill size={25} fill="white" />;
}

const Navbar = () : JSX.Element => {
	const [theme, setTheme] = useState<string>(localStorage.theme ? localStorage.theme : DisplayMode.LIGHT);
	const [activeSection, setActiveSection] = useState('');
	
	
	useEffect(() => {
		switchPageTheme();
		modeSubject.notify(localStorage.theme);
		console.log("notified");
	}, [theme]);

	// console.log(window.innerWidth);


	useEffect(() => {
		const handleScroll = () => {
			const sections = document.querySelectorAll('[id^="section-"]');
			console.log(sections);

			sections.forEach(section => {
				const rect = section.getBoundingClientRect();
				// console.log(section)
				const isSectionVisible = rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2;

				if (isSectionVisible) {
					setActiveSection(section.id);
				}
			});
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);
  


	return (
		<>
		{/* Z-index to ensures that the navbar remains on top of the content. */}
			<nav className="py-2 z-10 flex-no-wrap fixed top-0 w-full shadow-md bg-white border-b border-gray-300 dark:bg-gray-900"> {/* Add different shadow color in dark mode*/}
				<div className="max-w-screen-xl container mx-auto flex justify-between items-center ">
					<a className="hover:rotate-6 transition-transform ml-2" href="/"><h3 className="text-4xl dark:text-white">Khiar</h3></a>
						<ul className="flex space-x-5 nav-items">
							<li className={`text-gray-900 dark:text-white text-[12px] md:text-[16px] ${activeSection === 'section-home' ? "active" : ""}`}><a href="/">Home</a></li>
							<li className={`text-gray-900 dark:text-white text-[12px] md:text-[16px] ${activeSection === 'section-about' ? "active" : ""}`}><a href="#section-about">About</a></li>
							<li className={`text-gray-900 dark:text-white text-[12px] md:text-[16px] ${activeSection === 'section-projects' ? "active" : ""}`}><a href="#section-projects">Projects</a></li>
							<li className={`text-gray-900 dark:text-white text-[12px] md:text-[16px] ${activeSection === 'section-contact-me' ? "active" : ""}`}><a href="#section-contact-me">Contact me</a></li>
						</ul>
						<button className=" p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700" onClick={() => handleThemeSwitch(theme, setTheme)}>
							<ThemeIcon theme={theme} />
						</button>
				</div>
			</nav>
		</>
	);
};

export default Navbar;