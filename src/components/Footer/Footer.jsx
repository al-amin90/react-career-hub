import social from '../../assets/social.png';

const Footer = () => {
    return (
        <div className='bg-[#1A1919] text-white'>
            <footer className="max-w-7xl px-4 md:px-0 md:w-[80%] mx-auto">
                <div className="container md:flex justify-between sm:gap-24 py-10  border-b border-[#7E90FE33]">

                    <div className="space-y-3 w-4/12">
                        <div className="text-white text-2xl font-semibold">CareerHub</div>
                        <p className="text-[#FFFFFFB3] text-sm font-light">There are many variations of passages of Lorem Ipsum , but the majority have suffered alteration in some form.</p>
                        <div className="pt-2">
                            <img src={social} alt="" />
                        </div>
                    </div>
                    <div className="grid grid-cols-2 w-full text-sm sm:grid-cols-4">

                        <div className="space-y-3">
                            <h3 className="tracking-wide text-lg text-white font-semibold">Company</h3>
                            <ul className="space-y-3 text-[#FFFFFFB3] font-light">
                                <li>
                                    <a rel="noopener noreferrer" href="#">About Us</a>
                                </li>
                                <li>
                                    <a rel="noopener noreferrer" href="#">Latest News</a>
                                </li>
                                <li>
                                    <a rel="noopener noreferrer" href="#">Careers</a>
                                </li>
                                <li>
                                    <a rel="noopener noreferrer" href="#">Work</a>
                                </li>
                            </ul>
                        </div>
                        <div className="space-y-3">
                            <h3 className="tracking-wide text-lg text-white font-semibold">Product</h3>
                            <ul className="space-y-3 text-[#FFFFFFB3] font-light">
                                <li>
                                    <a rel="noopener noreferrer" href="#">Prototype</a>
                                </li>
                                <li>
                                    <a rel="noopener noreferrer" href="#">Plans & Pricing</a>
                                </li>
                                <li>
                                    <a rel="noopener noreferrer" href="#">Customers</a>
                                </li>
                                <li>
                                    <a rel="noopener noreferrer" href="#">Integrations</a>
                                </li>
                            </ul>
                        </div>
                        <div className="space-y-3">
                            <h3 className="tracking-wide text-lg text-white font-semibold">Support</h3>
                            <ul className="space-y-3 text-[#FFFFFFB3] font-light">
                                <li>
                                    <a rel="noopener noreferrer" href="#">Help Desk</a>
                                </li>
                                <li>
                                    <a rel="noopener noreferrer" href="#">Sales</a>
                                </li>
                                <li>
                                    <a rel="noopener noreferrer" href="#">Become a Partner</a>
                                </li>
                                <li>
                                    <a rel="noopener noreferrer" href="#">Developers</a>
                                </li>
                            </ul>
                        </div>
                        <div className="space-y-3">
                            <h3 className="tracking-wide text-lg text-white font-semibold">Contact</h3>
                            <ul className="space-y-3 text-[#FFFFFFB3] font-light">
                                <li>
                                    <a rel="noopener noreferrer" href="#">524 Broadway , NYC</a>
                                </li>
                                <li>
                                    <a rel="noopener noreferrer" href="#">+1 777 - 978 - 5570</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="py-6  text-[#FFFFFF66] flex justify-between font-light pb-24 pt-10 text-sm">
                    <p>@2023 CareerHub. All Rights Reserved</p>
                    <p>Powered by CareerHub</p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;