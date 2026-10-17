import {
  ArrowRight,
  CheckCircle2,
  Cpu,
  MessageCircle,
  ShieldCheck,
  Wrench,
} from 'lucide-react'

import {
  Link,
} from 'react-router-dom'

import Reveal
  from '../components/Reveal.jsx'

import {
  generalContactMessage,
  openWhatsApp,
} from '../utils/whatsapp.js'

import '../styles/about-commerce.css'


const principles = [
  {
    icon: ShieldCheck,
    number: '01',
    title: 'Comprobar antes de publicar',
    description:
      'Un computador no se considera listo solamente porque enciende. Revisamos funcionamiento, estabilidad y comportamiento antes de ofrecerlo.',
  },

  {
    icon: Cpu,
    number: '02',
    title: 'Información clara',
    description:
      'Componentes, características, pruebas realizadas y limitaciones del equipo deben estar claramente identificadas antes de la compra.',
  },

  {
    icon: Wrench,
    number: '03',
    title: 'Pensar en el futuro',
    description:
      'Cuando corresponde, consideramos las posibilidades de actualización para que el equipo pueda seguir creciendo junto a las necesidades del usuario.',
  },
]


function About() {
  function contactUs() {
    openWhatsApp(
      generalContactMessage(),
    )
  }


  return (
    <>

      {/* =====================================
          HERO
      ===================================== */}

      <section className="g-about-page">

        <div className="container">

          <Reveal>

            <header className="g-about-header">

              <h1>
                Guglielmini
                <span> como proyecto </span>
              </h1>


              <p>
                GUGLIELMINI nace como un proyecto
                indepentiente enfocado en computadores, hardware,
                optimización y servicios tecnológicos.
              </p>

            </header>

          </Reveal>



          {/* =====================================
              INTRO
          ===================================== */}

          <div className="g-about-intro">

            <Reveal>

              <div className="g-about-intro-title">

                <span>
                  QUÉ ES GUGLIELMINI
                </span>

                <h2>
                  Más que ensamblar
                  componentes.
                </h2>

              </div>

            </Reveal>


            <Reveal delay={80}>

              <div className="g-about-intro-copy">

                <p>
                  El proyecto nace con la idea de
                  desarrollar computadores que no
                  solamente se vean bien, sino que
                  también puedan ser revisados,
                  configurados y comprobados antes
                  de llegar sus manos.
                </p>


                <p>
                  Cada equipo publicado corresponde
                  a una configuración real. Se
                  documentan sus componentes,
                  características y las pruebas que
                  hayan sido realizadas durante su
                  preparación.
                </p>


                <p>
                  Además del armado y venta de
                  computadores, GUGLIELMINI ofrece
                  servicios de mantenimiento,
                  optimización y actualización de
                  hardware.
                </p>

              </div>

            </Reveal>

          </div>

        </div>

      </section>



      {/* =====================================
          PRINCIPLES
      ===================================== */}

      <section className="g-about-principles">

        <div className="container">

          <Reveal>

            <header className="g-about-section-header">

              <span className="g-label">
                CÓMO TRABAJAMOS
              </span>


              <h2>
                Tres principios
                <span> simples.</span>
              </h2>

            </header>

          </Reveal>


          <div className="g-about-principle-list">

            {principles.map(
              (
                principle,
                index,
              ) => {

                const Icon =
                  principle.icon

                return (
                  <Reveal
                    key={principle.number}
                    delay={
                      index * 70
                    }
                  >

                    <article className="g-about-principle">

                      <span className="g-about-principle-number">

                        {principle.number}

                      </span>


                      <div className="g-about-principle-icon">

                        <Icon
                          size={22}
                        />

                      </div>


                      <div>

                        <h3>
                          {principle.title}
                        </h3>

                        <p>
                          {principle.description}
                        </p>

                      </div>

                    </article>

                  </Reveal>
                )
              },
            )}

          </div>

        </div>

      </section>



      {/* =====================================
          WHAT CLIENT CAN EXPECT
      ===================================== */}

      <section className="g-about-expect">

        <div className="container">

          <div className="g-about-expect-layout">

            <Reveal>

              <div>

                <span className="g-label">
                  QUÉ PUEDES ESPERAR
                </span>


                <h2>
                  Claridad antes
                  de decidir.
                </h2>


                <p>
                  Queremos que puedas entender
                  qué estás comprando, qué puede
                  hacer el equipo y qué pruebas
                  se realizaron sobre él.
                </p>

              </div>

            </Reveal>


            <Reveal delay={100}>

              <div className="g-about-expect-list">

                <span>

                  <CheckCircle2
                    size={17}
                  />

                  Componentes identificados

                </span>


                <span>

                  <CheckCircle2
                    size={17}
                  />

                  Características reales del equipo

                </span>


                <span>

                  <CheckCircle2
                    size={17}
                  />

                  Pruebas documentadas cuando corresponde

                </span>


                <span>

                  <CheckCircle2
                    size={17}
                  />

                  Atención directa antes de comprar

                </span>


                <span>

                  <CheckCircle2
                    size={17}
                  />

                  Posibilidades de upgrade explicadas

                </span>

              </div>

            </Reveal>

          </div>

        </div>

      </section>



      {/* =====================================
          CURRENT PROJECT
      ===================================== */}

      <section className="g-about-current">

        <div className="container">

          <Reveal>

            <div className="g-about-current-layout">

              <div className="g-about-current-code">

                <span>
                  PC-001
                </span>

              </div>


              <div>

                <span className="g-label">
                  PRIMER EQUIPO
                </span>


                <h2>
                  El proceso comienza
                  con una unidad real.
                </h2>


                <p>
                  El PC-001 es el primer equipo
                  disponible de GUGLIELMINI.
                  Su armado, configuración,
                  pruebas y rendimiento están
                  documentados dentro de esta web.
                </p>

              </div>


              <Link
                to="/pcs/pc-001-ryzen-5-5600g"
                className="secondary-button"
              >

                VER PC-001

                <ArrowRight
                  size={17}
                />

              </Link>

            </div>

          </Reveal>

        </div>

      </section>



      {/* =====================================
          FINAL CTA
      ===================================== */}

      <section className="g-about-final">

        <div className="container">

          <Reveal>

            <div className="g-about-final-layout">

              <div>

                <span className="g-label">
                  ¿HABLAMOS?
                </span>


                <h2>
                  Si tienes una duda,
                  pregúntanos directamente.
                </h2>


                <p>
                  Puedes consultar por equipos,
                  componentes, servicios o
                  cualquier parte de nuestro
                  proceso.
                </p>

              </div>


              <div className="g-about-final-actions">

                <Link
                  to="/services"
                  className="secondary-button"
                >

                  VER SERVICIOS

                </Link>


                <button
                  type="button"
                  className="primary-button"
                  onClick={contactUs}
                >

                  <MessageCircle
                    size={17}
                  />

                  CONTACTAR

                </button>

              </div>

            </div>

          </Reveal>

        </div>

      </section>

    </>
  )
}


export default About