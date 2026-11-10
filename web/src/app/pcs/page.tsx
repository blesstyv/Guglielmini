import type { Metadata } from 'next'
import { products } from '@/data/products'
import { PageIntro } from '@/components/PageIntro'
import { LocalNav } from '@/components/LocalNav'
import { CatalogBrowser } from '@/components/catalog/CatalogBrowser'

export const metadata: Metadata = {
  title: 'Equipos disponibles',
  description: 'Computadores armados y probados por GUGLIELMINI: componentes, pruebas realizadas, FPS medidos y posibilidades de upgrade.',
  alternates: { canonical: '/pcs' },
}

export default function CatalogPage() {
  return (
    <>
      <LocalNav title="Equipos" links={products.map((p) => ({ href: `/pcs/${p.slug}`, label: p.code }))} />
      <PageIntro title="Equipos" intro="Cada uno es una unidad real, con fotos propias y pruebas registradas." />
      <CatalogBrowser products={products} />
    </>
  )
}
