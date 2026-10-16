import {
  ArrowLeft,
  BadgeCheck,
  CheckCircle2,
  Cpu,
  Gauge,
  Gamepad2,
  ShieldCheck,
  ShoppingCart,
  Sparkles,
  Zap,
} from 'lucide-react'

import {
  Link,
  useNavigate,
  useParams,
} from 'react-router-dom'

import ProductGallery
  from '../components/ProductGallery.jsx'

import ProductDetailsTabs
  from '../components/ProductDetailsTabs.jsx'

import Reveal
  from '../components/Reveal.jsx'

import {
  useCart,
} from '../context/CartContext.jsx'

import {
  pcs,
} from '../data/pcs.js'


function PCDetail() {
  const {
    slug,
  } = useParams()

  const navigate =
    useNavigate()

  const {
    addToCart,
  } = useCart()


  const pc =
    pcs.find(
      (item) =>
        item.slug === slug,
    )


  if (!pc) {
    return (
      <section className="not-found">

        <h1>
          PC no encontrado
        </h1>

        <Link to="/pcs">
          Volver al catálogo
        </Link>

      </section>
    )
  }


  function addProduct() {
    addToCart(pc)
  }


  function buyNow() {
    addToCart(pc)

    navigate('/cart')
  }


  return (
    <>

      {/* =====================================
          PRODUCTO PRINCIPAL
      ===================================== */}

      <section className="product-detail-page product-detail-clean">

        <div className="product-detail-glow" />


        <div className="container">

          <Link
            to="/pcs"
            className="back-link"
          >

            <ArrowLeft size={17} />

            PCs disponibles

          </Link>


          <Reveal>

            <div className="product-main product-main-clean">

              {/* GALERÍA */}

              <div className="product-gallery-clean">

                <div className="product-gallery-label">

                  <BadgeCheck size={15} />

               
                </div>


                <ProductGallery
                  images={pc.images}
                  name={pc.name}
                />

              </div>


              {/* INFORMACIÓN */}

              <div className="product-information product-information-clean">

                <div className="product-heading-meta">

                  <span className="product-code">
                    {pc.code}
                  </span>


                  <div className="product-status">

                    <span className="status-dot" />

                    {pc.status}

                  </div>

                </div>


                <h1>
                  {pc.name}
                </h1>


                <p className="product-description-short">
                  {pc.description}
                </p>


                {/* DATOS RÁPIDOS */}

                <div className="product-quick-numbers">

                  {pc.highlights.map(
                    (item) => (

                      <div
                        key={item.label}
                      >

                        <span>
                          {item.label}
                        </span>

                        <strong>
                          {item.value}
                        </strong>

                      </div>

                    ),
                  )}

                </div>


                {/* PRECIO */}

                <div className="product-price product-price-clean">

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


                {/* ACCIONES */}

                <div className="product-actions">

                  <button
                    type="button"
                    className="primary-button"
                    onClick={buyNow}
                  >

                    <ShoppingCart
                      size={18}
                    />

                    COMPRAR

                  </button>


                  <button
                    type="button"
                    className="secondary-button"
                    onClick={addProduct}
                  >

                    AGREGAR AL CARRITO

                  </button>

                </div>


                {/* RESUMEN DE CONFIANZA */}

                <div className="product-proof-line">

                  <span>

                    <ShieldCheck
                      size={16}
                    />

                    Probado

                  </span>


                  <span>

                    <Gauge
                      size={16}
                    />

                    Benchmark real

                  </span>


                  <span>

                    <Zap
                      size={16}
                    />

                    Upgrade posible

                  </span>

                </div>

              </div>

            </div>

          </Reveal>

        </div>

      </section>



      {/* =====================================
          INFORMACIÓN INTERACTIVA
      ===================================== */}

      <section className="product-information-hub">

        <div className="container">

          <Reveal>

            <header className="product-hub-header">

              <span className="g-label">
                DETALLES DEL EQUIPO
              </span>

              <h2>
                Especificaciones
                <span> Rendimiento y Componentes. </span>
              </h2>

              <p>
                Rendimiento real,
                configuración de hardware
                y pruebas realizadas.
              </p>

            </header>

          </Reveal>


          <Reveal delay={100}>

            <ProductDetailsTabs
              pc={pc}
            />

          </Reveal>

        </div>

      </section>



      {/* =====================================
          UPGRADE
      ===================================== */}

      <section className="product-upgrade-clean">

        <div className="container">

          <Reveal>

            <div className="upgrade-clean-layout">

              <div className="upgrade-clean-visual">

                <Zap size={42} />

              </div>


              <div>

                <span className="g-label">
                  FUTURA ACTUALIZACIÓN
                </span>

                <h2>
                  Puedes agregar una
                  GPU dedicada.
                </h2>

                <p>
                  {pc.upgrade}
                </p>

              </div>


              <Link
                to="/contact"
                className="text-action"
              >

                CONSULTAR UPGRADE

                <Sparkles
                  size={16}
                />

              </Link>

            </div>

          </Reveal>

        </div>

      </section>



      {/* =====================================
          CIERRE COMERCIAL
      ===================================== */}

      <section className="product-final-cta">

        <div className="container product-final-layout">

          <div>

            <span className="g-label">
              PC-001
            </span>

            <h2>
              Disponible ahora.
            </h2>

            <p>
              Puedes revisar el equipo
              y comprobar su funcionamiento
              antes de comprar.
            </p>

          </div>


          <div className="product-final-price">

            <span>
              PRECIO
            </span>

            <strong>
              $
              {pc.price.toLocaleString(
                'es-CL',
              )}
            </strong>


            <button
              type="button"
              className="primary-button"
              onClick={buyNow}
            >

              <ShoppingCart
                size={18}
              />

              COMPRAR PC

            </button>

          </div>

        </div>

      </section>

    </>
  )
}


export default PCDetail