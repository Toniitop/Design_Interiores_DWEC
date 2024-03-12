import React from 'react';
import Footer from '../Footer';
import Navbar from '../Navbar';
import { Link } from 'react-router-dom';

function Verde() {
    return (
        <>
            <Navbar />
            <div className="bg-gray-200">
                <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
                    <div className="flex justify-center items-center h-full">
                        <img
                            src="/hab/h_verde.jpg"
                            className="rounded-lg bg-gray-100 max-w-md w-full md:max-w-md md:w-auto"
                        />
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Habitación Verde</h2>
                        <p className="mt-4 text-gray-500 mb-8">
                            Sumérgete en el oasis de la naturaleza con nuestra Habitación Verde. Cada detalle, desde las paredes hasta los accesorios, refleja la serenidad y frescura que solo la naturaleza puede ofrecer. La cortina Melbourne, con su diseño meticuloso, se convierte en la pieza central que fusiona la elegancia y la funcionalidad, proporcionándote privacidad y control de la luz con estilo.

                            Inspirada en la exuberante vegetación, la paleta de tonos verdes te envolverá en un ambiente relajante y revitalizante. Cada rincón está cuidadosamente decorado con motivos naturales, creando una conexión armoniosa con el mundo exterior.

                            Eleva tu experiencia y transforma tu espacio en un refugio verde que no solo embellece, sino que también rejuvenece. La Habitación Verde es la elección perfecta para aquellos que buscan un escape natural en su hogar u oficina, fusionando la estética moderna con la calidez de la naturaleza.
                        </p>
                        <Link to={'/habitacion'}>
                            <button className="bg-amber-300 text-black font-bold py-3 px-8 rounded-lg mb-4 md:mb-10 md:w-60 hover:bg-amber-800">Atrás</button>
                        </Link>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Verde;
