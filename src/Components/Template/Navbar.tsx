import { useEffect, useState } from "react";
import { BsFillBrightnessHighFill, BsFillMoonStarsFill } from "react-icons/bs";
import modeSubject from "../utils/ModeSubject";
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

function ThemeIcon({theme} : {theme: string}) {
	if (theme !== DisplayMode.DARK)
		return <BsFillMoonStarsFill size={25} />
	
    return <BsFillBrightnessHighFill size={25} fill="white" />;
}

const Navbar = () => {
	const [theme, setTheme] = useState<string>(localStorage.theme ? localStorage.theme : DisplayMode.LIGHT);
	
	useEffect(() => {
		switchPageTheme();
		modeSubject.notify(localStorage.theme);
		console.log("notified");
	}, [theme]);

	const pathname = window.location.pathname;
	// console.log(window.location);

	return (
		<>
		{/* Z-index to ensures that the navbar remains on top of the content. */}
			<nav className="top-0 z-10 fixed flex-no-wrap border-gray-300 bg-white dark:bg-gray-900 shadow-md py-2 border-b w-full"> {/* Add different shadow color in dark mode*/}
				<div className="flex justify-between items-center mx-auto max-w-screen-xl container">
					<a className="hover:rotate-6 ml-2 transition-transform" href="/"><h3 className="text-4xl dark:text-white">Khiar</h3></a>
						<ul className="flex space-x-5 nav-items">
							<li className={`text-gray-900 dark:text-white text-[12px] md:text-[16px] ${pathname === '/' ? "active" : ""}`}><a href="/">Home</a></li>
							<li className={`text-gray-900 dark:text-white text-[12px] md:text-[16px] ${pathname === '/about' ? "active" : ""}`}><a href="/about">About</a></li>
							<li className={`text-gray-900 dark:text-white text-[12px] md:text-[16px] ${pathname === '/projects' ? "active" : ""}`}><a href="/projects">Projects</a></li>
							<li className={`text-gray-900 dark:text-white text-[12px] md:text-[16px] ${pathname === '/contact-me' ? "active" : ""}`}><a href="/contact-me">Contact me</a></li>
						</ul>
						<button className="hover:bg-gray-200 dark:hover:bg-gray-700 p-2 rounded-md" onClick={() => handleThemeSwitch(theme, setTheme)}>
							<ThemeIcon theme={theme} />
						</button>
				</div>
			</nav>
		</>
	);
};

export default Navbar;