import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const Layout = ({children}) => {
    return (
        <>
            <Navbar />
                <main id="Main" style={{minHeight: '100vh'}}>
                    {children}
                </main>
            <Footer />
        </>
    );
};

export default Layout
