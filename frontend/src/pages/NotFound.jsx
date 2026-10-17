import {
  ArrowLeft,
  Home,
  Search,
} from 'lucide-react'

import {
  Link,
} from 'react-router-dom'

import '../styles/not-found.css'


function NotFound() {
  return (
    <section className="g-not-found">

      <div className="g-not-found-content">

        <span className="g-not-found-code">
          404
        </span>


        <span className="g-label">
          PÁGINA NO ENCONTRADA
        </span>


        <h1>
          Este enlace
          <span> no existe.</span>
        </h1>


        <p>
          La dirección puede haber cambiado
          o la página que intentas visitar
          no está disponible.
        </p>


        <div className="g-not-found-actions">

          <Link
            to="/"
            className="primary-button"
          >

            <Home
              size={17}
            />

            VOLVER AL INICIO

          </Link>


          <Link
            to="/pcs"
            className="secondary-button"
          >

            <Search
              size={17}
            />

            VER PCs

          </Link>

        </div>


        <button
          type="button"
          className="g-not-found-back"
          onClick={() =>
            window.history.back()
          }
        >

          <ArrowLeft
            size={15}
          />

          Volver a la página anterior

        </button>

      </div>

    </section>
  )
}


export default NotFound