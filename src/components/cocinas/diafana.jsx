import React from 'react';
import Footer from '../Footer';
import Navbar from '../Navbar';
import { Link } from 'react-router-dom';

function Diafana() {
    return (
        <>
            <Navbar />
            <div className="bg-gray-200">
                <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
                    <div className="flex justify-center items-center h-full">
                        <img
                            src="/coci/c_diafana.jpg"
                            className="rounded-lg bg-gray-100 max-w-md w-full md:max-w-md md:w-auto"
                        />
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Cocina Diáfana</h2>
                        <p className="mt-4 text-gray-500 mb-8">
                            Disfruta de la amplitud y la conexión en nuestra Cocina Diáfana, donde la integración de espacios crea un ambiente acogedor y social. La luz natural inunda el área, resaltando los tonos neutros y la disposición abierta que une la cocina con el resto del hogar.

                            Los electrodomésticos modernos y la isla central se convierten en el corazón de esta cocina, proporcionando funcionalidad y un lugar central para la preparación de alimentos y la interacción social. Los detalles decorativos añaden un toque de estilo, haciendo de esta cocina un espacio que se integra perfectamente en la vida cotidiana.

                            La Cocina Diáfana es ideal para aquellos que valoran la conexión y la versatilidad en su hogar. Desde cocinar hasta compartir momentos con familiares y amigos, este espacio abierto te invita a disfrutar de una experiencia culinaria y social única.

                            ¡Transforma tu cocina en un lugar donde la transparencia y la funcionalidad se encuentran en perfecta armonía!
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

export default Diafana;
