import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { getProduct } from '@/data/products'
import { ProductGallery } from '@/components/product/ProductGallery'
import { PriceCapsule } from '@/components/product/PriceCapsule'
import { AddToCartButton } from '@/components/product/AddToCartButton'
import { WhatsAppButton } from '@/components/WhatsAppButton'
import { JsonLd } from '@/components/JsonLd'
import { productPurchaseMessage } from '@/lib/whatsapp'
import { site } from '@/lib/site'

export async function generateMetadata({ params }: PageProps<'/pcs/[slug]'>): Promise<Metadata> {
  const p = getProduct((await params).slug)
  if (!p) return {}
  return {
    title: `${p.name} (${p.code})`,
    description: `${p.summary} Armado, configurado y probado antes de publicarse.`,
    alternates: { canonical: `/pcs/${p.slug}` },
    openGraph: { images: p.images[0] ? [{ url: p.images[0].src, alt: p.images[0].alt }] : undefined },
  }
}

export default async function ProductOverview({ params }: PageProps<'/pcs/[slug]'>) {
  const p = getProduct((await params).slug)!
  const base = `/pcs/${p.slug}`

  return (
    <article>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Product',
          name: p.name,
          sku: p.code,
          description: p.description,
          image: p.images.map((i) => `${site.url}${i.src}`),
          brand: { '@type': 'Brand', name: site.name },
        }}
      />
      <section className="wrap grid items-center gap-10 pb-16 pt-8 lg:grid-cols-[1.1fr_1fr] lg:gap-14 lg:pt-12">
        <ProductGallery images={p.images} code={p.code} transitionName={`media-${p.id}`} />
        <div>
          <p className="t-small enter-up font-semibold text-violet">{p.condition}</p>
          <h1 className="t-headline mt-2">
            <span className="line-mask">
              <span>{p.name}</span>
            </span>
          </h1>
          <p className="t-intro enter-up mt-5 max-w-[30ch] text-slate" style={{ '--d': 150 } as React.CSSProperties}>
            {p.description}
          </p>
          <div className="enter-up mt-8" style={{ '--d': 250 } as React.CSSProperties}>
            <PriceCapsule product={p} showNote />
          </div>
          <div className="enter-up mt-6 flex flex-wrap gap-3" style={{ '--d': 330 } as React.CSSProperties}>
            <WhatsAppButton message={productPurchaseMessage(p)}>Consultar compra</WhatsAppButton>
            <AddToCartButton product={p} />
          </div>
        </div>
      </section>

      <section aria-labelledby="claves" className="bg-porcelain py-20">
        <div className="wrap-wide">
          <h2 id="claves" className="t-headline reveal max-w-[18ch]">
            Lo esencial, de un vistazo.
          </h2>
          <ul className="mt-12 grid grid-cols-2 gap-3 lg:grid-cols-4">
            {p.highlights.map((h) => (
              <li key={h.label} className="tile reveal flex min-h-40 flex-col justify-between bg-white p-6 sm:p-7">
                <span className="t-small text-slate">{h.label}</span>
                <span>
                  <span className="mb-3 block h-1 w-8 rounded-full bg-gold" aria-hidden />
                  <span className="t-stat text-violet">{h.value}</span>
                </span>
              </li>
            ))}
          </ul>
          <div className="mt-3 grid gap-3 md:grid-cols-2">
            <Link href={`${base}/especificaciones`} className="tile tile-light keyline group reveal flex min-h-48 flex-col justify-between bg-white p-7">
              <span className="t-title">Ficha técnica completa</span>
              <span className="link inline-flex items-center gap-1.5">
                Ver los 8 componentes <ArrowRight size={16} aria-hidden className="transition-transform duration-500 ease-[var(--ease-out-expo)] group-hover:translate-x-1" />
              </span>
            </Link>
            <Link href={`${base}/rendimiento`} className="tile keyline group reveal flex min-h-48 flex-col justify-between bg-white p-7">
              <span className="t-title">Pruebas y FPS medidos</span>
              <span className="link inline-flex items-center gap-1.5">
                Ver resultados reales <ArrowRight size={16} aria-hidden className="transition-transform duration-500 ease-[var(--ease-out-expo)] group-hover:translate-x-1" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      <section aria-labelledby="crecer" className="wrap grid gap-10 py-20 md:grid-cols-2 md:gap-16">
        <div className="reveal">
          <h2 id="crecer" className="t-headline">
            Listo para crecer.
          </h2>
          <p className="t-intro mt-5 text-slate">{p.upgrade}</p>
          <Link href="/services/upgrade" className="link mt-5 inline-flex items-center gap-1.5">
            Servicio de upgrade de hardware <ArrowRight size={16} aria-hidden />
          </Link>
        </div>
        <aside aria-labelledby="notas" className="tile tile-light reveal p-8">
          <h2 id="notas" className="t-label">
            Antes de comprar
          </h2>
          <ul className="mt-4 grid gap-3 text-slate">
            {p.notes.map((n) => (
              <li key={n} className="flex gap-3">
                <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-violet" aria-hidden />
                {n}
              </li>
            ))}
          </ul>
        </aside>
      </section>
    </article>
  )
}
