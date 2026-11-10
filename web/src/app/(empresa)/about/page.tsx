import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { PageIntro } from '@/components/PageIntro'
import { products } from '@/data/products'
import { site } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Nosotros',
  description: 'GUGLIELMINI es un emprendimiento independiente de computadores, hardware, optimización y servicios tecnológicos en Chile.',
  alternates: { canonical: '/about' },
}

const principles = [
  { title: 'Comprobar antes de publicar', text: 'Un computador no está listo sólo porque enciende. Revisamos funcionamiento, estabilidad y temperaturas antes de ofrecerlo.' },
  { title: 'Información completa', text: 'Componentes exactos, pruebas realizadas y también las limitaciones del equipo, claras antes de la compra.' },
  { title: 'Pensar en lo que viene', text: 'Elegimos piezas que dejen margen para crecer y te explicamos qué mejoras son compatibles.' },
]

export default function AboutPage() {
  const img = products[0]!.images[2] ?? products[0]!.images[0]!
  return (
    <>
      <PageIntro title="Más que ensamblar componentes." intro="Un emprendimiento independiente de computación en Chile." />
      <section className="wrap-wide grid gap-3 md:grid-cols-2">
        <div className="tile tile-light reveal relative min-h-[28rem]">
          <Image src={img.src} alt={img.alt} fill sizes="(min-width: 768px) 50vw, 100vw" className="parallax-img object-contain p-8" />
        </div>
        <div className="tile tile-light reveal grid content-center gap-5 p-9 md:p-14">
          <p className="t-intro">Un computador no sólo tiene que verse bien: también tiene que poder revisarse, configurarse y comprobarse antes de llegar a tus manos.</p>
          <p className="text-slate">Cada equipo publicado es una configuración real. Documentamos sus componentes, sus características y las pruebas hechas durante su preparación, con fotos de esa misma unidad.</p>
          <p className="text-slate">Además de armar y vender computadores, trabajamos con el tuyo: mantenimiento, optimización y actualización de hardware.</p>
        </div>
      </section>
      <section aria-labelledby="principios" className="wrap-wide py-3">
        <h2 id="principios" className="sr-only">
          Cómo trabajamos
        </h2>
        <ul className="grid gap-3 md:grid-cols-3">
          {principles.map((p) => (
            <li key={p.title} className="tile tile-light reveal flex min-h-64 flex-col p-8">
              <span className="block h-1 w-10 rounded-full bg-gold" aria-hidden />
              <h3 className="t-title mt-auto">{p.title}</h3>
              <p className="mt-3 text-slate">{p.text}</p>
            </li>
          ))}
        </ul>
      </section>
      <section className="wrap py-20 text-center">
        <p className="t-headline reveal mx-auto max-w-[20ch]">Sigue los equipos en preparación.</p>
        <div className="reveal mt-8 flex flex-wrap justify-center gap-3">
          <a href={site.instagram.url} className="pill pill-primary" target="_blank" rel="noopener noreferrer">
            Instagram {site.instagram.handle}
          </a>
          <Link href="/contact" className="pill pill-outline">
            Escribirnos
          </Link>
        </div>
      </section>
    </>
  )
}
