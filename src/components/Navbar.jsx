import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isDarkTheme, setDarkTheme] = useState(
        localStorage.getItem('color-theme') === 'dark' || (!localStorage.getItem('color-theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)
    );

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    const handleThemeToggle = () => {
        setDarkTheme(!isDarkTheme);
        localStorage.setItem('color-theme', isDarkTheme ? 'light' : 'dark');
    };

    const bgColor = isDarkTheme ? 'dark:bg-amber-200' : 'bg-white';


    return (
        <header className={`transition-colors ${bgColor}`}>
            <nav className={`fixed w-full z-20 top-0 start-0 border-b border-gray-200 ${bgColor}`}>
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <Link to={"/"} className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src="/logo.png" className="h-8" alt="int scty logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap text-black">Int. Society</span>
                    </Link>
                    <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                        <label className="inline-flex items-center cursor-pointer" onClick={handleThemeToggle}>
                            {/* <span className="mr-3 text-sm font-medium text-orange-300 dark:text-gray-300">🌙</span>
                            <input type="checkbox" value="" className="sr-only peer" />
                            <div className={`relative w-11 h-6 ${isDarkTheme ? 'dark:bg-gray-700' : 'bg-gray-200'} peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:w-5 after:h-5 after:transition-all dark:border-gray-600 peer-checked:bg-yellow-400`} />
                            <span className="ms-3 text-sm">☀️</span> */}
                        </label>
                        <button
                            onClick={toggleMobileMenu}
                            type="button"
                            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                            aria-controls="navbar-sticky"
                            aria-expanded={isMobileMenuOpen}
                        >
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                            </svg>
                        </button>
                    </div>
                    <div className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${isMobileMenuOpen ? 'block' : 'hidden'}`} id="navbar-sticky">
                        <ul className={`flex flex-col p-4 md:p-0 mt-4 font-medium border-b border-gray-100 rounded-lg ${isMobileMenuOpen ? 'bg-gray-900' : 'bg-amber-200'} md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:text-white md:dark:bg-gray-900 dark:border-gray-700`}>
                            <li className="relative group">
                                <Link to={"/"} className="block px-4 py-2 rounded-md text-white md:text-white bg-gray-900">
                                    Inicio
                                    <div className="absolute bottom-[-16px] left-1/2 transform -translate-x-1/2 bg-amber-800 h-1 w-full opacity-0 transition-opacity group-hover:opacity-100"></div>
                                </Link>
                            </li>
                            <li className="relative group">
                                <Link to={"/disenos"} className="block px-4 py-2 rounded-md text-white md:text-white bg-gray-900">
                                    Diseños
                                    <div className="absolute bottom-[-16px] left-1/2 transform -translate-x-1/2 bg-amber-800 h-1 w-full opacity-0 transition-opacity group-hover:opacity-100"></div>
                                </Link>
                            </li>
                            <li className="relative group">
                                <Link to={"/about"} className="block px-4 py-2 rounded-md text-white md:text-white bg-gray-900">
                                    Sobre Nosotros
                                </Link>
                                <div className="absolute bottom-[-16px] left-1/2 transform -translate-x-1/2 bg-amber-800 h-1 w-full opacity-0 transition-opacity group-hover:opacity-100"></div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
