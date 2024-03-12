import React from 'react';
import Footer from '../Footer';
import Navbar from '../Navbar';
import { Link } from 'react-router-dom';

function Gris() {
    return (
        <>
            <Navbar />
            <div className="bg-gray-200">
                <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
                    <div className="flex justify-center items-center h-full">
                        <img
                            src="/coci/c_gris.jpg"
                            className="rounded-lg bg-gray-100 max-w-md w-full md:max-w-md md:w-auto"
                        />
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Cocina Gris</h2>
                        <p className="mt-4 text-gray-500 mb-8">
                            Sumérgete en la elegancia sutil de la Cocina Gris, donde los tonos apagados crean un ambiente tranquilo y sofisticado. La paleta de grises domina el espacio, desde los gabinetes hasta los electrodomésticos, generando una atmósfera moderna y minimalista.

                            La iluminación estratégica resalta las texturas y detalles, añadiendo profundidad al espacio. La funcionalidad se combina con el diseño, proporcionando un entorno eficiente y estéticamente agradable para preparar tus comidas diarias.

                            La Cocina Gris es perfecta para aquellos que aprecian la simplicidad y desean un espacio relajante y contemporáneo. Los tonos apagados crean un telón de fondo neutro que permite la incorporación de elementos decorativos para personalizar el espacio según tus gustos.

                            ¡Transforma tu cocina en un oasis de calma y modernidad con la distinción de la Cocina Gris!
                        </p>
                        <Link to={'/cocina'}>
                            <button className="bg-amber-300 text-black font-bold py-3 px-8 rounded-lg mb-4 md:mb-10 md:w-60 hover:bg-amber-800">Atrás</button>
                        </Link>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Gris;
