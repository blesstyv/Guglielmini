import type { Metadata } from 'next'
import Link from 'next/link'
import { getProduct } from '@/data/products'
import { BenchmarkTiles } from '@/components/product/BenchmarkTiles'
import { ValidationList } from '@/components/product/ValidationList'

export async function generateMetadata({ params }: PageProps<'/pcs/[slug]/rendimiento'>): Promise<Metadata> {
  const p = getProduct((await params).slug)
  if (!p) return {}
  return {
    title: `Rendimiento y pruebas del ${p.code}`,
    description: `FPS medidos en ${p.benchmarks.map((b) => b.game).join(', ')} y pruebas de estabilidad del ${p.name}.`,
    alternates: { canonical: `/pcs/${p.slug}/rendimiento` },
  }
}

export default async function PerformancePage({ params }: PageProps<'/pcs/[slug]/rendimiento'>) {
  const p = getProduct((await params).slug)!
  return (
    <div>
      <header className="wrap pb-14 pt-16 text-center md:pt-24">
        <h1 className="t-display">
          <span className="line-mask">
            <span>Medido, no estimado.</span>
          </span>
        </h1>
        <p className="t-intro enter-up mx-auto mt-5 max-w-[32ch] text-slate" style={{ '--d': 180 } as React.CSSProperties}>
          FPS promedio en 1080p, con gráficos integrados.
        </p>
      </header>
      <section aria-label="FPS por juego" className="wrap-wide pb-20">
        <BenchmarkTiles benchmarks={p.benchmarks} />
      </section>
      <section aria-labelledby="pruebas" className="wrap-wide pb-24">
        <h2 id="pruebas" className="t-headline reveal text-center">
          Pruebas superadas.
        </h2>
        <p className="t-intro reveal mx-auto mt-4 max-w-[34ch] text-center text-slate">
          <Link href="/guias/como-probamos-un-pc" className="link">
            Qué revisa cada prueba
          </Link>
        </p>
        <div className="mt-12">
          <ValidationList checks={p.validation} />
        </div>
      </section>
    </div>
  )
}
