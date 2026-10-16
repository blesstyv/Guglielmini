import {
  ArrowRight,
  Check,
  Cpu,
  Gauge,
  HardDrive,
  MemoryStick,
  ShieldCheck,
  Wrench,
  Zap,
} from 'lucide-react'

import {
  Link,
} from 'react-router-dom'

import Reveal
  from '../components/Reveal.jsx'

import {
  pcs,
} from '../data/pcs.js'


function Home() {
  const pc =
    pcs.find(
      (item) =>
        item.status === 'Disponible',
    ) || pcs[0]


  return (
    <>

      {/* ======================================
          HERO
      ====================================== */}

      <section className="g-hero">

        <div className="g-hero-orb" />


        <div className="container g-hero-grid">

          <Reveal
            direction="left"
          >

            <div className="g-hero-content">

              <span className="g-label">
                GUGLIELMINI
              </span>


              <h1>
                Hardware
                <br />

                <span>
                  Probado y optimizado
                </span>
              </h1>


              <p>
                PCs armados,
                configurados y sometidos
                a pruebas reales antes
                de publicarse.
              </p>


              <div className="g-hero-actions">

                <Link
                  to={`/pcs/${pc.slug}`}
                  className="primary-button"
                >
                  VER PC DISPONIBLE

                  <ArrowRight
                    size={18}
                  />
                </Link>


                <Link
                  to="/services"
                  className="secondary-button"
                >
                  SERVICIOS
                </Link>

              </div>


              <div className="g-mini-proof">

                <span>
                  <ShieldCheck
                    size={17}
                  />
                  Validado
                </span>

                <span>
                  <Gauge
                    size={17}
                  />
                  Benchmarks reales
                </span>

                <span>
                  <Wrench
                    size={17}
                  />
                  Upgrade posible
                </span>

              </div>

            </div>

          </Reveal>


          <Reveal
            direction="right"
            delay={150}
          >

            <Link
              to={`/pcs/${pc.slug}`}
              className="hero-product-visual"
            >

              <div className="hero-product-glow" />


              <img
                src={pc.images[0]}
                alt={pc.name}
              />


              <div className="hero-product-price">

                <span>
                  PC-001
                </span>

                <strong>
                  $
                  {pc.price.toLocaleString(
                    'es-CL',
                  )}
                </strong>

              </div>

            </Link>

          </Reveal>

        </div>

      </section>



      {/* ======================================
          MOVING STRIP
      ====================================== */}

      <section className="tech-strip">

        <div className="tech-strip-track">

          <TechItem
            icon={<Cpu />}
            text="RYZEN 5 5600G"
          />

          <TechItem
            icon={<MemoryStick />}
            text="16 GB DUAL CHANNEL"
          />

          <TechItem
            icon={<HardDrive />}
            text="NVMe 1 TB"
          />

          <TechItem
            icon={<Zap />}
            text="850 W GOLD"
          />

          <TechItem
            icon={<Gauge />}
            text="BENCHMARKS REALES"
          />

          <TechItem
            icon={<ShieldCheck />}
            text="0 ERRORES EN PRUEBAS"
          />


          {/* duplicado para loop */}

          <TechItem
            icon={<Cpu />}
            text="RYZEN 5 5600G"
          />

          <TechItem
            icon={<MemoryStick />}
            text="16 GB DUAL CHANNEL"
          />

          <TechItem
            icon={<HardDrive />}
            text="NVMe 1 TB"
          />

          <TechItem
            icon={<Zap />}
            text="850 W GOLD"
          />

        </div>

      </section>



      {/* ======================================
          PC DESTACADO
      ====================================== */}

      <section className="featured-machine">

        <div className="container featured-machine-grid">

          <Reveal>

            <div className="featured-machine-image">

              <img
                src={pc.images[1]}
                alt={pc.name}
              />

              <span className="image-index">
                01 / EQUIPO DISPONIBLE
              </span>

            </div>

          </Reveal>


          <Reveal
            direction="right"
          >

            <div className="featured-machine-info">

              <span className="g-label">
                DISPONIBLE
              </span>


              <h2>
                {pc.name}
              </h2>


              <p>
                {pc.shortDescription}
              </p>


              <div className="featured-spec-line">

                {pc.highlights.map(
                  (item) => (

                    <div
                      key={item.label}
                    >

                      <small>
                        {item.label}
                      </small>

                      <strong>
                        {item.value}
                      </strong>

                    </div>

                  ),
                )}

              </div>


              <div className="featured-price">

                <small>
                  PRECIO
                </small>

                <strong>
                  $
                  {pc.price.toLocaleString(
                    'es-CL',
                  )}
                </strong>

              </div>


              <Link
                to={`/pcs/${pc.slug}`}
                className="text-action"
              >

                EXPLORAR EQUIPO

                <ArrowRight size={17} />

              </Link>

            </div>

          </Reveal>

        </div>

      </section>



      {/* ======================================
          PROCESO — SIN TARJETAS
      ====================================== */}

      <section className="minimal-process">

        <div className="container">

          <Reveal>

            <header className="minimal-section-header">

              <span className="g-label">
                PROCESO
              </span>

              <h2>
                Antes de vender,
                <span>
                  {' '}comprobamos.
                </span>
              </h2>

            </header>

          </Reveal>


          <div className="process-line">

            <ProcessStep
              number="01"
              title="Armado"
              text="Montaje y compatibilidad."
            />

            <ProcessStep
              number="02"
              title="Configuración"
              text="BIOS, Windows y drivers."
            />

            <ProcessStep
              number="03"
              title="Pruebas"
              text="RAM, CPU, SSD y temperaturas."
            />

            <ProcessStep
              number="04"
              title="Gaming"
              text="Rendimiento real en juegos."
            />

          </div>


          <Link
            to="/proceso-armado"
            className="text-action process-action"
          >
            VER PROCESO COMPLETO

            <ArrowRight size={17} />
          </Link>

        </div>

      </section>



      {/* ======================================
          SERVICES CTA
      ====================================== */}

      <section className="home-services-cta">

        <div className="container services-cta-layout">

          <div>

            <span className="g-label">
              SERVICIOS
            </span>

            <h2>
              ¿Ya tienes un PC?
            </h2>

            <p>
              También realizamos armado,
              mantenimiento, optimización
              y upgrades.
            </p>

          </div>


          <Link
            to="/services"
            className="primary-button"
          >
            VER SERVICIOS

            <ArrowRight size={18} />
          </Link>

        </div>

      </section>

    </>
  )
}


function TechItem({
  icon,
  text,
}) {
  return (
    <div className="tech-strip-item">
      {icon}
      <span>{text}</span>
    </div>
  )
}


function ProcessStep({
  number,
  title,
  text,
}) {
  return (
    <Reveal>

      <div className="process-line-item">

        <span>
          {number}
        </span>

        <div>

          <Check size={17} />

          <strong>
            {title}
          </strong>

          <p>
            {text}
          </p>

        </div>

      </div>

    </Reveal>
  )
}


export default Home