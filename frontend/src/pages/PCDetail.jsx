import {
  ArrowLeft,
  ArrowRight,
  Gauge,
  MessageCircle,
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

import useCart
  from '../hooks/useCart.js'

import {
  pcs,
} from '../data/pcs.js'

import {
  openWhatsApp,
  productPurchaseMessage,
  productQuestionMessage,
  serviceMessage,
} from '../utils/whatsapp.js'

import '../styles/product-detail-commerce.css'


function PCDetail() {
  const {
    slug,
  } = useParams()

  const navigate =
    useNavigate()

  const {
    items,
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


  const isInCart =
    items.some(
      (item) =>
        item.id === pc.id,
    )


  function buyNow() {
    openWhatsApp(
      productPurchaseMessage(pc),
    )
  }


  function askAboutPc() {
    openWhatsApp(
      productQuestionMessage(pc),
    )
  }


  function handleCart() {
    if (isInCart) {
      navigate('/cart')
      return
    }

    addToCart(pc)
  }


  function askAboutUpgrade() {
    openWhatsApp(
      serviceMessage(
        `Upgrade de hardware para ${pc.code} - ${pc.name}`,
      ),
    )
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

              {/* =====================================
                  GALERÍA
              ===================================== */}

              <div className="product-gallery-clean">

                <ProductGallery
                  images={pc.images}
                  name={pc.name}
                />

              </div>


              {/* =====================================
                  INFORMACIÓN PRINCIPAL
              ===================================== */}

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


                {/* =====================================
                    DATOS RÁPIDOS
                ===================================== */}

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


                {/* =====================================
                    PRECIO
                ===================================== */}

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


                {/* =====================================
                    COMPRA / CARRITO
                ===================================== */}

                <div className="product-commerce-primary">

                  <button
                    type="button"
                    className="primary-button product-buy-button"
                    onClick={buyNow}
                  >

                    <MessageCircle
                      size={18}
                    />

                    COMPRAR AHORA

                  </button>


                  <button
                    type="button"
                    className={
                      isInCart
                        ? 'secondary-button product-cart-button product-cart-button--active'
                        : 'secondary-button product-cart-button'
                    }
                    onClick={handleCart}
                  >

                    <ShoppingCart
                      size={18}
                    />

                    {isInCart
                      ? 'VER CARRITO'
                      : 'AGREGAR AL CARRITO'}

                    {isInCart && (
                      <ArrowRight
                        size={16}
                      />
                    )}

                  </button>

                </div>


                {/* =====================================
                    CONSULTA
                ===================================== */}

                <button
                  type="button"
                  className="secondary-button product-consult-button"
                  onClick={askAboutPc}
                >

                  <MessageCircle
                    size={18}
                  />

                  CONSULTAR SOBRE ESTE PC

                </button>


                {/* =====================================
                    CONFIANZA
                ===================================== */}

                <div className="product-proof-line">

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

                Revisa lo que
                <span> realmente importa.</span>

              </h2>

              <p>
                Rendimiento observado,
                componentes instalados
                y pruebas realizadas
                antes de publicar el equipo.
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
                  Preparado para seguir creciendo.
                </h2>

                <p>
                  {pc.upgrade}
                </p>

              </div>


              <button
                type="button"
                className="text-action text-action-button"
                onClick={askAboutUpgrade}
              >

                CONSULTAR UPGRADE

                <Sparkles
                  size={16}
                />

              </button>

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
              {pc.code}
            </span>

            <h2>
              Disponible ahora.
            </h2>

            <p>
              Consulta disponibilidad,
              opciones de pago y coordinación
              de entrega directamente
              por WhatsApp.
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

              <MessageCircle
                size={18}
              />

              COMPRAR POR WHATSAPP

            </button>

          </div>

        </div>

      </section>

    </>
  )
}


export default PCDetail