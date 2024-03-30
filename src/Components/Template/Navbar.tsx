import { useState } from "react";
import { BsFillBrightnessHighFill, BsFillMoonStarsFill } from "react-icons/bs";


const handleThemeSwitch = (theme: string, setTheme: React.Dispatch<React.SetStateAction<string>>) => {
	if (theme == 'light') {
		localStorage.theme = 'dark';
		setTheme('dark');
		return ;
	}
	localStorage.theme = 'light';
	setTheme('light');	
};

function switchPageTheme() : void {
	if (localStorage.theme === 'dark') {
		document.documentElement.classList.add('dark');
		return ;
	}
	document.documentElement.classList.remove('dark');
}

function ThemeIcon({theme}) {

    if (theme !== 'dark')
        return <BsFillMoonStarsFill size={25} />

    return <BsFillBrightnessHighFill size={25} fill="white" />;
}

const Navbar = () : JSX.Element => {
	const [theme, setTheme] = useState<string>(localStorage.theme ? localStorage.theme : 'light');

	switchPageTheme();


	return (
		<>
		<nav className="py-3 sticky top-0 shadow-md bg-white border-b border-gray-300 dark:bg-gray-900"> {/* Add different shadow color in dark mode*/}
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