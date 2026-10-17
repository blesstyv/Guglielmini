import {
  ArrowRight,
  CheckCircle2,
  Cpu,
  Gauge,
  HardDrive,
  MemoryStick,
  MessageCircle,
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

import {
  openWhatsApp,
  productPurchaseMessage,
} from '../utils/whatsapp.js'

import '../styles/home-final.css'


function Home() {
  const pc =
    pcs.find(
      (item) =>
        item.status === 'Disponible',
    ) || pcs[0]


  function buyPc() {
    openWhatsApp(
      productPurchaseMessage(pc),
    )
  }


  return (
    <>

      {/* =====================================
          HERO
      ===================================== */}

      <section className="g-home-hero">

        <div className="g-home-hero-glow" />


        <div className="container g-home-hero-grid">

          <Reveal
            direction="left"
          >

            <div className="g-home-hero-copy">

              <span className="g-label">
                GUGLIELMINI
              </span>


              <h1 className="g-home-hero-title">

                <span className="g-home-hero-title-main">
                  PCs Armados
                </span>

                <span className="g-home-hero-title-accent">
                  configurados y
                </span>

                <span className="g-home-hero-title-accent">
                  disponibles.
                </span>

              </h1>


              <p>
                Equipos configurados y revisados
                antes de publicarse, con sus
                componentes, pruebas y rendimiento
                claramente informados.
              </p>


              <div className="g-home-hero-actions">

                <Link
                  to={`/pcs/${pc.slug}`}
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
                  onClick={buyPc}
                >

                  <MessageCircle
                    size={17}
                  />

                  COMPRAR AHORA

                </button>

              </div>


              <div className="g-home-proof">

                <span>

                  <ShieldCheck
                    size={16}
                  />

                  Equipo probado

                </span>


                <span>

                  <Gauge
                    size={16}
                  />

                  Benchmarks reales

                </span>


                <span>

                  <Wrench
                    size={16}
                  />

                  Upgrade posible

                </span>

              </div>

            </div>

          </Reveal>



          <Reveal
            direction="right"
            delay={120}
          >

            <div className="g-home-product-visual">

              <Link
                to={`/pcs/${pc.slug}`}
                className="g-home-product-image"
              >

                <img
                  src={pc.images[0]}
                  alt={pc.name}
                />

              </Link>


              <div className="g-home-product-floating">

                <span>
                  {pc.code}
                </span>

                <strong>
                  $
                  {pc.price.toLocaleString(
                    'es-CL',
                  )}
                </strong>

              </div>


            </div>

          </Reveal>

        </div>

      </section>



      {/* =====================================
          TECH STRIP
      ===================================== */}

      <section className="g-home-strip">

        <div className="g-home-strip-track">

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
            text="PRUEBAS REALES"
          />

          <TechItem
            icon={<ShieldCheck />}
            text="PC-001 VALIDADO"
          />


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



      {/* =====================================
          FEATURED PC
      ===================================== */}

      <section className="g-home-featured">

        <div className="container g-home-featured-grid">

          <Reveal>

            <div className="g-home-featured-image">

              <img
                src={pc.images[1]}
                alt={`Interior de ${pc.name}`}
              />


              <span>
                PC-001 / EQUIPO DISPONIBLE
              </span>

            </div>

          </Reveal>


          <Reveal
            direction="right"
          >

            <div className="g-home-featured-info">

              <span className="g-label">
                EQUIPO ACTUAL
              </span>


              <h2>
                {pc.name}
              </h2>


              <p>
                {pc.description}
              </p>


              <div className="g-home-featured-specs">

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


              <div className="g-home-featured-price">

                <span>
                  PRECIO
                </span>

                <strong>

                  $
                  {pc.price.toLocaleString(
                    'es-CL',
                  )}

                </strong>

              </div>


              <div className="g-home-featured-actions">

                <Link
                  to={`/pcs/${pc.slug}`}
                  className="primary-button"
                >

                  VER EQUIPO

                  <ArrowRight
                    size={17}
                  />

                </Link>


                <button
                  type="button"
                  className="secondary-button"
                  onClick={buyPc}
                >

                  <MessageCircle
                    size={17}
                  />

                  CONSULTAR COMPRA

                </button>

              </div>

            </div>

          </Reveal>

        </div>

      </section>



      {/* =====================================
          WHY TRUST
      ===================================== */}

      <section className="g-home-trust">

        <div className="container">

          <Reveal>

            <header className="g-home-section-header">

              <span className="g-label">
                ANTES DE PUBLICAR
              </span>


              <h2>
                El equipo se
                <span> comprueba.</span>
              </h2>


              <p>
                La información del PC no se basa
                solamente en especificaciones.
                También registramos pruebas realizadas
                sobre la unidad disponible.
              </p>

            </header>

          </Reveal>


          <div className="g-home-trust-line">

            <TrustItem
              number="01"
              title="Memoria"
              value="0 errores"
              text="MemTest86"
            />


            <TrustItem
              number="02"
              title="Procesador"
              value="0 errores"
              text="Prueba de carga"
            />


            <TrustItem
              number="03"
              title="SSD"
              value="100%"
              text="Vida reportada"
            />


            <TrustItem
              number="04"
              title="Gaming"
              value="Probado"
              text="Uso y benchmarks reales"
            />

          </div>


          <Link
            to="/proceso-armado"
            className="g-home-text-link"
          >

            VER PROCESO COMPLETO

            <ArrowRight
              size={16}
            />

          </Link>

        </div>

      </section>



      {/* =====================================
          SERVICES
      ===================================== */}

      <section className="g-home-services">

        <div className="container g-home-services-layout">

          <Reveal>

            <div>

              <span className="g-label">
                SERVICIOS
              </span>


              <h2>
                También trabajamos
                con tu PC.
              </h2>


              <p>
                Armado, mantenimiento,
                optimización y mejoras de hardware
                con atención directa.
              </p>

            </div>

          </Reveal>


          <Reveal delay={80}>

            <div className="g-home-services-list">

              <span>

                <CheckCircle2
                  size={16}
                />

                Armado de PC

              </span>


              <span>

                <CheckCircle2
                  size={16}
                />

                Optimización Gamer

              </span>


              <span>

                <CheckCircle2
                  size={16}
                />

                Mantenimiento

              </span>


              <span>

                <CheckCircle2
                  size={16}
                />

                Upgrade de hardware

              </span>


              <Link
                to="/services"
                className="primary-button"
              >

                VER SERVICIOS

                <ArrowRight
                  size={17}
                />

              </Link>

            </div>

          </Reveal>

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
    <div className="g-home-strip-item">

      {icon}

      <span>
        {text}
      </span>

    </div>
  )
}


function TrustItem({
  number,
  title,
  value,
  text,
}) {
  return (
    <Reveal>

      <article className="g-home-trust-item">

        <span className="g-home-trust-number">
          {number}
        </span>


        <strong>
          {title}
        </strong>


        <b>
          {value}
        </b>


        <small>
          {text}
        </small>

      </article>

    </Reveal>
  )
}


export default Home