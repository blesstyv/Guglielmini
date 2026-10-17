import {
  ArrowRight,
  Boxes,
  CheckCircle2,
  Cpu,
  Gauge,
  HardDrive,
  MessageCircle,
  MonitorCog,
  ShieldCheck,
  Thermometer,
  Wrench,
} from 'lucide-react'

import {
  Link,
} from 'react-router-dom'

import Reveal
  from '../components/Reveal.jsx'

import {
  openWhatsApp,
} from '../utils/whatsapp.js'

import '../styles/process-commerce.css'


const processSteps = [
  {
    number: '01',
    icon: Boxes,
    title: 'Revisión y compatibilidad',
    description:
      'Antes del montaje se revisan los componentes, conexiones y compatibilidad general de la configuración.',
    points: [
      'Estado físico de componentes',
      'Compatibilidad de hardware',
      'Conectores y alimentación',
    ],
  },

  {
    number: '02',
    icon: Wrench,
    title: 'Ensamblaje',
    description:
      'Los componentes se instalan de forma ordenada, cuidando montaje, conexiones y flujo de aire.',
    points: [
      'Montaje del hardware',
      'Cable management',
      'Revisión de ventilación',
    ],
  },

  {
    number: '03',
    icon: Cpu,
    title: 'BIOS y configuración inicial',
    description:
      'Se realiza el primer encendido y se verifica que los componentes sean reconocidos correctamente.',
    points: [
      'Detección del hardware',
      'Configuración de memoria',
      'Arranque y seguridad',
    ],
  },

  {
    number: '04',
    icon: MonitorCog,
    title: 'Sistema y drivers',
    description:
      'Se prepara el entorno de software y se instalan los controladores necesarios para el funcionamiento del equipo.',
    points: [
      'Configuración de Windows',
      'Drivers de chipset y gráficos',
      'Ajustes iniciales',
    ],
  },

  {
    number: '05',
    icon: Gauge,
    title: 'Pruebas y estabilidad',
    description:
      'El equipo pasa por comprobaciones de memoria, procesador, almacenamiento y temperaturas.',
    points: [
      'Pruebas de memoria',
      'Carga del procesador',
      'Estado del almacenamiento',
    ],
  },

  {
    number: '06',
    icon: ShieldCheck,
    title: 'Validación final',
    description:
      'Cuando corresponde, se realizan pruebas de uso real y benchmarks antes de considerar el equipo listo.',
    points: [
      'Benchmarks reales',
      'Control de temperaturas',
      'Revisión general final',
    ],
  },
]


const validationEvidence = [
  {
    icon: CheckCircle2,
    label: 'Memoria',
    value: '0 errores',
    detail: 'MemTest86 · PC-001',
  },

  {
    icon: Cpu,
    label: 'Procesador',
    value: '0 errores',
    detail: 'Prueba de carga · PC-001',
  },

  {
    icon: HardDrive,
    label: 'SSD',
    value: '100%',
    detail: 'Vida reportada al revisar',
  },

  {
    icon: Thermometer,
    label: 'Temperaturas',
    value: 'Verificadas',
    detail: 'Carga y uso real',
  },
]


function ProcesoArmado() {
  function askAboutProcess() {
    openWhatsApp(
      [
        'Hola, vengo desde la web de GUGLIELMINI.',
        '',
        'Quisiera realizar una consulta sobre el proceso de armado y validación de sus computadores.',
        '',
        'Mi consulta es:',
      ].join('\n'),
    )
  }


  return (
    <>

      {/* =====================================
          HERO
      ===================================== */}

      <section className="g-process-page">

        <div className="container">

          <Reveal>

            <header className="g-process-header">

              <h1>
                Del componente
                <span> al equipo listo.</span>
              </h1>


              <p>
                Un PC no se considera terminado
                solamente porque encienda.
                Cada equipo pasa por montaje,
                configuración y comprobaciones
                antes de publicarse.
              </p>

            </header>

          </Reveal>



          {/* =====================================
              PROCESS
          ===================================== */}

          <div className="g-process-list">

            {processSteps.map(
              (
                step,
                index,
              ) => {

                const Icon =
                  step.icon

                return (
                  <Reveal
                    key={step.number}
                    delay={
                      index * 45
                    }
                  >

                    <article className="g-process-step">

                      <div className="g-process-number">

                        {step.number}

                      </div>


                      <div className="g-process-step-icon">

                        <Icon
                          size={22}
                        />

                      </div>


                      <div className="g-process-step-copy">

                        <h2>
                          {step.title}
                        </h2>

                        <p>
                          {step.description}
                        </p>

                      </div>


                      <div className="g-process-step-points">

                        {step.points.map(
                          (point) => (

                            <span
                              key={point}
                            >

                              <CheckCircle2
                                size={14}
                              />

                              {point}

                            </span>

                          ),
                        )}

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
          REAL VALIDATION
      ===================================== */}

      <section className="g-process-validation">

        <div className="container">

          <Reveal>

            <header className="g-validation-header">

              <div>

                <span className="g-label">
                  VALIDACIÓN REAL
                </span>


                <h2>
                  No solo lo decimos.
                  <span> Lo comprobamos.</span>
                </h2>

              </div>


              <p>
                Estos son algunos de los
                resultados registrados durante
                la preparación del PC-001.
              </p>

            </header>

          </Reveal>


          <div className="g-validation-grid">

            {validationEvidence.map(
              (
                item,
                index,
              ) => {

                const Icon =
                  item.icon

                return (
                  <Reveal
                    key={item.label}
                    delay={
                      index * 60
                    }
                  >

                    <article className="g-validation-item">

                      <Icon
                        size={21}
                      />


                      <span>
                        {item.label}
                      </span>


                      <strong>
                        {item.value}
                      </strong>


                      <small>
                        {item.detail}
                      </small>

                    </article>

                  </Reveal>
                )
              },
            )}

          </div>


          <Reveal delay={220}>

            <div className="g-validation-note">

              <ShieldCheck
                size={21}
              />


              <p>
                Las pruebas pueden variar según
                el hardware y características
                de cada equipo. Los resultados
                mostrados corresponden a pruebas
                realizadas sobre el PC-001.
              </p>

            </div>

          </Reveal>

        </div>

      </section>



      {/* =====================================
          FINAL CTA
      ===================================== */}

      <section className="g-process-final">

        <div className="container">

          <Reveal>

            <div className="g-process-final-layout">

              <div>

                <span className="g-label">
                  GUGLIELMINI
                </span>


                <h2>
                  Un equipo que puedes
                  revisar antes de comprar.
                </h2>


                <p>
                  Consulta por el PC disponible,
                  sus pruebas o cualquier parte
                  de nuestro proceso.
                </p>

              </div>


              <div className="g-process-final-actions">

                <Link
                  to="/pcs"
                  className="primary-button"
                >

                  VER PC DISPONIBLE

                  <ArrowRight
                    size={17}
                  />

                </Link>


                <button
                  type="button"
                  className="secondary-button"
                  onClick={askAboutProcess}
                >

                  <MessageCircle
                    size={17}
                  />

                  CONSULTAR

                </button>

              </div>

            </div>

          </Reveal>

        </div>

      </section>

    </>
  )
}


export default ProcesoArmado