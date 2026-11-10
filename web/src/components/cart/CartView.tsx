'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useRef } from 'react'
import { useCart } from '../CartProvider'
import { WhatsAppButton } from '../WhatsAppButton'
import { formatCLP } from '@/lib/format'
import { cartMessage } from '@/lib/whatsapp'
import { isCommercialDataConfirmed } from '@/lib/availability'

export function CartView() {
  const { ready, items, total, remove } = useCart()
  const heading = useRef<HTMLHeadingElement>(null)

  if (!ready) {
    return (
      <div className="wrap py-24 text-center" aria-busy="true">
        <p className="text-slate">Cargando tu carrito…</p>
      </div>
    )
  }

  if (items.length === 0) {
    return (
      <div className="wrap py-28 text-center">
        <h1 ref={heading} tabIndex={-1} className="t-display">
          <span className="line-mask">
            <span>Tu carrito está vacío.</span>
          </span>
        </h1>
        <p className="t-intro enter-up mx-auto mt-5 max-w-[30ch] text-slate">Agrega un equipo desde su ficha para consultarlo por WhatsApp.</p>
        <Link href="/pcs" className="pill pill-primary enter-up mt-8">
          Ver equipos
        </Link>
      </div>
    )
  }

  const anyUnconfirmed = items.some((i) => !isCommercialDataConfirmed(i))

  return (
    <div className="wrap pb-24 pt-16 md:pt-24">
      <h1 ref={heading} tabIndex={-1} className="t-display text-center">
        <span className="line-mask">
          <span>Revisa tu selección.</span>
        </span>
      </h1>
      <ul className="mt-14 border-t border-keyline" aria-label="Equipos seleccionados">
        {items.map((item) => (
          <li key={item.id} className="swap-in grid grid-cols-[6rem_1fr] gap-6 border-b border-keyline py-8 sm:grid-cols-[9rem_1fr_auto]">
            <div className="tile relative aspect-square bg-porcelain" style={{ borderRadius: 20 }}>
              {item.images[0] && <Image src={item.images[0].src} alt="" fill sizes="9rem" className="object-contain p-2" />}
            </div>
            <div>
              <h2 className="t-title">
                <Link href={`/pcs/${item.slug}`} className="hover:text-violet">
                  {item.name}
                </Link>
              </h2>
              <p className="mt-1 text-slate">{item.summary}</p>
            </div>
            <div className="col-start-2 flex items-center justify-between gap-4 sm:col-start-3 sm:flex-col sm:items-end">
              <p className="t-title tnum">{formatCLP(item.price)}</p>
              <button
                type="button"
                className="link t-small min-h-11"
                onClick={() => {
                  remove(item.id)
                  heading.current?.focus()
                }}
              >
                Quitar<span className="sr-only"> {item.name}</span>
              </button>
            </div>
          </li>
        ))}
      </ul>
      <section aria-labelledby="resumen" className="ml-auto mt-10 max-w-md">
        <h2 id="resumen" className="sr-only">
          Resumen
        </h2>
        <dl className="grid gap-3">
          <div className="flex justify-between text-slate">
            <dt>Equipos</dt>
            <dd className="tnum">{items.length}</dd>
          </div>
          <div className="flex items-baseline justify-between border-t border-keyline pt-4">
            <dt className="t-label">Total</dt>
            <dd className="t-headline tnum" aria-live="polite">
              {formatCLP(total)}
            </dd>
          </div>
        </dl>
        <p className="t-small mt-4 text-slate">{anyUnconfirmed ? 'Confirmamos precio, pago y entrega por WhatsApp.' : 'Coordinamos pago y entrega por WhatsApp.'}</p>
        <WhatsAppButton message={cartMessage(items, total)} className="mt-6 w-full">
          Continuar por WhatsApp
        </WhatsAppButton>
        <p className="mt-5 text-center">
          <Link href="/pcs" className="link t-small">
            Seguir viendo equipos
          </Link>
        </p>
      </section>
    </div>
  )
}
