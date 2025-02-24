import React from 'react'
import logo from '../assets/vm_logo.png'

const Navbar = () => {
  return (
    // {/* Navigation Menu */}
    <div className="w-full flex lg:justify-center mt-5 max-md:ml-5">
        <nav className="w-auto bg-white rounded-full flex lg:justify-center font-medium nav fixed z-50">
            {/* Mobile Menu Toggle Button */}
            <button
            id="mobile-menu-toggle"
            className="relative flex items-start justify-start p-3 rounded-full bg-secondary-200 text-black hover:bg-secondary-300 focus:ring-gray-200 md:hidden"
            aria-controls="mobile-menu"
            aria-expanded="false"
            >
            {/* Updated Hamburger Icon */}
            <svg
                className="block h-8 w-8"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
            >
                <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M3 7h18M3 12h18m-7 5h7"
                />
            </svg>
            {/* Updated Close Icon */}
            <svg
                className="hidden h-8 w-8"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
            >
                <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M6 18L18 6M6 6l12 12"
                />
            </svg>
            </button>
            {/* Desktop Menu */}
            <ul className="hidden md:flex p-[26px] items-center">
            <li className="flex items-center mx-[20px]">
                <img className="w-[30px] mr-2" src={logo} alt="" />
                <a href="#vinas">Vinas Mavani</a>
            </li>
            <li className="mx-5">
                <a href="#Highlights">Highlights</a>
            </li>
            <li className="mx-5">
                <a href="#Work">Work</a>
            </li>
            <li className="mx-5">
                <a href="resume.html">Resume</a>
            </li>
            <li className="mx-5">
                <a href="#get_in_touch">Get in touch</a>
            </li>
            </ul>
            {/* Mobile Menu */}
            <div
            id="mobile-menu"
            className="hidden absolute top-full left-0 w-auto bg-white shadow-lg p-5 md:hidden"
            >
            <ul className="space-y-2 ">
                <li>
                <a
                    className="block rounded-md pl-2 pr-[200px] py-2 text-lg font-medium hover:bg-gray-200"
                    href="#Highlights"
                >
                    Highlights
                </a>
                </li>
                <li>
                <a
                    className="block rounded-md pl-2 pr-[200px]py-2 text-lg font-medium hover:bg-gray-200"
                    href="#Work"
                >
                    Work
                </a>
                </li>
                <li>
                <a
                    className="block rounded-md pl-2 pr-[200px] py-2 text-lg font-medium hover:bg-gray-200"
                    href="resume.html"
                >
                    Resume
                </a>
                </li>
                <li>
                <a
                    className="block rounded-md pl-2 py-2 text-lg font-medium hover:bg-gray-200"
                    href="#get_in_touch"
                >
                    Get in touch me
                </a>
                </li>
            </ul>
            </div>
        </nav>
    </div>
  )
}

export default Navbar