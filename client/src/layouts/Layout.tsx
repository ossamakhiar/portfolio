import Navbar from '../Components/Template/Navbar';
import Footer from '../Components/Template/Footer';
import { ReactNode } from 'react';


const Layout = ({children}: {children: ReactNode}) => {
    return (
        <div className='mt-[58px]'>
            <Navbar />
            <div className="min-h-[calc(100vh-102px)]">
                {children}
            </div>
            <Footer />
        </div>
    )
}


export default Layout;