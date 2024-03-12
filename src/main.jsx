import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './Routers/Home'
import './index.css'
import { createBrowserRouter, Route, RouterProvider } from 'react-router-dom'
import Error404 from './components/Error404.jsx'
import About from './Routers/About.jsx'
import Disenos from './Routers/Disenos.jsx'

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

])
//apuntamos al routers y se le pone el nombre, luego en cada archivo del routers apuntamos a la carpeta componentes
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
