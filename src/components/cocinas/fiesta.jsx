import React from 'react';
import Footer from '../Footer';
import Navbar from '../Navbar';
import { Link } from 'react-router-dom';

function Fiesta() {
    return (
        <>
            <Navbar />
            <div className="bg-gray-200">
                <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
                    <div className="flex justify-center items-center h-full">
                        <img
                            src="/coci/c_fiesta.jpg"
                            className="rounded-lg bg-gray-100 max-w-md w-full md:max-w-md md:w-auto"
                        />
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Cocina Fiesta</h2>
                        <p className="mt-4 text-gray-500 mb-8">
                            Bienvenido a la Cocina Fiesta, un espacio grandioso y acogedor propio de un entorno campestre. Con amplias encimeras, electrodomésticos modernos y una mesa central, esta cocina es perfecta para celebrar momentos especiales y compartir comidas con familiares y amigos.

                            La abundante luz natural ilumina cada rincón, destacando los tonos cálidos y detalles rústicos que caracterizan este espacio. La isla central se convierte en el epicentro de la actividad, proporcionando espacio para cocinar, socializar y disfrutar de la compañía de tus seres queridos.

                            La Cocina Fiesta es ideal para aquellos que disfrutan de la cocina como una celebración y desean un espacio que refleje la calidez del campo. Desde cenas familiares hasta eventos festivos, este lugar es perfecto para crear recuerdos inolvidables.

                            ¡Transforma tu cocina en un escenario festivo donde la amplitud y la alegría se mezclan en una experiencia culinaria única!
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

export default Fiesta;
