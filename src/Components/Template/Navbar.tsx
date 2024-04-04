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
	
	
	useEffect(() => {
		switchPageTheme();
		modeSubject.notify(localStorage.theme);
		console.log("notified");
	}, [theme]);


	return (
		<>
		{/* Z-index to ensures that the navbar remains on top of the content. */}
		<nav className="py-2 z-10 flex-no-wrap fixed top-0 w-full shadow-md bg-white border-b border-gray-300 dark:bg-gray-900"> {/* Add different shadow color in dark mode*/}
			<div className="max-w-screen-xl container mx-auto flex justify-between items-center ">
				<a className="hover:rotate-6 transition-transform" href="#"><h3 className="text-4xl dark:text-white">Khiar</h3></a>
				{/* <div className="flex"> */}
					<ul className="flex space-x-5 nav-items">
						<li className="active"><a href="#">Home</a></li>
						<li className="text-gray-900 dark:text-white"><a href="#">Projects</a></li>
						<li className="text-gray-900 dark:text-white"><a href="#">About</a></li>
						<li className="text-gray-900 dark:text-white"><a href="#">Contact me</a></li>
					</ul>
				{/* </div> */}
					<button className=" p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700" onClick={() => handleThemeSwitch(theme, setTheme)}>
						<ThemeIcon theme={theme} />
					</button>
			</div>
		</nav>
		</>
	);
};

export default Navbar;