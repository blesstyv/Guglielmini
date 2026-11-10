import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Cpu, Gauge, ShieldCheck, Wrench } from 'lucide-react'
import { services } from '@/data/services'
import { PageIntro } from '@/components/PageIntro'

export const metadata: Metadata = {
  title: 'Servicios para PC',
  description: 'Armado de PC desde $19.990, optimización gamer desde $9.990, mantenimiento desde $19.990 y upgrade de hardware.',
  alternates: { canonical: '/services' },
}

const icons = { armado: Cpu, optimizacion: Gauge, mantenimiento: ShieldCheck, upgrade: Wrench } as const

export default function ServicesPage() {
  return (
    <>
      <PageIntro title="Servicios para tu PC" intro="La misma revisión que aplicamos a nuestros equipos, ahora sobre el tuyo." />
      <ul className="wrap-wide grid gap-3 pb-3 md:grid-cols-2">
        {services.map((s) => {
          const Icon = icons[s.id as keyof typeof icons] ?? Wrench
          return (
            <li key={s.id}>
              <Link href={`/services/${s.id}`} className="tile tile-light group reveal flex min-h-[22rem] flex-col p-9">
                <Icon size={30} strokeWidth={1.5} aria-hidden className="text-violet" />
                <span className="t-headline mt-auto">{s.title}</span>
                <span className="mt-3 max-w-[36ch] text-slate">{s.summary}</span>
                <span className="mt-6 flex items-center justify-between gap-4">
                  <span className="t-label tnum">{s.price}</span>
                  <span className="link inline-flex items-center gap-1.5">
                    Ver detalle <ArrowRight size={16} aria-hidden className="transition-transform duration-500 ease-[var(--ease-out-expo)] group-hover:translate-x-1" />
                  </span>
                </span>
              </Link>
            </li>
          )
        })}
      </ul>
      <section aria-labelledby="como" className="wrap-wide py-3">
        <div className="tile tile-light reveal p-9 md:p-14">
          <h2 id="como" className="t-headline max-w-[16ch]">
            Así coordinamos un servicio.
          </h2>
          <ol className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ['Conversamos', 'Nos cuentas qué necesitas y en qué estado está tu equipo.'],
              ['Evaluamos', 'Definimos el trabajo, la compatibilidad y el precio final.'],
              ['Trabajamos', 'Realizamos el servicio acordado.'],
              ['Verificamos', 'Probamos el funcionamiento antes de entregarlo.'],
            ].map(([t, d], i) => (
              <li key={t}>
                <span className="t-small tnum font-semibold text-violet">Paso {i + 1}</span>
                <h3 className="t-label mt-1">{t}</h3>
                <p className="mt-2 text-slate">{d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <div className="py-9" />
    </>
  )
}
