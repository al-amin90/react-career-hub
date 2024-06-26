import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Nav from "../Nav/Nav";


const MainLayout = () => {
    return (
        <div>
            <Nav></Nav>
            <div className="max-w-7xl px-4 md:px-0 md:w-[80%] mx-auto">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;