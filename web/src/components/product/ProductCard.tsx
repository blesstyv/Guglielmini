import Image from 'next/image'
import Link from 'next/link'
import { ViewTransition } from 'react'
import type { Product } from '@/lib/types'
import { formatCLP } from '@/lib/format'
import { availabilityLabel } from '@/lib/availability'

/** Tarjeta de catálogo: foto completa del equipo sobre porcelana, nombre y precio. */
export function ProductCard({ product }: { product: Product }) {
  const cover = product.images[0]
  return (
    <article className="tile tile-light group reveal grid items-center md:grid-cols-2">
      <ViewTransition name={`media-${product.id}`} share="hero-media">
        <div className="relative h-[min(50vh,26rem)]">
          {cover && (
            <Image
              src={cover.src}
              alt={cover.alt}
              fill
              sizes="(min-width: 768px) 40vw, 90vw"
              className="object-contain p-8 transition-transform duration-[1200ms] ease-[var(--ease-out-expo)] group-hover:scale-[1.04]"
            />
          )}
        </div>
      </ViewTransition>
      <div className="p-8 md:p-12">
        <p className="t-small inline-flex items-center gap-2 font-semibold">
          <span className="size-2 rounded-full bg-gold ring-1 ring-black/10" aria-hidden />
          {availabilityLabel[product.availability]}
        </p>
        <h2 className="t-headline mt-2">
          <Link href={`/pcs/${product.slug}`} className="after:absolute after:inset-0 after:z-10">
            {product.name}
          </Link>
        </h2>
        <p className="t-intro mt-4 text-slate">{product.summary}</p>
        <div className="mt-8 flex flex-wrap items-center gap-5">
          <span className="pill pill-primary">Ver equipo</span>
          <span className="t-title tnum">{formatCLP(product.price)}</span>
        </div>
      </div>
    </article>
  )
}
