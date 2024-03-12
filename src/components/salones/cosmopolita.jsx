import React from 'react';
import Footer from '../Footer';
import Navbar from '../Navbar';
import { Link } from 'react-router-dom';

function Cosmopolita() {
    return (
        <>
            <Navbar />
            <div className="bg-gray-200">
                <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
                    <div className="flex justify-center items-center h-full">
                        <img
                            src="/salo/s_cosmopolita.jpg"
                            className="rounded-lg bg-gray-100 max-w-md w-full md:max-w-md md:w-auto"
                        />
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Salón Cosmopolita</h2>
                        <p className="mt-4 text-gray-500 mb-8">
                            Sumérgete en la energía vibrante y moderna de nuestro Salón Cosmopolita. Cada rincón ha sido diseñado para reflejar la dinámica de la ciudad, con la cortina Melbourne agregando un toque de sofisticación y funcionalidad al espacio, filtrando la luz de manera elegante.

                            Inspirado en el estilo de vida urbano, este salón combina líneas limpias, tonos neutros y elementos contemporáneos para crear un ambiente moderno y acogedor. Los muebles elegantes y los accesorios de diseño aportan un toque de lujo, mientras que las grandes ventanas conectan el interior con el bullicio de la ciudad.

                            Este salón es ideal para aquellos que aprecian la estética urbana y desean un espacio que refleje la vida moderna. La mezcla de materiales, la iluminación estratégica y los detalles minimalistas crean una experiencia cosmopolita única.

                            ¡Transforma tu salón en un escaparate de modernidad y estilo urbano!
                        </p>
                        <Link to={'/salon'}>
                            <button className="bg-amber-300 text-black font-bold py-3 px-8 rounded-lg mb-4 md:mb-10 md:w-60 hover:bg-amber-800">Atrás</button>
                        </Link>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Cosmopolita;
