import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Check } from 'lucide-react'
import { getService, services } from '@/data/services'
import { WhatsAppButton } from '@/components/WhatsAppButton'
import { serviceMessage } from '@/lib/whatsapp'

export const dynamicParams = false

export function generateStaticParams() {
  return services.map((s) => ({ id: s.id }))
}

export async function generateMetadata({ params }: PageProps<'/services/[id]'>): Promise<Metadata> {
  const s = getService((await params).id)
  if (!s) return {}
  return { title: `${s.title}, ${s.price.toLowerCase()}`, description: s.summary, alternates: { canonical: `/services/${s.id}` } }
}

export default async function ServicePage({ params }: PageProps<'/services/[id]'>) {
  const s = getService((await params).id)
  if (!s) notFound()
  const idx = services.findIndex((x) => x.id === s.id)
  const next = services[(idx + 1) % services.length]!

  return (
    <>
      <header className="wrap pb-14 pt-16 text-center md:pt-24">
        <h1 className="t-display">
          <span className="line-mask">
            <span>{s.title}</span>
          </span>
        </h1>
        <p className="t-intro enter-up mx-auto mt-5 max-w-[32ch] text-slate" style={{ '--d': 160 } as React.CSSProperties}>
          {s.summary}
        </p>
        <div className="enter-up mt-8 flex flex-wrap items-center justify-center gap-3" style={{ '--d': 280 } as React.CSSProperties}>
          <WhatsAppButton message={serviceMessage(s.whatsappTopic)}>Consultar por WhatsApp</WhatsAppButton>
          <span className="t-label tnum">{s.price}</span>
        </div>
      </header>
      <section aria-labelledby="incluye" className="wrap-wide pb-3">
        <div className="tile tile-light reveal grid gap-10 p-9 md:grid-cols-[1fr_1.4fr] md:p-14">
          <h2 id="incluye" className="t-headline">
            Qué puede incluir.
          </h2>
          <ul className="grid gap-4">
            {s.includes.map((inc, i) => (
              <li key={inc} className="sheet-down flex items-center gap-4 border-b border-keyline pb-4 last:border-0" style={{ '--d': 300 + i * 70 } as React.CSSProperties}>
                <span className="grid size-8 shrink-0 place-items-center rounded-full bg-gold text-black" aria-hidden>
                  <Check size={16} strokeWidth={2.75} />
                </span>
                <span className="t-label font-medium">{inc}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <div className="wrap flex flex-wrap items-center justify-between gap-4 py-14">
        <p className="t-small text-slate">Precio final según tu equipo.</p>
        <Link href={`/services/${next.id}`} className="link">
          Siguiente: {next.title}
        </Link>
      </div>
    </>
  )
}
