import React from 'react';
import Footer from '../Footer';
import Navbar from '../Navbar';
import { Link } from 'react-router-dom';

function Cafe() {
    return (
        <>
            <Navbar />
            <div className="bg-gray-200">
                <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
                    <div className="flex justify-center items-center h-full">
                        <img
                            src="/hab/h_cafe.jpg"
                            className="rounded-lg bg-gray-100 max-w-md w-full md:max-w-md md:w-auto"
                        />
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Habitación Café</h2>
                        <p className="mt-4 text-gray-500 mb-8">
                            Sumérgete en la calidez y comodidad de nuestra Habitación Café. Los tonos terrosos y la decoración cuidadosamente seleccionada crean un ambiente acogedor y elegante. La cortina Melbourne, con su diseño sofisticado, añade un toque de estilo y practicidad a tu espacio.

                            Inspirada en la riqueza del café, esta habitación te envolverá en una paleta de colores cálidos que invitan a la relajación. Cada detalle, desde los muebles hasta los accesorios, refleja la armonía y la serenidad.

                            Disfruta de la versatilidad de este espacio, ideal para momentos de tranquilidad o para recibir a tus seres queridos. La Habitación Café es la elección perfecta para aquellos que buscan un ambiente acogedor y con estilo en su hogar u oficina.
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

export default Cafe;
