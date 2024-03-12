import { Link } from "react-router-dom";
import react from "react";

function c_Disenos() {
    return (
        <>
            <section className="py-16 bg-gray-200">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl text-gray-800 font-extrabold mb-12 mt-12 hover:text-amber-800 underline">Nuestros Departamentos</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="max-w-sm bg-white border border-gray-100 rounded-lg shadow dark:bg-gray-900 dark:border-gray-300 transform transition-transform hover:scale-105 hover:border-4 hover:border-amber-500">
                            <img className="rounded-t-lg" src="/tarjeta6.jpg" alt="" />
                            <div className="p-5">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Habitaciones</h5>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Sumérgete en la serenidad de nuestras habitaciones diseñadas con tu descanso en mente. Cada detalle, desde la elección de colores hasta la disposición del mobiliario.</p>
                                <Link to={'/habitacion'} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-gray-900 bg-amber-200 rounded-lg hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 dark:bg-amber-200 dark:hover:bg-amber-800 dark:hover:text-white dark:focus:ring-gray-800">
                                    Es por ahi
                                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                    </svg>
                                </Link>
                            </div>
                        </div>

                        <div className="max-w-sm bg-white border border-gray-100 rounded-lg shadow dark:bg-gray-900 dark:border-gray-300 transform transition-transform hover:scale-105 hover:border-4 hover:border-amber-500">

                            <img className="rounded-t-lg" src="/tarjeta4.jpg" alt="" />

                            <div className="p-5">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Salones</h5>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Los salones son el escenario principal de la vida en el hogar, y nuestros diseños lo hacen aún más especial. Desde la disposición del mobiliario hasta la selección de colores y texturas, creamos salones que se adaptan a tu estilo de vida.</p>
                                <Link to={'/salon'} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-gray-900 bg-amber-200 rounded-lg hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 dark:bg-amber-200 dark:hover:bg-amber-800 dark:hover:text-white dark:focus:ring-gray-800">
                                    Adelante
                                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                    </svg>
                                </Link>
                            </div>
                        </div>

                        <div className="max-w-sm bg-white border border-gray-100 rounded-lg shadow dark:bg-gray-900 dark:border-gray-300 transform transition-transform hover:scale-105 hover:border-4 hover:border-amber-500">
                            <img className="rounded-t-lg" src="/tarjeta5.jpg" alt="" />
                            <div className="p-5">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Cocinas</h5>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Disfruta del arte culinario en espacios diseñados para inspirar. Nuestras cocinas fusionan funcionalidad y estilo.</p>
                                <Link to={'/cocina'} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-gray-900 bg-amber-200 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-amber-200 dark:hover:bg-amber-800 dark:hover:text-white dark:focus:ring-gray-800">
                                    Vamos
                                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default c_Disenos;