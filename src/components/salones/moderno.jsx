import React from 'react';
import Footer from '../Footer';
import Navbar from '../Navbar';
import { Link } from 'react-router-dom';

function Moderno() {
    return (
        <>
            <Navbar />
            <div className="bg-gray-200">
                <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
                    <div className="flex justify-center items-center h-full">
                        <img
                            src="/salo/s_moderno.jpg"
                            className="rounded-lg bg-gray-100 max-w-md w-full md:max-w-md md:w-auto"
                        />
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Salón Moderno</h2>
                        <p className="mt-4 text-gray-500 mb-8">
                            Descubre la elegancia contemporánea en nuestro Salón Moderno con Detalles cuidadosamente seleccionados. La cortina Melbourne se convierte en un elemento funcional y estilizado, filtrando la luz de manera suave y creando una atmósfera acogedora.

                            Los detalles juegan un papel clave en este espacio. Desde la iluminación de diseño hasta los cojines decorativos, cada elemento ha sido elegido para aportar personalidad y sofisticación. Los muebles de líneas limpias y los tonos neutros crean una paleta moderna y relajante.

                            La mezcla de materiales, como el vidrio y el metal, añade un toque industrial chic, mientras que las obras de arte contemporáneo dan vida a las paredes. Este salón es un lienzo de modernidad que invita a la conversación y la contemplación.

                            ¡Transforma tu salón en un espacio moderno donde la atención a los detalles eleva la experiencia a un nivel superior!
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

export default Moderno;
