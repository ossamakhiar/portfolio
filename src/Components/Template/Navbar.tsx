import { useEffect, useState } from "react";
import { BsFillBrightnessHighFill, BsFillMoonStarsFill } from "react-icons/bs";
import modeSubject from "../utils/ModeSubject";
import { DisplayMode } from "../../types/DisplayModes";
import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import navItems from '../utils/navItems';



/*
!!!! Back to this Component and refactore it, it really hard to look at
*/







const handleThemeSwitch = (theme: string, setTheme: React.Dispatch<React.SetStateAction<string>>) => {
	const oppositeTheme = (theme == DisplayMode.LIGHT) ? DisplayMode.DARK : DisplayMode.LIGHT;

	localStorage.theme = oppositeTheme;
	setTheme(oppositeTheme);
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
	const [isOpen, setIsOpen] = useState<boolean>(false);

	const pathname = window.location.pathname;
	const	handleBarsClick = () => setIsOpen(!isOpen);

	useEffect(() => {
		switchPageTheme();
		modeSubject.notify(localStorage.theme);
		console.log("notified");
	}, [theme]);

	return (
		<>
		{/* Z-index to ensures that the navbar remains on top of the content. */}
			<nav className="h-[58px] top-0 z-10 fixed border-gray-300 bg-white dark:bg-gray-900 shadow-md py-2 border-b w-full"> {/* Add different shadow color in dark mode*/}
				<div className="hidden md:flex justify-between items-center mx-auto max-w-screen-xl container">
						<NavLink className="hover:rotate-6 ml-2 transition-transform" to="/"><h3 className="text-4xl dark:text-white">Khiar</h3></NavLink>
						<ul className="flex space-x-5 nav-items">
							{
								navItems.map((item) => {
								return(
									<li key={item.to} className={`text-gray-900 dark:text-white text-[12px] md:text-[16px] ${pathname === item.to ? "active" : ""}`}>
										<NavLink to={item.to}>{item.label}</NavLink>
									</li>
								)

								})
							}
						</ul>
						<button className="hover:bg-gray-200 dark:hover:bg-gray-700 p-2 rounded-md" onClick={() => handleThemeSwitch(theme, setTheme)}>
							<ThemeIcon theme={theme} />
						</button>
				</div>




				{/* Phone version */}
				<div className="realtive md:hidden flex justify-between items-center px-2">
					<NavLink className="hover:rotate-6 transition-transform" to="/"><h3 className="text-4xl dark:text-white">Khiar</h3></NavLink>
					<div className="flex items-center space-x-3">
						<button className="hover:bg-gray-200 dark:hover:bg-gray-700 p-2 rounded-md" onClick={() => handleThemeSwitch(theme, setTheme)}>
								<ThemeIcon theme={theme} />
						</button>
						<button className="hover:bg-gray-200 dark:hover:bg-gray-700 p-2 rounded-md"  onClick={handleBarsClick}>
							<FaBars className="dark:fill-white" size={25} />
						</button>
					</div>

					{
						isOpen && (
							<div className="bg-white dark:bg-gray-900 absolute left-0 top-[57px] w-full flex flex-col">

								{
									navItems.map((item, index) => {
										return (
											<NavLink
												key={item.to}
												to={item.to}
												className={`hover:bg-gray-100 dark:hover:bg-gray-700 w-full text-center dark:text-white font-semibold p-2 ${index === 0 ? 'border-t dark:border-' : ''}`}
												onClick={() => setIsOpen(false)}
											>
												{item.label}
											</NavLink>
										)
									})
								}
							</div>
						)
					}
				</div>


			</nav>
		</>
	);
};

export default Navbar;