import {
  ArrowUpRight,
  MessageCircle,
} from 'lucide-react'

import {
  Link,
} from 'react-router-dom'

import BrandLogo
  from '../BrandLogo.jsx'

import {
  generalContactMessage,
  openWhatsApp,
} from '../../utils/whatsapp.js'


function Footer() {
  function contactUs() {
    openWhatsApp(
      generalContactMessage(),
    )
  }


  return (
    <footer className="g-footer">

      <div className="container">

        <div className="g-footer-top">

          <div className="g-footer-brand">

            <BrandLogo />


            <p>
              Computadores armados,
              configurados y probados
              antes de su publicación.
            </p>


            <button
              type="button"
              className="g-footer-whatsapp"
              onClick={contactUs}
            >

              <MessageCircle
                size={17}
              />

              HABLAR POR WHATSAPP

            </button>

          </div>


          <div className="g-footer-column">

            <strong>
              EQUIPOS
            </strong>


            <Link to="/pcs">

              PCs disponibles

              <ArrowUpRight
                size={13}
              />

            </Link>


            <Link to="/proceso-armado">

              Proceso de armado

              <ArrowUpRight
                size={13}
              />

            </Link>


            <Link to="/cart">

              Carrito

              <ArrowUpRight
                size={13}
              />

            </Link>

          </div>


          <div className="g-footer-column">

            <strong>
              SERVICIOS
            </strong>


            <Link to="/services">

              Armado de PC

              <ArrowUpRight
                size={13}
              />

            </Link>


            <Link to="/services">

              Optimización

              <ArrowUpRight
                size={13}
              />

            </Link>


            <Link to="/services">

              Mantenimiento

              <ArrowUpRight
                size={13}
              />

            </Link>


            <Link to="/services">

              Upgrade

              <ArrowUpRight
                size={13}
              />

            </Link>

          </div>


          <div className="g-footer-column">

            <strong>
              GUGLIELMINI
            </strong>


            <Link to="/about">

              Nosotros

              <ArrowUpRight
                size={13}
              />

            </Link>


            <Link to="/contact">

              Contacto

              <ArrowUpRight
                size={13}
              />

            </Link>


            <button
              type="button"
              onClick={contactUs}
            >

              WhatsApp

              <ArrowUpRight
                size={13}
              />

            </button>

          </div>

        </div>


        <div className="g-footer-bottom">

          <span>
            © 2026 GUGLIELMINI
          </span>


          <span>
            Valparaíso · Chile
          </span>


          <span>
            ARMADO // CONFIGURADO // PROBADO
          </span>

        </div>

      </div>

    </footer>
  )
}


export default Footer