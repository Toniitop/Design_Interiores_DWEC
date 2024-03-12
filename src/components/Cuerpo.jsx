import React from 'react';
import { Link } from 'react-router-dom';

function Cuerpo() {
    return (
        <div className="bg-gray-200">
            {/* Primera parte - Información de la empresa */}
            <section className="bg-cover bg-center md:h-screen flex items-center justify-center" style={{ backgroundImage: 'url("/diseno1.jpg")' }}>
                <div className="text-white text-center rounded bg-gray-100 bg-opacity-60 p-4">
                    <h1 className="text-4xl text-gray-800 font-bold mb-4 hover:text-amber-800">Interiorismo Society</h1>
                    <p className="text-lg text-gray-900">El buen <span className='font-bold text-amber-800'>DISEÑO</span> consiste en convertir <span className='font-bold text-amber-800'>SUEÑOS</span> en realidad.</p>
                </div>
            </section>

            <hr className="my-8 border-t border-gray-300" />

            <section className="bg-gray-100 py-16">
                <div className="container mx-auto text-center">
                    <h2 className="text-4xl font-extrabold text-gray-800 mb-8 hover:text-amber-800">Descubre Nuestro Arte en Diseño de Interiores</h2>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        Bienvenido a nuestro fascinante mundo de creatividad y transformación de espacios. En nuestra firma especializada en diseño de interiores, nos apasiona dar vida a tus sueños hogareños.
                        Nos destacamos en la creación de ambientes acogedores y funcionales, adaptados a cada tipo de vivienda: desde hogares familiares y apartamentos modernos hasta elegantes residencias.
                        Nuestro equipo de diseñadores expertos trabaja minuciosamente para comprender tus preferencias y necesidades, garantizando que cada rincón refleje tu estilo único.
                        Desde la acogedora sala de estar hasta la funcional cocina, pasando por los relajantes dormitorios y los inspiradores espacios de trabajo, cuidamos cada detalle para lograr una armonía visual y funcional.
                        Con un enfoque holístico, incorporamos las últimas tendencias y tecnologías, utilizando una paleta de colores y materiales que se adapten a tu personalidad y al entorno arquitectónico.
                        Tu hogar se convertirá en un auténtico reflejo de quién eres, fusionando la estética y la comodidad en cada proyecto de diseño de interiores que emprendemos.
                        ¡Permítenos ser la firma que da vida a tus visiones de un hogar perfecto!
                    </p>
                </div>
            </section>


            <hr className="my-8 border-t border-gray-300" />

            {/* Segunda parte - Departamentos de la empresa */}
            <section className="py-16 bg-gray-200">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl text-gray-800 font-extrabold mb-12 mt-12 hover:text-amber-800 underline">Nuestros Departamentos</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="max-w-sm bg-white border border-gray-100 rounded-lg shadow dark:bg-gray-900 dark:border-gray-300 transform transition-transform hover:scale-105 hover:border-amber-500">
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

                        <div className="max-w-sm bg-white border border-gray-100 rounded-lg shadow dark:bg-gray-900 dark:border-gray-300 transform transition-transform hover:scale-105 hover:border-amber-500">

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

                        <div className="max-w-sm bg-white border border-gray-100 rounded-lg shadow dark:bg-gray-900 dark:border-gray-300 transform transition-transform hover:scale-105 hover:border-amber-500">
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

            <hr className="my-8 border-t border-gray-300" />

            {/* Tercera parte - Nuestros clientes */}
            <section className="bg-gray-100 py-16">
                <div className="container mx-auto text-center flex justify-center">

                    <div class="w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-900 dark:border-gray-900">
                        <div class="flex items-center justify-between mb-4">
                            <h5 class="text-xl font-bold leading-none text-gray-900 dark:text-white hover:text-amber-200">Últimos Clientes</h5>
                            <a href="/" class="text-sm font-medium text-amber-200 hover:underline dark:text-amber-200">
                                View all
                            </a>
                        </div>
                        <div class="flow-root">
                            <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700">
                                <li class="py-3 sm:py-4">
                                    <div class="flex items-center">
                                        <div class="flex-shrink-0">
                                            <img class="w-8 h-8 rounded-full" src="/obama.jpeg" alt="obama" />
                                        </div>
                                        <div class="flex-1 min-w-0 ms-4">
                                            <p class="text-sm font-medium text-gray-900 truncate dark:text-white hover:text-amber-200">
                                                Barack Obama
                                            </p>
                                            <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                                                @BarackObama
                                            </p>
                                        </div>
                                        <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                            $300420
                                        </div>
                                    </div>
                                </li>
                                <li class="py-3 sm:py-4">
                                    <div class="flex items-center ">
                                        <div class="flex-shrink-0">
                                            <img class="w-8 h-8 rounded-full" src="/lbj.jpg" alt="LBJ" />
                                        </div>
                                        <div class="flex-1 min-w-0 ms-4">
                                            <p class="text-sm font-medium text-gray-900 truncate dark:text-white hover:text-amber-200">
                                                LeBron James
                                            </p>
                                            <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                                                @KingJames
                                            </p>
                                        </div>
                                        <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                            $345667
                                        </div>
                                    </div>
                                </li>
                                <li class="py-3 sm:py-4">
                                    <div class="flex items-center">
                                        <div class="flex-shrink-0">
                                            <img class="w-8 h-8 rounded-full" src="/emma watson.jpg" alt="hermione" />
                                        </div>
                                        <div class="flex-1 min-w-0 ms-4">
                                            <p class="text-sm font-medium text-gray-900 truncate dark:text-white hover:text-amber-200">
                                                Emma Watson
                                            </p>
                                            <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                                                @EmmaWatson
                                            </p>
                                        </div>
                                        <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                            $741167
                                        </div>
                                    </div>
                                </li>
                                <li class="py-3 sm:py-4">
                                    <div class="flex items-center ">
                                        <div class="flex-shrink-0">
                                            <img class="w-8 h-8 rounded-full" src="/mr.jpg" alt="barbie" />
                                        </div>
                                        <div class="flex-1 min-w-0 ms-4">
                                            <p class="text-sm font-medium text-gray-900 truncate dark:text-white hover:text-amber-200">
                                                Margot Robbie
                                            </p>
                                            <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                                                @MargotRobbie
                                            </p>
                                        </div>
                                        <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                            $367454
                                        </div>
                                    </div>
                                </li>
                                <li class="pt-3 pb-0 sm:pt-4">
                                    <div class="flex items-center ">
                                        <div class="flex-shrink-0">
                                            <img class="w-8 h-8 rounded-full" src="/therock.jpeg" alt="la roca" />
                                        </div>
                                        <div class="flex-1 min-w-0 ms-4">
                                            <p class="text-sm font-medium text-gray-900 truncate dark:text-white hover:text-amber-200">
                                                Dwayne Johnson
                                            </p>
                                            <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                                                @TheRock
                                            </p>
                                        </div>
                                        <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                            $884367
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
            </section>


        </div>
    );
};

export default Cuerpo;
