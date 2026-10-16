import {
  Link,
} from 'react-router-dom'

import BrandLogo from '../BrandLogo.jsx'


function Footer() {
  return (
    <footer className="footer">

      <div className="container footer-grid">

        <div className="footer-brand">

          <BrandLogo />

          <p>
            Computadores armados,
            configurados y probados
            antes de su venta.
          </p>

        </div>


        <div className="footer-column">

          <strong>
            PCs
          </strong>

          <Link to="/pcs">
            PCs disponibles
          </Link>

          <Link to="/proceso-armado">
            Proceso de armado
          </Link>

        </div>


        <div className="footer-column">

          <strong>
            GUGLIELMINI
          </strong>

          <Link to="/about">
            Nosotros
          </Link>

          <Link to="/services">
            Servicios
          </Link>

          <Link to="/contact">
            Contacto
          </Link>

        </div>

      </div>


      <div className="container footer-bottom">

        <span>
          © 2026 GUGLIELMINI
        </span>

        <span>
          ARMADO // CONFIGURADO // PROBADO
        </span>

      </div>

    </footer>
  )
}


export default Footer