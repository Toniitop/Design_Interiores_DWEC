import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './Routers/Home'
import './index.css'
import { createBrowserRouter, Route, RouterProvider } from 'react-router-dom'
import Error404 from './components/Error404.jsx'
import About from './Routers/About.jsx'
import Disenos from './Routers/Disenos.jsx'
import Habitacion from './components/habitaciones/habitacionMain.jsx'
import H_Verde from './components/habitaciones/verde.jsx'
import H_Cafe from './components/habitaciones/cafe.jsx'
import H_Jardin from './components/habitaciones/jardin.jsx'
import H_Madera from './components/habitaciones/madera.jsx'
import H_Montana from './components/habitaciones/montana.jsx'
import Salon from './components/salones/salonMain.jsx'
import S_Armonia from './components/salones/armonia.jsx'
import S_Caracol from './components/salones/caracol.jsx'
import S_Cosmpolita from './components/salones/cosmopolita.jsx'
import S_Moderno from './components/salones/moderno.jsx'
import S_Rustico from './components/salones/rustico.jsx'
import Cocina from './components/cocinas/cocinaMain.jsx'
import C_Basica from './components/cocinas/basica.jsx'
import C_Diafana from './components/cocinas/diafana.jsx'
import C_Fiesta from './components/cocinas/fiesta.jsx'
import C_Gris from './components/cocinas/gris.jsx'
import C_Simple from './components/cocinas/simple.jsx'

const router = createBrowserRouter([
  {
    path:"/",
    element: <Home />,
    errorElement: <Error404 />
  },
  {
    path:"/about",
    element: <About />,
    errorElement: <Error404 />
  },
  {
    path:"/disenos",
    element: <Disenos />,
    errorElement: <Error404 />
  },
  {
    path:'/habitacion',
    element:<Habitacion />,
    errorElement: <Error404 />
  },
  {
    path:'/verde',
    element: <H_Verde />,
    errorElement: <Error404 />
  },
  {
    path:'/cafe',
    element: <H_Cafe />,
    errorElement: <Error404 />
  },
  {
    path:'/jardin',
    element: <H_Jardin />,
    errorElement: <Error404 />
  },
  {
    path:'/madera',
    element: <H_Madera />,
    errorElement: <Error404 />
  },
  {
    path:'/montana',
    element: <H_Montana />,
    errorElement: <Error404 />
  },
  {
    path:'/salon',
    element: <Salon />,
    errorElement: <Error404 />
  },
  {
    path:'/armonia',
    element: <S_Armonia />,
    errorElement: <Error404 />
  },
  {
    path:'/caracol',
    element: <S_Caracol />,
    errorElement: <Error404 />
  },
  {
    path:'/cosmopolita',
    element: <S_Cosmpolita />,
    errorElement: <Error404 />
  },
  {
    path:'/moderno',
    element: <S_Moderno />,
    errorElement: <Error404 />
  },
  {
    path:'/rustico',
    element: <S_Rustico />,
    errorElement: <Error404 />
  },
  {
    path:'/cocina',
    element: <Cocina />,
    errorElement: <Error404 />
  },
  {
    path:'/basica',
    element: <C_Basica />,
    errorElement: <Error404 />
  },
  {
    path:'/diafana',
    element: <C_Diafana />,
    errorElement: <Error404 />
  },
  {
    path:'/fiesta',
    element: <C_Fiesta />,
    errorElement: <Error404 />
  },
  {
    path:'/gris',
    element: <C_Gris />,
    errorElement: <Error404 />
  },
  {
    path:'/simple',
    element: <C_Simple />,
    errorElement: <Error404 />
  },

])
//apuntamos al routers y se le pone el nombre, luego en cada archivo del routers apuntamos a la carpeta componentes
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
