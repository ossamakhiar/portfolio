import { useEffect, useState } from "react";
import dark_bg from "/dark_bg.jpg"
import light_bg from "/light_bg.jpg"
import { DisplayMode } from '../types/DisplayModes';
import modeSubject from "./utils/ModeSubject";
import { ObserverCallback } from '../types/ObserverCallback';
import Typewriter from 'typewriter-effect';
import { HiOutlineDocumentText } from "react-icons/hi";
import SocialIcons from './utils/SocialIcons';

const LandingPanel = () => {
    const defaultTheme : DisplayMode = localStorage.theme ? localStorage.theme : DisplayMode.LIGHT;
    const [theme, setTheme] = useState(defaultTheme);

    const observerCallback: ObserverCallback = (state) => setTheme(state);

    useEffect( () => {
        console.log("use effect");
        modeSubject.subscribe(observerCallback);
        // return () => modeSubject.unsubscribe(observerCallback);
    }, []);

    return (
        // bg-[url("../assets/light_bg.jpg")] bg-cover dark:bg-[url("../assets/dark_bg.jpg")]
        <div id="section-home" className='flex justify-center items-center h-screen' style={{backgroundImage: `url(${theme === DisplayMode.DARK ? dark_bg : light_bg})`, backgroundSize: "cover"}}>
            <main className="">
                <div className="px-10 py-3">
                    <div className="font-extrabold text-4xl text-gray-900 sm:text-5xl md:text-6xl dark:text-white tracking-tight" style={{color: "white"}}>
                        <Typewriter
                            onInit={(typewriter) => {
                                typewriter.typeString('Hi, I\'m Oussama Khiar')
                                .start();
                            }}
                            options={{
                                skipAddStyles: false,
                                wrapperClassName: "text-gray-900 dark:text-white", // WTFFFF
                                cursorClassName: "text-gray-900 dark:text-white"
                              }}
                            />
                    </div>
                    <h2 className="my-5 font-extrabold text-4xl text-blue-500 tracking-tight">
                        Software engineer student
                    </h2>
                    <p className="sm:mx-auto lg:mx-0 sm:mt-5 md:mt-5 sm:max-w-xl font-extrabold text-base text-gray-900 sm:text-lg md:text-xl dark:text-white">
                        I'm a student of software engineering at 1337 Future is loading
                    </p>
                    <div className="flex justify-between">
                        <SocialIcons iconsSize={30} />
                        <button className="flex items-center bg-blue-500 hover:bg-blue-700 dark:hover:bg-blue-700 dark:bg-blue-600 ml-2 px-5 rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold text-white">
                            <HiOutlineDocumentText size={20} strokeWidth={2.2} stroke="white"/>
                            {/* stroke="white" */}
                            <p className="ml-1 text-white">Resume</p>
                        </button>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default LandingPanel;