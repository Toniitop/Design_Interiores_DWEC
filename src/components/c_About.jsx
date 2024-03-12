import React from 'react';
import { Link } from 'react-router-dom';

function c_About() {
    return (
        <>
            <section className="bg-gray-300 mt-12 py-16">
                <div className="container mx-auto text-center bg-white bg-opacity-50 rounded p-8">
                    <img
                        src="/people.jpg" 
                        alt="Descripción de la imagen"
                        className="mx-auto mb-8 rounded"  // mx-auto centra horizontalmente la imagen, mb-4 agrega margen en la parte inferior
                    />
                    <h2 className="text-3xl text-center font-bold underline hover:text-amber-800">Interiorismo Society</h2>
                    <h2 className="text-3xl text-center font-bold mb-8">Transformando Espacios en Hogares con Identidad Propia</h2>
                    <p className="text-lg mb-20 max-w-3xl mx-auto">
                        Bienvenido a <span className="text-amber-600 font-semibold">Interiorismo Society</span>, donde nos dedicamos apasionadamente
                        a la creación de hogares que reflejan la autenticidad y el estilo de vida único de cada individuo. Nuestra especialización se
                        centra en el diseño de interiores, destacando particularmente en tres áreas fundamentales: cocinas, habitaciones y salones. Aquí te
                        detallamos más sobre cada aspecto de nuestro enfoque:
                    </p>

                    {/* Sección de Cocinas */}
                    <div className="mb-8 text-left">
                        <h3 className="text-2xl text-center font-bold mb-4">1. Cocinas Inspiradoras: Fusionando Funcionalidad y Estilo</h3>
                        <p className="text-lg text-center mb-20 max-w-2xl mx-auto">
                            En <span className="text-amber-600 font-semibold">Interiorismo Society</span>, creemos que la cocina es el corazón del hogar,
                            un espacio donde la creatividad culinaria florece. Nuestros diseños se esfuerzan por fusionar la funcionalidad con el estilo,
                            ofreciendo soluciones innovadoras que van desde elegantes islas hasta sistemas de almacenamiento inteligentes. En Interiorismo
                            Society, nos comprometemos a crear cocinas que no solo se adapten perfectamente a tus necesidades prácticas, sino que también inspiren y reflejen tu personalidad única.
                        </p>
                    </div>

                    {/* Sección de Habitaciones */}
                    <div className="mb-8 text-left">
                        <h3 className="text-2xl text-center font-bold mb-4">2. Refugios Personalizados: Noches Únicas y Especiales</h3>
                        <p className="text-lg text-center mb-20 max-w-2xl mx-auto">
                            Cada noche es una oportunidad para el descanso y la renovación. En nuestras habitaciones, nos dedicamos a diseñar refugios personalizados, donde cada detalle, desde la elección
                            de colores hasta la disposición del mobiliario, se cuida meticulosamente. Nuestra meta es crear espacios que se conviertan en oasis de tranquilidad,
                            reflejando no solo tu estilo personal, sino también brindando un ambiente propicio para el descanso y la relajación.</p>
                    </div>

                    {/* Sección de Salones */}
                    <div className="text-left">
                        <h3 className="text-2xl text-center font-bold mb-4">3. Diseño Equilibrado y Acogedor en Salones: El Escenario Principal de la Vida en el Hogar</h3>
                        <p className="text-lg text-center mb-20 max-w-2xl mx-auto">
                            Los salones son el escenario principal de la vida en el hogar. En <span className="text-amber-600 font-semibold">Interiorismo Society</span>,
                            nos esforzamos por crear diseños que logren un equilibrio entre la funcionalidad moderna y el confort acogedor. Cada espacio que diseñamos se
                            adapta cuidadosamente a tu estilo de vida, proporcionando un entorno acogedor donde vivir, relajarse y compartir momentos inolvidables. Nuestro
                            enfoque se centra en la creación de ambientes que se conviertan en el telón de fondo perfecto para tus experiencias cotidianas.
                        </p>
                    </div>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <Link
                            to={"/"}
                            className="rounded-md bg-amber-200 px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-amber-800 hover:text-white focus-visible:outline 
                            focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                            Inicio
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
};

export default c_About;
