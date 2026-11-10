import { notFound } from 'next/navigation'
import { getProduct, products } from '@/data/products'
import { LocalNav } from '@/components/LocalNav'
import { WhatsAppButton } from '@/components/WhatsAppButton'
import { productPurchaseMessage } from '@/lib/whatsapp'

export const dynamicParams = false

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }))
}

/** Menú local del equipo: Resumen, Especificaciones y Rendimiento son páginas separadas. */
export default async function ProductLayout({ children, params }: LayoutProps<'/pcs/[slug]'>) {
  const { slug } = await params
  const p = getProduct(slug)
  if (!p) notFound()
  const base = `/pcs/${p.slug}`
  return (
    <>
      <LocalNav
        title={p.code}
        titleHref={base}
        links={[
          { href: base, label: 'Resumen' },
          { href: `${base}/especificaciones`, label: 'Especificaciones' },
          { href: `${base}/rendimiento`, label: 'Rendimiento' },
        ]}
        action={
          <WhatsAppButton message={productPurchaseMessage(p)} size="sm">
            Comprar
          </WhatsAppButton>
        }
      />
      {children}
    </>
  )
}
