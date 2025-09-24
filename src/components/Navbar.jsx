import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import logo from '../assets/vm_logo.png';
import resume from '../assets/Resume.pdf';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <div className="w-full flex lg:justify-center max-md:ml-5">
            <nav className="w-auto rounded-full flex lg:justify-center font-medium nav fixed top-4 z-50 transition-all duration-300 ease-in-out bg-white/40 backdrop-blur-custom shadow-glass border border-white/40 ">
                {/* Mobile Menu Toggle Button */}
                <button
                    onClick={toggleMobileMenu}
                    className="relative flex items-center p-3 rounded-full bg-secondary-200 text-black hover:bg-secondary-300 focus:ring-gray-200 md:hidden"
                    aria-controls="mobile-menu"
                    aria-expanded={isMobileMenuOpen}
                >
                    {/* Hamburger Icon */}
                    <svg
                        className={`h-8 w-8 ${isMobileMenuOpen ? 'hidden' : 'block'}`}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 7h18M3 12h18m-7 5h7" />
                    </svg>
                    {/* Close Icon */}
                    <svg
                        className={`h-8 w-8 ${isMobileMenuOpen ? 'block' : 'hidden'}`}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>


                {/* Desktop Menu */}
                <ul className="hidden md:flex p-[26px] items-center ">
                    <li className="flex items-center mx-[20px]">
                        <img className="w-[24px] mr-2" src={logo} alt="Logo" />
                        <a href="/">Vinas Mavani</a>
                    </li>
                    <li className="mx-5"><a href="#Highlights">About</a></li>
                    <li className="mx-5"><a href="#Work">Work</a></li>
                    <li className="mx-5"><a href="#get_in_touch">Contact</a></li>
                    <li className="mx-5">
                        <a href={resume} target="_blank" rel="noopener noreferrer">Resume</a>
                    </li>
                </ul>

                {/* Mobile Menu */}
                <div
                    id="mobile-menu"
                    className={`absolute top-full left-0 w-auto bg-white shadow-lg p-5 md:hidden transition-all duration-300 ease-in-out ${
                        isMobileMenuOpen ? 'block' : 'hidden'
                    }`}
                >
                    <ul className="space-y-2">
                        {location.pathname !== '/' && (
                            <li>
                                <Link
                                    to="/"
                                    className="block rounded-md pl-2 pr-[100px] py-2 text-lg font-medium hover:bg-gray-200"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                   ← Back to Home
                                </Link>
                            </li>
                        )}
                        <li>
                            <a className="block rounded-md pl-2 pr-[200px] py-2 text-lg font-medium hover:bg-gray-200" href="#Highlights">
                                About
                            </a>
                        </li>
                        <li>
                            <a className="block rounded-md pl-2 pr-[200px] py-2 text-lg font-medium hover:bg-gray-200" href="#Work">
                                Work
                            </a>
                        </li>
                        <li>
                            <a className="block rounded-md pl-2 py-2 text-lg font-medium hover:bg-gray-200" href="#get_in_touch">
                                Contact
                            </a>
                        </li>
                        <li>
                            <a className="block rounded-md pl-2 pr-[200px] py-2 text-lg font-medium hover:bg-gray-200" href={resume} target="_blank" rel="noopener noreferrer">
                                Resume
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
