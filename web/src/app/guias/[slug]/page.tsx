import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getGuide, guides } from '@/data/guides'
import { JsonLd } from '@/components/JsonLd'
import { formatDate } from '@/lib/format'
import { site } from '@/lib/site'

export const dynamicParams = false

export function generateStaticParams() {
  return guides.map((g) => ({ slug: g.slug }))
}

export async function generateMetadata({ params }: PageProps<'/guias/[slug]'>): Promise<Metadata> {
  const g = getGuide((await params).slug)
  if (!g) return {}
  return { title: g.title, description: g.summary, alternates: { canonical: `/guias/${g.slug}` }, openGraph: { type: 'article' } }
}

export default async function GuidePage({ params }: PageProps<'/guias/[slug]'>) {
  const g = getGuide((await params).slug)
  if (!g) notFound()
  return (
    <article className="pb-24">
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: g.title,
          description: g.summary,
          datePublished: g.publishedAt,
          author: { '@type': 'Organization', name: site.name },
          publisher: { '@type': 'Organization', name: site.name },
        }}
      />
      <header className="wrap pb-14 pt-16 text-center md:pt-24">
        <p className="t-small enter-up text-slate">
          <time dateTime={g.publishedAt}>{formatDate(g.publishedAt)}</time>, {g.readingMinutes} min de lectura
        </p>
        <h1 className="t-headline mx-auto mt-4 max-w-[22ch]">
          <span className="line-mask">
            <span>{g.title}</span>
          </span>
        </h1>
        <p className="t-intro enter-up mx-auto mt-5 max-w-[40ch] text-slate" style={{ '--d': 160 } as React.CSSProperties}>
          {g.summary}
        </p>
      </header>
      <div className="mx-auto grid w-[min(100%-2.5rem,42rem)] gap-14">
        {g.sections.map((s) => (
          <section key={s.heading} className="reveal">
            <h2 className="t-title">{s.heading}</h2>
            <div className="mt-4 grid gap-4 text-[1.1875rem] leading-[1.6] text-ink/90">
              {s.paragraphs.map((p) => (
                <p key={p.slice(0, 32)}>{p}</p>
              ))}
            </div>
          </section>
        ))}
      </div>
      <aside className="wrap-wide mt-20">
        <div className="tile tile-light reveal flex flex-col items-center gap-6 p-12 text-center">
          <p className="t-headline max-w-[18ch]">¿Revisamos tu equipo?</p>
          <Link href="/services" className="pill pill-primary">
            Ver servicios
          </Link>
        </div>
      </aside>
    </article>
  )
}
