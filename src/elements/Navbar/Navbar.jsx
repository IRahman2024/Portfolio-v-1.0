import { useState } from 'react';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="navbar bg-black py-6 px-5 md:px-10">
            <div className="flex-1">
                <p className="text-2xl md:text-4xl font-rev text-white">Iftekhar Rahman</p>
            </div>

            {/* Hamburger menu for mobile */}
            <div className="flex-none md:hidden">
                <button
                    className="text-white focus:outline-none"
                    onClick={toggleMenu}
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16m-7 6h7"
                        ></path>
                    </svg>
                </button>
            </div>

            {/* Dropdown menu for mobile */}
            <div className={`flex-none ${isMenuOpen ? 'block' : 'hidden'} md:hidden`}>
                <ul className="menu menu-vertical px-1 text-white">
                    <li><a>About</a></li>
                    <li><a>Skills</a></li>
                    <li><a>Projects</a></li>
                    <li><a>Contact Me</a></li>
                </ul>
            </div>

            {/* Regular menu hidden on mobile */}
            <div className="flex-none hidden md:flex">
                <ul className="menu menu-horizontal px-1 text-white">
                    <li><a>About</a></li>
                    <li><a>Skills</a></li>
                    <li><a>Projects</a></li>
                    <li><a>Contact Me</a></li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
