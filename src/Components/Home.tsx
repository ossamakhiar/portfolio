import { useEffect, useState } from "react";
import dark_bg from "../assets/dark_bg.jpg"
import light_bg from "../assets/light_bg.jpg"
import { DisplayMode } from '../types/DisplayModes';
import modeSubject from "./ModeSubject";
import { ObserverCallback } from '../types/ObserverCallback';
import Typewriter from 'typewriter-effect';


const Home = () => {
    const defaultTheme : DisplayMode = localStorage.theme ? localStorage.theme : DisplayMode.LIGHT;
    const [theme, setTheme] = useState(defaultTheme);

    const observerCallback: ObserverCallback = (state) => {
        setTheme(state);
    }

    useEffect( () => {
        modeSubject.subscribe(observerCallback);
        () => modeSubject.unsubscribe(observerCallback);
    }, []);

    return (
        // bg-[url("../assets/light_bg.jpg")] bg-cover dark:bg-[url("../assets/dark_bg.jpg")]
        <div className='h-full items-center flex justify-center' style={{backgroundImage: `url(${theme === DisplayMode.DARK ? dark_bg : light_bg})`, backgroundSize: "cover"}}>
            <main className="">
                <div className=" py-3 px-10">
                    <div className="text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white sm:text-5xl md:text-6xl" style={{color: "white"}}>
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
                    <h2 className="tracking-tight font-extrabold text-blue-500 text-4xl my-5">
                        C/C++ Developer
                    </h2>
                    <p className="font-extrabold text-base text-gray-900 dark:text-white sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                        I'm a student of software engineering at 1337 Future is loading
                    </p>
                </div>
            </main>
        </div>
    );
}

export default Home;