import '../tailwind.css';
import Footer from '../Footer';
import Navbar from '../Navbar';
import React from 'react';
import { Link } from 'react-router-dom';

function Cocina() {
    return (
        <>
            <div className="flex flex-col min-h-screen bg-gray-200">
                <Navbar />
                <div className="flex-grow">
                    <div className="container mx-auto my-10">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 mt-28">
                            <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-900 dark:border-gray-700 transform transition-transform hover:scale-105">
                                <Link to={'/basica'}>
                                    <img className="p-4 rounded-t-lg w-full h-40 object-cover" src="/coci/c_basica.jpg" alt="product image" />
                                </Link>
                                <div className="px-5 pb-5">
                                    <Link to={'/basica'}>
                                        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white mb-2">Cocina Basica</h5>
                                    </Link>
                                    <div className="flex items-center mb-3">
                                        <div className="flex items-center space-x-1 rtl:space-x-reverse">
                                            {[1, 2, 3, 4].map((star) => (
                                                <svg key={star} className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                                </svg>
                                            ))}
                                        </div>
                                        <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">4.0</span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-3xl font-bold text-gray-900 dark:text-white">$1200</span>
                                        <Link to={'/basica'} className="text-black bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-amber-200 dark:hover:bg-amber-800 hover:text-white dark:focus:ring-blue-800">Detalles</Link>
                                    </div>
                                </div>
                            </div>

                            <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-900 dark:border-gray-700 transform transition-transform hover:scale-105">
                                <Link to={'/diafana'}>
                                    <img className="p-4 rounded-t-lg w-full h-40 object-cover" src="/coci/c_diafana.jpg" alt="product image" />
                                </Link>
                                <div className="px-5 pb-5">
                                    <Link to={'/diafana'}>
                                        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white mb-2">Cocina Diafana</h5>
                                    </Link>
                                    <div className="flex items-center mb-3">
                                        <div className="flex items-center space-x-1 rtl:space-x-reverse">
                                            {[1, 2, 3, 4].map((star) => (
                                                <svg key={star} className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                                </svg>
                                            ))}
                                        </div>
                                        <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">4.0</span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-3xl font-bold text-gray-900 dark:text-white">$350</span>
                                        <Link to={'/diafana'} className="text-black bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-amber-200 dark:hover:bg-amber-800 hover:text-white dark:focus:ring-blue-800">Detalles</Link>
                                    </div>
                                </div>
                            </div>

                            <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-900 dark:border-gray-700 transform transition-transform hover:scale-105">
                                <Link to={'/fiesta'}>
                                    <img className="p-4 rounded-t-lg w-full h-40 object-cover" src="/coci/c_fiesta.jpg" alt="product image" />
                                </Link>
                                <div className="px-5 pb-5">
                                    <Link to={'/fiesta'}>
                                        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white mb-2">Cocina Fiesta</h5>
                                    </Link>
                                    <div className="flex items-center mb-3">
                                        <div className="flex items-center space-x-1 rtl:space-x-reverse">
                                            {[1, 2, 3].map((star) => (
                                                <svg key={star} className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                                </svg>
                                            ))}
                                        </div>
                                        <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">3.7</span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-3xl font-bold text-gray-900 dark:text-white">$899</span>
                                        <Link to={'/fiesta'} className="text-black bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-amber-200 dark:hover:bg-amber-800 hover:text-white dark:focus:ring-blue-800">Detalles</Link>
                                    </div>
                                </div>
                            </div>

                            <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-900 dark:border-gray-700 transform transition-transform hover:scale-105">
                                <Link to={'/gris'}>
                                    <img className="p-4 rounded-t-lg w-full h-40 object-cover" src="/coci/c_gris.jpg" alt="product image" />
                                </Link>
                                <div className="px-5 pb-5">
                                    <Link to={'/gris'}>
                                        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white mb-2">Cocina Gris</h5>
                                    </Link>
                                    <div className="flex items-center mb-3">
                                        <div className="flex items-center space-x-1 rtl:space-x-reverse">
                                            {[1, 2, 3, 4].map((star) => (
                                                <svg key={star} className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                                </svg>
                                            ))}
                                        </div>
                                        <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">4.7</span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-3xl font-bold text-gray-900 dark:text-white">$1000</span>
                                        <Link to={'/gris'} className="text-black bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-amber-200 dark:hover:bg-amber-800 hover:text-white dark:focus:ring-blue-800">Detalles</Link>
                                    </div>
                                </div>
                            </div>

                            <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-900 dark:border-gray-700 transform transition-transform hover:scale-105">
                                <Link to={'/simple'}>
                                    <img className="p-4 rounded-t-lg w-full h-40 object-cover" src="/coci/c_simple.jpg" alt="product image" />
                                </Link>
                                <div className="px-5 pb-5">
                                    <Link to={'/simple'}>
                                        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white mb-2">Cocina Simple</h5>
                                    </Link>
                                    <div className="flex items-center mb-3">
                                        <div className="flex items-center space-x-1 rtl:space-x-reverse">
                                            {[1, 2, 3, 4, 5].map((star) => (
                                                <svg key={star} className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                                </svg>
                                            ))}
                                        </div>
                                        <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">4.9</span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-3xl font-bold text-gray-900 dark:text-white">$1599</span>
                                        <Link to={'/simple'} className="text-black bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-amber-200 dark:hover:bg-amber-800 hover:text-white dark:focus:ring-blue-800">Detalles</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer className="flex-shrink-0" />
            </div>
        </>
    )
}

export default Cocina;
