import {
  ArrowRight,
  Check,
  Cpu,
  Gauge,
  MessageCircle,
  ShieldCheck,
  Wrench,
} from 'lucide-react'

import {
  useState,
} from 'react'

import Reveal
  from '../components/Reveal.jsx'

import {
  openWhatsApp,
  serviceMessage,
} from '../utils/whatsapp.js'

import '../styles/services-commerce.css'


const services = [
  {
    id: 'armado',

    icon: Cpu,

    eyebrow: 'ENSAMBLAJE',

    title: 'Armado de PC',

    price: 'Desde $39.990',

    description:
      'Montaje completo de computadores, organización del cableado y revisión física de los componentes.',

    details: [
      'Montaje completo del hardware',
      'Cable management',
      'Configuración inicial de BIOS/UEFI',
      'Instalación y revisión de drivers',
      'Comprobación general del equipo',
    ],
  },

  {
    id: 'optimizacion',

    icon: Gauge,

    eyebrow: 'RENDIMIENTO',

    title: 'Optimización Gamer',

    price: 'Desde $29.990',

    description:
      'Configuración orientada a mejorar estabilidad, rendimiento y comportamiento general del computador.',

    details: [
      'Revisión de configuración de Windows',
      'Configuración de drivers',
      'Ajustes básicos de rendimiento',
      'Revisión de temperaturas',
      'Comprobación mediante pruebas reales',
    ],
  },

  {
    id: 'mantenimiento',

    icon: ShieldCheck,

    eyebrow: 'MANTENIMIENTO',

    title: 'Mantenimiento de PC',

    price: 'Desde $24.990',

    description:
      'Revisión preventiva del computador para mantener temperaturas, limpieza y funcionamiento adecuados.',

    details: [
      'Inspección general del equipo',
      'Limpieza física básica',
      'Revisión de temperaturas',
      'Comprobación de almacenamiento',
      'Evaluación del estado general',
    ],
  },

  {
    id: 'upgrade',

    icon: Wrench,

    eyebrow: 'ACTUALIZACIÓN',

    title: 'Upgrade de Hardware',

    price: 'Según componente',

    description:
      'Evaluación de mejoras compatibles según el equipo, presupuesto y objetivo de rendimiento.',

    details: [
      'Revisión de compatibilidad',
      'Recomendación de componentes',
      'Instalación del nuevo hardware',
      'Configuración posterior',
      'Pruebas de funcionamiento',
    ],
  },
]


function Services() {
  const [
    activeService,
    setActiveService,
  ] = useState('armado')


  const selected =
    services.find(
      (service) =>
        service.id === activeService,
    )


  function askAboutService() {
    openWhatsApp(
      serviceMessage(
        selected.title,
      ),
    )
  }


  return (
    <>

      {/* =====================================
          HERO
      ===================================== */}

      <section className="g-services-page">

        <div className="container">

          <Reveal>

            <header className="g-services-header">

              <span className="g-label">
                SERVICIOS
              </span>


              <h1>
                Tu PC,
                <span> bien preparado.</span>
              </h1>


              <p>
                Armado, mantenimiento,
                optimización y mejoras de hardware
                con un proceso técnico claro y
                atención directa.
              </p>

            </header>

          </Reveal>



          {/* =====================================
              SERVICE SELECTOR
          ===================================== */}

          <div className="g-services-layout">

            <div className="g-services-list">

              {services.map(
                (
                  service,
                  index,
                ) => {

                  const Icon =
                    service.icon

                  const isActive =
                    activeService ===
                    service.id


                  return (
                    <Reveal
                      key={service.id}
                      delay={
                        index * 50
                      }
                    >

                      <button
                        type="button"
                        className={
                          isActive
                            ? 'g-service-row g-service-row--active'
                            : 'g-service-row'
                        }
                        onClick={() =>
                          setActiveService(
                            service.id,
                          )
                        }
                      >

                        <div className="g-service-row-icon">

                          <Icon
                            size={22}
                          />

                        </div>


                        <div className="g-service-row-content">

                          <span>
                            {service.eyebrow}
                          </span>

                          <strong>
                            {service.title}
                          </strong>

                        </div>


                        <div className="g-service-row-price">

                          {service.price}

                        </div>


                        <ArrowRight
                          className="g-service-row-arrow"
                          size={19}
                        />

                      </button>

                    </Reveal>
                  )
                },
              )}

            </div>



            {/* =====================================
                ACTIVE SERVICE
            ===================================== */}

            <Reveal delay={100}>

              <aside className="g-service-detail">

                <div className="g-service-detail-top">

                  <span className="g-label">
                    {selected.eyebrow}
                  </span>


                  <strong>
                    {selected.price}
                  </strong>

                </div>


                <h2>
                  {selected.title}
                </h2>


                <p className="g-service-description">

                  {selected.description}

                </p>


                <div className="g-service-includes">

                  <span>
                    EL SERVICIO PUEDE INCLUIR
                  </span>


                  <ul>

                    {selected.details.map(
                      (detail) => (

                        <li
                          key={detail}
                        >

                          <Check
                            size={15}
                          />

                          {detail}

                        </li>

                      ),
                    )}

                  </ul>

                </div>


                <button
                  type="button"
                  className="primary-button g-service-contact"
                  onClick={askAboutService}
                >

                  <MessageCircle
                    size={18}
                  />

                  CONSULTAR POR WHATSAPP

                </button>


                <small>
                  El valor final puede variar
                  según el equipo, componentes
                  y trabajo requerido.
                </small>

              </aside>

            </Reveal>

          </div>

        </div>

      </section>



      {/* =====================================
          PROCESS
      ===================================== */}

      <section className="g-service-process">

        <div className="container">

          <Reveal>

            <div className="g-service-process-header">

              <span className="g-label">
                CÓMO TRABAJAMOS
              </span>

              <h2>
                Un proceso simple.
              </h2>

            </div>

          </Reveal>


          <div className="g-service-process-line">

            <Reveal delay={50}>

              <div>

                <span>
                  01
                </span>

                <strong>
                  Conversamos
                </strong>

                <p>
                  Revisamos qué necesitas
                  y el estado de tu equipo.
                </p>

              </div>

            </Reveal>


            <Reveal delay={100}>

              <div>

                <span>
                  02
                </span>

                <strong>
                  Evaluamos
                </strong>

                <p>
                  Definimos el trabajo,
                  compatibilidad y alcance.
                </p>

              </div>

            </Reveal>


            <Reveal delay={150}>

              <div>

                <span>
                  03
                </span>

                <strong>
                  Trabajamos
                </strong>

                <p>
                  Realizamos el servicio
                  acordado sobre el equipo.
                </p>

              </div>

            </Reveal>


            <Reveal delay={200}>

              <div>

                <span>
                  04
                </span>

                <strong>
                  Verificamos
                </strong>

                <p>
                  Revisamos funcionamiento
                  antes de finalizar.
                </p>

              </div>

            </Reveal>

          </div>

        </div>

      </section>

    </>
  )
}


export default Services