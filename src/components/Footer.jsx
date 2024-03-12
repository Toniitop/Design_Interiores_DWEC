import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Zoom } from 'react-toastify';

function Footer() {
    const [email, setEmail] = useState(''); //para controlar el valor del campo de entrada

    const botonSuscribirse = (e) => {
        e.preventDefault();

        toast.success('Bienvenido 🤗', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Zoom,
            });
    
        // Limpiar el campo de entrada
        setEmail('');

        }


    return (
        <footer>

            <div className="bg-amber-200">
                <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
                    <div className="grid row-gap-10 mb-8 lg:grid-cols-6">
                        <div className="grid grid-cols-2 gap-5 row-gap-8 lg:col-span-4 md:grid-cols-4">
                            <div>
                                <p className="font-medium tracking-wide font-semibold text-gray-900 hover:underline hover:underline">
                                    Categorias
                                </p>
                                <ul className="mt-2 space-y-2">
                                    <li>
                                        <a
                                            href="/"
                                            className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-200 hover:text-gray-900"
                                        >
                                            Noticias
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="/"
                                            className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-200 hover:text-gray-900"
                                        >
                                            FaQ
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="/"
                                            className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-200 hover:text-gray-900"
                                        >
                                            Referencias
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <p className="font-medium tracking-wide font-semibold text-gray-900 hover:underline">Ideas</p>
                                <ul className="mt-2 space-y-2">
                                    <li>
                                        <a
                                            href="/"
                                            className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-200 hover:text-gray-900"
                                        >
                                            Web
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="/"
                                            className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-200 hover:text-gray-900"
                                        >
                                            Media
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="/"
                                            className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-200 hover:text-gray-900"
                                        >
                                            Portfolio
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <p className="font-medium tracking-wide font-semibold text-gray-900 hover:underline">
                                    Nuestra Empresa
                                </p>
                                <ul className="mt-2 space-y-2">
                                    <li>
                                        <a
                                            href="/"
                                            className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-200 hover:text-gray-900"
                                        >
                                            Trabaja con Nosotros..
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="https://github.com/Toniitop"
                                            className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-200 hover:text-gray-900"
                                        >
                                            Contacto
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="/"
                                            className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-200 hover:text-gray-900"
                                        >
                                            Proyectos
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="md:max-w-md lg:col-span-2">
                            <span className="text-base font-medium tracking-wide font-semibold text-gray-900">
                                Newsletter:
                            </span>
                            <form className="flex flex-col mt-4 md:flex-row">
                                <input
                                    placeholder="Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    type="text"
                                    className="flex-grow w-full h-12 px-4 mb-3 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none md:mr-2 md:mb-0 focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                                />
                                <button
                                    type='button'
                                    className="overflow-hidden relative w-32 p-2 h-12 bg-gray-900 text-white border-none rounded-md text-m font-bold cursor-pointer relative z-10 group"
                                    onClick={botonSuscribirse}>
                                    Suscribirse
                                    <span
                                        className="absolute w-36 h-32 -top-8 -left-2 bg-white rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-left"
                                    ></span>
                                    <span
                                        className="absolute w-36 h-32 -top-8 -left-2 bg-indigo-400 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-left"
                                    ></span>
                                    <span
                                        className="absolute w-36 h-32 -top-8 -left-2 bg-indigo-600 rotate-12 transform scale-x-0 group-hover:scale-x-50 transition-transform group-hover:duration-1000 duration-500 origin-left"
                                    ></span>
                                    <span
                                        className="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-2.5 left-6 z-10">
                                            Vamos!
                                    </span>
                                </button>
                            </form>
                            <ToastContainer />
                            <p className="mt-4 text-sm text-gray-500">
                                En nuestra newsletter encontrarás información de calidad para 
                                poder mantenerte al tanto del mundo del diseño de interiores.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col justify-between pt-5 pb-10 border-t border-gray-800 sm:flex-row">
                        <p className="text-sm text-gray-500">
                            © Copyright 2024 Interiorismo Society. All rights reserved.
                        </p>
                        <div className="flex items-center mt-4 space-x-4 sm:mt-0">
                            <a
                                href="/"
                                className="text-gray-500 transition-colors duration-300 hover:bg-cyan-600 hover:rounded"
                            >
                                <svg viewBox="0 0 24 24" fill="bg-gray-900" className="h-5">
                                    <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" />
                                </svg>
                            </a>
                            <a
                                href="/"
                                className="text-gray-500 transition-colors duration-300 hover:bg-pink-600 hover:rounded"
                            >
                                <svg viewBox="0 0 30 30" fill="bg-gray-900" className="h-6">
                                    <circle cx="15" cy="15" r="4" />
                                    <path d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z" />
                                </svg>
                            </a>
                            <a
                                href="/"
                                className="text-gray-500 transition-colors duration-300 hover:bg-blue-700 hover:rounded"
                            >
                                <svg viewBox="0 0 24 24" fill="bg-gray-900" className="h-5">
                                    <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        </footer>
    );
};

export default Footer;
