import type { Metadata } from 'next'
import Link from 'next/link'
import { processSteps } from '@/data/process'
import { products } from '@/data/products'
import { PageIntro } from '@/components/PageIntro'
import { LocalNav } from '@/components/LocalNav'
import { ProcessStepper } from '@/components/process/ProcessStepper'

export const metadata: Metadata = {
  title: 'Proceso de armado y pruebas',
  description: 'Inspección, montaje, BIOS, drivers, pruebas y validación final: así prepara GUGLIELMINI cada computador antes de publicarlo.',
  alternates: { canonical: '/proceso-armado' },
}

export default function ProcessPage() {
  const pc = products[0]!
  return (
    <>
      <LocalNav
        title="Proceso"
        action={
          <Link href={`/pcs/${pc.slug}/rendimiento`} className="pill pill-quiet pill-sm">
            Resultados del {pc.code}
          </Link>
        }
      />
      <PageIntro title="De las cajas al equipo listo." intro="Que un PC encienda no significa que esté listo. Elige una etapa para ver qué revisamos." />
      <ProcessStepper steps={processSteps} />
    </>
  )
}
