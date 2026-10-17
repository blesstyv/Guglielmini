import {
  ArrowLeft,
  ArrowRight,
  MessageCircle,
  ShieldCheck,
  ShoppingCart,
  Trash2,
} from 'lucide-react'

import {
  Link,
} from 'react-router-dom'

import ProductImage
  from '../components/ProductImage.jsx'

import useCart
  from '../hooks/useCart.js'

import {
  cartPurchaseMessage,
  openWhatsApp,
} from '../utils/whatsapp.js'

import '../styles/cart-commerce.css'


function Cart() {
  const {
    items,
    removeFromCart,
    total,
  } = useCart()


  function continuePurchase() {
    if (items.length === 0) {
      return
    }

    openWhatsApp(
      cartPurchaseMessage(
        items,
        total,
      ),
    )
  }


  if (items.length === 0) {
    return (
      <section className="g-cart-empty">

        <div className="g-cart-empty-icon">

          <ShoppingCart
            size={34}
          />

        </div>


        <span className="g-label">
          GUGLIELMINI
        </span>


        <h1>
          Tu carrito está vacío.
        </h1>


        <p>
          Revisa los equipos disponibles
          y agrega el que quieras consultar
          o comprar.
        </p>


        <Link
          to="/pcs"
          className="primary-button"
        >

          VER PCs DISPONIBLES

          <ArrowRight
            size={17}
          />

        </Link>

      </section>
    )
  }


  return (
    <section className="g-cart-page">

      <div className="container">

        {/* =====================================
            HEADER
        ===================================== */}

        <div className="g-cart-header">

          <div>

            <span className="g-label">
              TU COMPRA
            </span>

            <h1>
              Carrito.
            </h1>

            <p>
              Revisa tu selección antes
              de continuar la conversación
              por WhatsApp.
            </p>

          </div>


          <Link
            to="/pcs"
            className="g-cart-back"
          >

            <ArrowLeft
              size={16}
            />

            Seguir viendo PCs

          </Link>

        </div>



        {/* =====================================
            LAYOUT
        ===================================== */}

        <div className="g-cart-layout">

          {/* =====================================
              PRODUCTOS
          ===================================== */}

          <div className="g-cart-products">

            {items.map(
              (pc) => (

                <article
                  className="g-cart-product"
                  key={pc.id}
                >

                  <div className="g-cart-product-image">

                    <ProductImage
                      pc={pc}
                    />

                  </div>


                  <div className="g-cart-product-info">

                    <span className="g-cart-product-code">
                      {pc.code}
                    </span>


                    <h2>
                      {pc.name}
                    </h2>


                    <p>
                      {pc.shortDescription}
                    </p>


                    <Link
                      to={`/pcs/${pc.slug}`}
                      className="g-cart-view-product"
                    >

                      Ver detalles

                      <ArrowRight
                        size={14}
                      />

                    </Link>

                  </div>


                  <div className="g-cart-product-side">

                    <strong>

                      $
                      {pc.price.toLocaleString(
                        'es-CL',
                      )}

                    </strong>


                    <button
                      type="button"
                      className="g-cart-remove"
                      onClick={() =>
                        removeFromCart(
                          pc.id,
                        )
                      }
                      aria-label={
                        `Eliminar ${pc.name} del carrito`
                      }
                    >

                      <Trash2
                        size={17}
                      />

                      Eliminar

                    </button>

                  </div>

                </article>

              ),
            )}

          </div>



          {/* =====================================
              RESUMEN
          ===================================== */}

          <aside className="g-cart-summary">

            <span className="g-label">
              RESUMEN
            </span>


            <h2>
              Tu selección
            </h2>


            <div className="g-cart-summary-line">

              <span>
                Productos
              </span>

              <strong>
                {items.length}
              </strong>

            </div>


            <div className="g-cart-summary-divider" />


            <div className="g-cart-summary-total">

              <span>
                Total
              </span>

              <strong>

                $
                {total.toLocaleString(
                  'es-CL',
                )}

              </strong>

            </div>


            <button
              type="button"
              className="primary-button g-cart-checkout"
              onClick={continuePurchase}
            >

              <MessageCircle
                size={18}
              />

              CONTINUAR POR WHATSAPP

            </button>


            <div className="g-cart-process">

              <ShieldCheck
                size={17}
              />


              <p>
                Al continuar se abrirá
                WhatsApp con el resumen de
                tu selección. La compra no
                se confirma automáticamente.
              </p>

            </div>


            <div className="g-cart-help">

              <span>
                ¿Tienes dudas antes de comprar?
              </span>

              <p>
                Puedes consultar disponibilidad,
                métodos de pago y coordinación
                de entrega directamente por
                WhatsApp.
              </p>

            </div>

          </aside>

        </div>

      </div>

    </section>
  )
}


export default Cart