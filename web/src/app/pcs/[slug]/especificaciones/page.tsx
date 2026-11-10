import type { Metadata } from 'next'
import { getProduct } from '@/data/products'
import { SpecTable } from '@/components/product/SpecTable'
import { PageIntro } from '@/components/PageIntro'

export async function generateMetadata({ params }: PageProps<'/pcs/[slug]/especificaciones'>): Promise<Metadata> {
  const p = getProduct((await params).slug)
  if (!p) return {}
  return {
    title: `Especificaciones del ${p.code}`,
    description: `Componentes exactos del ${p.name}: ${p.specs.map((s) => s.value).join(', ')}.`,
    alternates: { canonical: `/pcs/${p.slug}/especificaciones` },
  }
}

export default async function SpecsPage({ params }: PageProps<'/pcs/[slug]/especificaciones'>) {
  const p = getProduct((await params).slug)!
  return (
    <>
      <PageIntro title="Especificaciones" intro={`Marca y modelo de cada pieza instalada en el ${p.code}.`} />
      <div className="wrap pb-24">
        <SpecTable specs={p.specs} />
      </div>
    </>
  )
}
