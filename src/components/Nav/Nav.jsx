import { NavLink, useLocation } from "react-router-dom"
import bg1 from "../../assets/bg1.png"
import bg2 from "../../assets/bg2.png"
import { useState } from "react";


const Nav = () => {
    const [showBanner, setShowBanner] = useState(false)

    const handleBanner = (value) => {
        setShowBanner(value);
    }

    const { pathname } = useLocation();
    const detailesPage = pathname.includes("/jobDetails/")

    const links = <>
        <NavLink to="/"
            onClick={() => handleBanner(false)}
            className={({ isActive }) => isActive ? "font-bold bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-transparent bg-clip-text" : ""}>Home</NavLink>
        <NavLink to="/Statistics" className={({ isActive }) => isActive ? "font-bold bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-transparent bg-clip-text" : ""}>Statistics</NavLink>
        <NavLink to="/applied"
            onClick={() => handleBanner(true)}
            className={({ isActive }) => isActive ? "font-bold bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-transparent bg-clip-text" : ""}>Applied Jobs</NavLink>
        <NavLink to="/blogs" className={({ isActive }) => isActive ? "font-bold bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-transparent bg-clip-text" : ""}>Blog</NavLink>
    </>

    return (
        <div className={(showBanner || detailesPage) ? "bg-gradient-to-r from-[#7E90FE1A] to-[#9873FF1A] relative" : ""}>
            <div className="navbar pt-7 max-w-7xl px-4 md:px-0 md:w-[80%] mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {links}
                        </ul>
                    </div>
                    <a className="font-bold text-2xl">CareerHub</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu font-medium text-[#757575] menu-horizontal flex gap-6 text-md">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn bg-gradient-to-r from-[#7E90FE] to-[#9873FF] font-semibold text-white">Star Applying</a>
                </div>
            </div>

            {

                (showBanner || detailesPage) && <div className="flex items-center justify-center h-60">
                    <img className="absolute left-0 bottom-0" src={bg1} alt="" />
                    <h2 className="text-center text-2xl font-bold">{detailesPage ? "Job Details" : "Applied Jobs"}</h2>
                    <img className="absolute right-0 top-0" src={bg2} alt="" />
                </div>
            }

        </div>
    );
};


export default Nav;