import { Link } from "react-router-dom"

function Error404() {
    return (
        <>
            <main className="grid min-h-full h-screen place-items-center bg-amber-200 px-6 py-24 sm:py-32 lg:px-8">
                <div className="text-center">
                <p className="text-base text-xl font-semibold text-red-600">404</p>
                <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Pagina No Encontrada</h1>
                <p className="mt-6 text-base leading-7 text-gray-600">La pagina se ha caido en un hoyo. Habla con el creador. :D</p> 
                <div className="mt-10 flex items-center justify-center gap-x-6">
                    <Link
                    to={"/"}
                    className="rounded-md bg-gray-900 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-500 focus-visible:outline 
                    focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                    Inicio
                    </Link>
                </div>
                </div>
            </main>
        </>
    )
}

export default Error404
