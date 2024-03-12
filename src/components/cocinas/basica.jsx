import React from 'react';
import Footer from '../Footer';
import Navbar from '../Navbar';
import { Link } from 'react-router-dom';

function Basica() {
    return (
        <>
            <Navbar />
            <div className="bg-gray-200">
                <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
                    <div className="flex justify-center items-center h-full">
                        <img
                            src="/coci/c_basica.jpg"
                            className="rounded-lg bg-gray-100 max-w-md w-full md:max-w-md md:w-auto"
                        />
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Cocina Básica</h2>
                        <p className="mt-4 text-gray-500 mb-8">
                            Bienvenido a la Cocina Simple, donde la funcionalidad se combina con la simplicidad para crear un espacio práctico y cómodo. Los elementos de toda la vida, desde la nevera hasta la estufa, se encuentran estratégicamente ubicados para facilitar la preparación de comidas diarias.

                            La paleta de colores neutros y la iluminación natural contribuyen a una atmósfera luminosa y acogedora. Los gabinetes y la disposición están diseñados para maximizar el espacio de almacenamiento, mientras que la mesa central invita a compartir momentos informales y comidas en familia.

                            La Cocina Simple es perfecta para aquellos que valoran la funcionalidad sin sacrificar la comodidad. Este espacio versátil se adapta a las necesidades de la vida cotidiana, proporcionando un entorno acogedor y práctico para las actividades culinarias diarias.

                            ¡Transforma tu cocina en un lugar donde la simplicidad y la funcionalidad son la esencia de la vida cotidiana!
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

export default Basica;
