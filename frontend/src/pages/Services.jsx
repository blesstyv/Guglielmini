import {
  ArrowUpRight,
  CheckCircle2,
  Cpu,
  Gauge,
  HardDrive,
  MemoryStick,
  ShieldCheck,
  Sparkles,
  Wrench,
} from 'lucide-react'

import {
  Link,
} from 'react-router-dom'

import Reveal
  from '../components/Reveal.jsx'


const services = [
  {
    icon:
      <Cpu />,

    title:
      'Armado de PC',

    price:
      'Desde $29.990',

    text:
      'Ensamblaje completo utilizando los componentes del cliente.',

    features: [
      'Montaje de componentes',
      'Ordenamiento de cableado',
      'Configuración inicial',
      'Comprobación de encendido',
    ],
  },

  {
    icon:
      <Gauge />,

    title:
      'Optimización Gamer',

    price:
      'Desde $19.990',

    text:
      'Revisión orientada a estabilidad, configuración y rendimiento.',

    features: [
      'Configuración de Windows',
      'Drivers',
      'Revisión de inicio',
      'Pruebas de rendimiento',
    ],
  },

  {
    icon:
      <Sparkles />,

    title:
      'Mantenimiento',

    price:
      'Desde $19.990',

    text:
      'Limpieza y revisión preventiva del computador.',

    features: [
      'Limpieza interna',
      'Revisión visual',
      'Temperaturas',
      'Funcionamiento general',
    ],
  },

  {
    icon:
      <Wrench />,

    title:
      'Upgrade de hardware',

    price:
      'Según componente',

    text:
      'Evaluación e instalación de mejoras compatibles con tu computador.',

    features: [
      'RAM',
      'SSD',
      'GPU',
      'Fuente de poder',
    ],
  },
]


function Services() {
  return (
    <section className="info-page services-page">

      <div className="container">

        <Reveal>

          <div className="info-header">

            <span className="eyebrow">
              GUGLIELMINI
            </span>

            <h1>
              SERVICIOS
              <span> TÉCNICOS.</span>
            </h1>

            <p>
              Servicios orientados a
              computadores gamer,
              mantenimiento, mejoras
              y optimización.
            </p>

          </div>

        </Reveal>


        <div className="service-grid service-grid--commercial">

          {services.map(
            (
              service,
              index,
            ) => (

              <Reveal
                key={service.title}
                delay={
                  index * 80
                }
              >

                <article className="service-card service-card--premium">

                  <div className="service-icon">

                    {service.icon}

                  </div>


                  <span className="service-price">

                    {service.price}

                  </span>


                  <h2>
                    {service.title}
                  </h2>


                  <p>
                    {service.text}
                  </p>


                  <div className="service-features">

                    {service.features.map(
                      (feature) => (

                        <div
                          key={feature}
                        >

                          <CheckCircle2
                            size={15}
                          />

                          <span>
                            {feature}
                          </span>

                        </div>

                      ),
                    )}

                  </div>


                  <Link
                    to={`/contact?service=${encodeURIComponent(
                      service.title,
                    )}`}
                    className="service-link"
                  >

                    CONSULTAR

                    <ArrowUpRight
                      size={16}
                    />

                  </Link>

                </article>

              </Reveal>

            ),
          )}

        </div>


        <Reveal>

          <div className="services-security">

            <ShieldCheck
              size={27}
            />

            <div>

      
              <p>
                Cada servicio se realiza
                según las necesidades y
                componentes específicos
                de cada computador.
              </p>

            </div>

          </div>

        </Reveal>

      </div>

    </section>
  )
}


export default Services