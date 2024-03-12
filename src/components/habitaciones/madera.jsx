import React from 'react';
import Footer from '../Footer';
import Navbar from '../Navbar';
import { Link } from 'react-router-dom';

function Madera() {
    return (
        <>
            <Navbar />
            <div className="bg-gray-200">
                <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
                    <div className="flex justify-center items-center h-full">
                        <img
                            src="/hab/h_madera.jpg"
                            className="rounded-lg bg-gray-100 max-w-md w-full md:max-w-md md:w-auto"
                        />
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Habitación Madera</h2>
                        <p className="mt-4 text-gray-500 mb-8">
                            Adéntrate en la calidez y la autenticidad de nuestra Habitación de Madera. Cada detalle de este espacio está cuidadosamente diseñado para crear una atmósfera acogedora y hogareña, resaltando la belleza natural de la madera.

                            La cortina Melbourne, con su elegancia sutil, complementa perfectamente la estética cálida y rústica de la habitación. Proporciona privacidad y control de la luz, mientras permite que los tonos naturales de la madera destaquen en todo su esplendor.

                            Con muebles y accesorios de madera bien seleccionados, esta habitación se convierte en un refugio tranquilo y relajante. Los tonos terrosos crean un ambiente sereno que invita al descanso y la contemplación, proporcionando un equilibrio armonioso entre lo natural y lo elegante.

                            ¡Transforma tu espacio en un retiro de madera donde la comodidad y la autenticidad se entrelazan para crear una experiencia única!
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

export default Madera;
