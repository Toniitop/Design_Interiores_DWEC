import React from 'react';
import Footer from '../Footer';
import Navbar from '../Navbar';
import { Link } from 'react-router-dom';

function Montana() {
    return (
        <>
            <Navbar />
            <div className="bg-gray-200">
                <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
                    <div className="flex justify-center items-center h-full">
                        <img
                            src="/hab/h_montana.jpg"
                            className="rounded-lg bg-gray-100 max-w-md w-full md:max-w-md md:w-auto"
                        />
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Habitación Montaña</h2>
                        <p className="mt-4 text-gray-500 mb-8">
                            Sumérgete en la serenidad de nuestra Habitación de Montaña, donde cada rincón refleja la majestuosidad de la naturaleza alpina. La cortina Melbourne, con su diseño elegante, enmarca las vistas impresionantes que te transportarán a un refugio tranquilo y acogedor.

                            Inspirada en los tonos de la montaña, la paleta de colores terrosos y frescos crea un ambiente relajante. Muebles de madera maciza y detalles que imitan la naturaleza se combinan para ofrecer una experiencia auténtica y conectada con el entorno.

                            Disfruta de la sensación de estar en las alturas sin salir de tu hogar. La Habitación de Montaña es un refugio perfecto para aquellos que buscan paz y conexión con la belleza natural. Cada elemento, desde los textiles hasta los accesorios, se ha seleccionado cuidadosamente para transmitir la esencia de las montañas.

                            ¡Transforma tu espacio en un santuario de montaña donde la paz y la majestuosidad se unen en perfecta armonía!
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

export default Montana;
