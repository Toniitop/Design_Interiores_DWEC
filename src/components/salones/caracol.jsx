import React from 'react';
import Footer from '../Footer';
import Navbar from '../Navbar';
import { Link } from 'react-router-dom';

function Caracol() {
    return (
        <>
            <Navbar />
            <div className="bg-gray-200">
                <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
                    <div className="flex justify-center items-center h-full">
                        <img
                            src="/salo/s_caracol.jpg"
                            className="rounded-lg bg-gray-100 max-w-md w-full md:max-w-md md:w-auto"
                        />
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Salón Caracol</h2>
                        <p className="mt-4 text-gray-500 mb-8">
                            Adéntrate en la elegancia y la originalidad de nuestro Salón con Escalera de Caracol, donde cada elemento ha sido cuidadosamente elegido para crear un espacio único. La cortina Melbourne complementa la esencia contemporánea y atractiva de la escalera, proporcionando privacidad sin sacrificar la luminosidad.

                            La escalera de caracol, destacando como pieza central, añade un toque artístico y funcional al salón. Su diseño intrincado no solo conecta visualmente los niveles, sino que también crea una sensación de expansión y fluidez en el espacio.

                            La paleta de colores y la disposición de los muebles se han diseñado para resaltar la belleza de la escalera y crear un ambiente acogedor. Este salón es perfecto para aquellos que aprecian la innovación en el diseño de interiores y desean un espacio que inspire conversación y admiración.

                            ¡Transforma tu salón en un lugar donde la originalidad y la funcionalidad se encuentran en perfecta armonía!
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

export default Caracol;
