import React from 'react';
import Footer from '../Footer';
import Navbar from '../Navbar';
import { Link } from 'react-router-dom';

function Armonia() {
    return (
        <>
            <Navbar />
            <div className="bg-gray-200">
                <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
                    <div className="flex justify-center items-center h-full">
                        <img
                            src="/salo/s_armonia.jpg"
                            className="rounded-lg bg-gray-100 max-w-md w-full md:max-w-md md:w-auto"
                        />
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Salón Armonía</h2>
                        <p className="mt-4 text-gray-500 mb-8">
                            Ingresa al equilibrio perfecto en nuestro Salón de Armonía, un espacio diseñado para calmar los sentidos y crear un ambiente tranquilo. La elección cuidadosa de tonos suaves y muebles elegantes se combina con la cortina Melbourne, que no solo realza la estética, sino que también filtra la luz de manera suave y relajante.

                            Inspirado en la filosofía de la armonía, cada elemento en este salón ha sido seleccionado para crear un equilibrio visual y emocional. La disposición de los muebles, la iluminación suave y los detalles decorativos contribuyen a una atmósfera serena y equilibrada.

                            Este salón es el lugar perfecto para encontrar la paz interior, relajarse y desconectar del ajetreo diario. Ya sea para meditar, leer o simplemente disfrutar de la quietud, el Salón de Armonía te ofrece un refugio sereno en tu propio hogar.

                            ¡Transforma tu espacio en un santuario de tranquilidad donde la armonía se convierte en un arte!
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

export default Armonia;
