import React from 'react';
import Footer from '../Footer';
import Navbar from '../Navbar';
import { Link } from 'react-router-dom';

function Rustico() {
    return (
        <>
            <Navbar />
            <div className="bg-gray-200">
                <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
                    <div className="flex justify-center items-center h-full">
                        <img
                            src="/salo/s_rustico.jpg"
                            className="rounded-lg bg-gray-100 max-w-md w-full md:max-w-md md:w-auto"
                        />
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Salón Rústico</h2>
                        <p className="mt-4 text-gray-500 mb-8">
                            Sumérgete en la calidez y el encanto del campo en nuestro Salón Rústico. La cortina Melbourne, con su diseño sencillo, permite que la luz natural ilumine este espacio acogedor, donde cada elemento ha sido elegido para transmitir un ambiente campestre.

                            Los muebles de madera maciza y los detalles artesanales crean una estética rústica y auténtica. Los tonos cálidos y terrosos se combinan con textiles suaves para proporcionar comodidad y un toque hogareño. La chimenea añade un elemento central que agrega no solo calor físico sino también visual.

                            Detalles como las vigas expuestas y los accesorios vintage contribuyen a la autenticidad del salón. Este espacio es perfecto para aquellos que buscan un refugio acogedor, lejos del bullicio de la vida moderna.

                            ¡Transforma tu salón en un retiro rústico donde la simplicidad y la calidez se fusionan para crear un ambiente hogareño!
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

export default Rustico;
