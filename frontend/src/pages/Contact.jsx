import {
  ArrowRight,
  CircleHelp,
  Gamepad2,
  Headphones,
  ShoppingCart,
  Wrench,
} from 'lucide-react'

import Reveal
  from '../components/Reveal.jsx'

import {
  generalContactMessage,
  openWhatsApp,
  serviceMessage,
  supportMessage,
} from '../utils/whatsapp.js'

import '../styles/contact-commerce.css'


function Contact() {
  function contactGeneral() {
    openWhatsApp(
      generalContactMessage(),
    )
  }


  function contactPurchase() {
    openWhatsApp(
      [
        'Hola, vengo desde la web de GUGLIELMINI.',
        '',
        'Quiero consultar por la compra de un computador.',
        '',
        'Mi consulta es:',
      ].join('\n'),
    )
  }


  function contactServices() {
    openWhatsApp(
      serviceMessage(
        'servicios técnicos y de hardware',
      ),
    )
  }


  function contactSupport() {
    openWhatsApp(
      supportMessage(),
    )
  }


  function contactGaming() {
    openWhatsApp(
      [
        'Hola, vengo desde la web de GUGLIELMINI.',
        '',
        'Quiero realizar una consulta sobre rendimiento, gaming o componentes.',
        '',
        'Mi consulta es:',
      ].join('\n'),
    )
  }


  return (
    <section className="g-contact-page">

      <div className="container">

        {/* =====================================
            HERO
        ===================================== */}

        <Reveal>

          <header className="g-contact-header">

            <span className="g-label">
              CONTACTO
            </span>


            <h1>
              Hablemos.
            </h1>


            <p>
              Elige el motivo de tu consulta.
              Te llevaremos directamente a
              WhatsApp
              para que podamos ayudarte.
            </p>

          </header>

        </Reveal>



        {/* =====================================
            CONTACT OPTIONS
        ===================================== */}

        <div className="g-contact-options">

          <Reveal delay={50}>

            <button
              type="button"
              className="g-contact-option"
              onClick={contactPurchase}
            >

              <div className="g-contact-option-icon">

                <ShoppingCart
                  size={24}
                />

              </div>


              <div className="g-contact-option-content">

                <span>
                  COMPRA
                </span>

                <h2>
                  Quiero comprar un PC
                </h2>

                <p>
                  Consulta por equipos disponibles,
                  métodos de pago o coordinación
                  de entrega.
                </p>

              </div>


              <ArrowRight
                className="g-contact-arrow"
                size={21}
              />

            </button>

          </Reveal>


          <Reveal delay={100}>

            <button
              type="button"
              className="g-contact-option"
              onClick={contactServices}
            >

              <div className="g-contact-option-icon">

                <Wrench
                  size={24}
                />

              </div>


              <div className="g-contact-option-content">

                <span>
                  SERVICIOS
                </span>

                <h2>
                  Necesito un servicio
                </h2>

                <p>
                  Armado, mantenimiento,
                  optimización o actualización
                  de hardware.
                </p>

              </div>


              <ArrowRight
                className="g-contact-arrow"
                size={21}
              />

            </button>

          </Reveal>


          <Reveal delay={150}>

            <button
              type="button"
              className="g-contact-option"
              onClick={contactSupport}
            >

              <div className="g-contact-option-icon">

                <Headphones
                  size={24}
                />

              </div>


              <div className="g-contact-option-content">

                <span>
                  SOPORTE
                </span>

                <h2>
                  Necesito ayuda
                </h2>

                <p>
                  Soporte relacionado con un
                  computador, configuración
                  o servicio realizado.
                </p>

              </div>


              <ArrowRight
                className="g-contact-arrow"
                size={21}
              />

            </button>

          </Reveal>


          <Reveal delay={200}>

            <button
              type="button"
              className="g-contact-option"
              onClick={contactGaming}
            >

              <div className="g-contact-option-icon">

                <Gamepad2
                  size={24}
                />

              </div>


              <div className="g-contact-option-content">

                <span>
                  GAMING Y HARDWARE
                </span>

                <h2>
                  Tengo una duda técnica
                </h2>

                <p>
                  Consulta sobre FPS,
                  componentes, rendimiento
                  o futuras mejoras.
                </p>

              </div>


              <ArrowRight
                className="g-contact-arrow"
                size={21}
              />

            </button>

          </Reveal>


          <Reveal delay={250}>

            <button
              type="button"
              className="g-contact-option"
              onClick={contactGeneral}
            >

              <div className="g-contact-option-icon">

                <CircleHelp
                  size={24}
                />

              </div>


              <div className="g-contact-option-content">

                <span>
                  GENERAL
                </span>

                <h2>
                  Otra consulta
                </h2>

                <p>
                  Para cualquier pregunta
                  que no corresponda a las
                  categorías anteriores.
                </p>

              </div>


              <ArrowRight
                className="g-contact-arrow"
                size={21}
              />

            </button>

          </Reveal>

        </div>
    

      </div>

    </section>
  )
}


export default Contact