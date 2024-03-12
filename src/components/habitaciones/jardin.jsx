import React from 'react';
import Footer from '../Footer';
import Navbar from '../Navbar';
import { Link } from 'react-router-dom';

function Jardin() {
    return (
        <>
            <Navbar />
            <div className="bg-gray-200">
                <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
                    <div className="flex justify-center items-center h-full">
                        <img
                            src="/hab/h_jardin.jpg"
                            className="rounded-lg bg-gray-100 max-w-md w-full md:max-w-md md:w-auto"
                        />
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Habitación Jardin</h2>
                        <p className="mt-4 text-gray-500 mb-8">
                            Bienvenidos al mágico rincón de los pequeños exploradores. Nuestra Habitación Jardín es un oasis de imaginación y diversión, diseñado para acoger a tus niños en un entorno lleno de color y vitalidad.

                            Con sus motivos de jardín y detalles amigables para los niños, cada rincón de esta habitación está pensado para fomentar la creatividad y la alegría. La cortina Melbourne, con su diseño encantador, no solo ofrece privacidad y control de la luz, sino que también se convierte en un lienzo perfecto para los sueños de los más pequeños.

                            Los tonos vibrantes y la decoración lúdica crean un ambiente acogedor que invita a la exploración y al juego. Cada elemento, desde los muebles hasta los accesorios, está pensado para hacer de esta habitación un refugio especial donde los niños puedan sentirse seguros y felices.

                            ¡Transforma la habitación de tus hijos en un jardín encantado donde la diversión y la fantasía nunca terminan!
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

export default Jardin;
