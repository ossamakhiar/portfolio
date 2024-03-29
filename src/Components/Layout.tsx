import { ReactNode } from 'react';
import Footer from "./Template/Footer";
import Navbar from "./Template/Navbar";

const Layout = ({ children } : {children: ReactNode}) => {
    return (
        <>
            <Navbar/>
            {children}
            <Footer/>
        </>
    )
};

export default Layout;