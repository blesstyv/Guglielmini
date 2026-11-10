import Image from 'next/image'
import Link from 'next/link'
import { ViewTransition } from 'react'
import { ArrowRight } from 'lucide-react'
import { products } from '@/data/products'
import { services } from '@/data/services'
import { guides } from '@/data/guides'
import { formatCLP } from '@/lib/format'

/** Portada mínima sobre blanco: el equipo actual y un acceso a cada sección. */
export default function HomePage() {
  const p = products.find((x) => x.availability === 'disponible') ?? products[0]!
  const hero = p.images[0]!
  const interior = p.images[1] ?? hero
  const kit = p.images.find((i) => i.src.includes('kit')) ?? hero

  return (
    <>
      <section aria-labelledby="hero" className="wrap grid items-center gap-8 pb-12 pt-10 md:pt-16 lg:grid-cols-2 lg:gap-6">
        <div className="text-center lg:text-left">
          <p className="t-label enter-up text-violet">{p.code}</p>
          <h1 id="hero" className="t-display mt-2">
            <span className="line-mask">
              <span style={{ '--d': 80 } as React.CSSProperties}>Armado.</span>
            </span>{' '}
            <span className="line-mask">
              <span style={{ '--d': 200 } as React.CSSProperties}>Probado.</span>
            </span>{' '}
            <span className="line-mask">
              <span className="text-violet" style={{ '--d': 320 } as React.CSSProperties}>
                Explicado.
              </span>
            </span>
          </h1>
          <p className="t-intro enter-up mx-auto mt-6 max-w-[26ch] text-slate lg:mx-0" style={{ '--d': 450 } as React.CSSProperties}>
            Computadores que puedes revisar antes de comprar.
          </p>
          <div className="enter-up mt-8 flex flex-wrap items-center justify-center gap-5 lg:justify-start" style={{ '--d': 560 } as React.CSSProperties}>
            <Link href={`/pcs/${p.slug}`} className="pill pill-primary">
              Ver el {p.code}
            </Link>
            <span className="t-title tnum">{formatCLP(p.price)}</span>
          </div>
        </div>
        <ViewTransition name={`media-${p.id}`} share="hero-media">
          <div className="relative h-[min(62vh,34rem)] w-full">
            <span aria-hidden className="absolute inset-x-[12%] bottom-[6%] top-[18%] -z-10 rounded-full bg-violet/15 blur-3xl" />
            <Image src={hero.src} alt={hero.alt} fill priority sizes="(min-width: 1024px) 45vw, 90vw" className="enter-settle object-contain" />
          </div>
        </ViewTransition>
      </section>

      <section aria-label="Secciones" className="wrap-wide grid gap-3 pb-3 md:grid-cols-2">
        <SectionTile href="/pcs" title="Equipos" text="Unidades reales, con sus propias fotos." cta="Ver catálogo">
          <span className="relative mt-6 block h-64 w-full">
            <Image src={interior.src} alt="" fill sizes="45vw" className="parallax-img object-contain transition-transform duration-[1200ms] ease-[var(--ease-out-expo)] group-hover:scale-105" />
          </span>
        </SectionTile>
        <SectionTile href="/services" title="Servicios" text="Armado, mantenimiento, optimización y upgrades." cta="Ver servicios">
          <span className="mt-6 grid w-full grid-cols-2 gap-2 text-left">
            {services.map((s) => (
              <span key={s.id} className="rounded-2xl bg-white p-4">
                <span className="t-small block font-semibold">{s.title}</span>
                <span className="t-micro tnum text-slate">{s.price}</span>
              </span>
            ))}
          </span>
        </SectionTile>
        <SectionTile href="/proceso-armado" title="Proceso" text="Seis etapas entre las cajas y el equipo listo." cta="Ver el proceso">
          <span className="relative mt-6 block h-64 w-full">
            <Image src={kit.src} alt="" fill sizes="45vw" className="parallax-img object-contain transition-transform duration-[1200ms] ease-[var(--ease-out-expo)] group-hover:scale-105" />
          </span>
        </SectionTile>
        <SectionTile href="/guias" title="Guías" text="Hardware explicado desde el banco de trabajo." cta="Leer guías">
          <span className="mt-6 grid w-full gap-2 text-left">
            {guides.map((g) => (
              <span key={g.slug} className="rounded-2xl bg-white p-5">
                <span className="t-label block">{g.title}</span>
                <span className="t-micro text-slate">{g.readingMinutes} min de lectura</span>
              </span>
            ))}
          </span>
        </SectionTile>
      </section>
    </>
  )
}

function SectionTile({ href, title, text, cta, children }: { href: string; title: string; text: string; cta: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="tile tile-light group reveal flex min-h-[30rem] flex-col items-center p-9 text-center">
      <span className="t-headline">{title}</span>
      <span className="t-intro mt-2 text-slate">{text}</span>
      <span className="link mt-4 inline-flex items-center gap-1.5">
        {cta} <ArrowRight size={16} aria-hidden className="transition-transform duration-500 ease-[var(--ease-out-expo)] group-hover:translate-x-1" />
      </span>
      <span className="mt-auto block w-full">{children}</span>
    </Link>
  )
}
