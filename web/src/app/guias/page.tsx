import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { guides } from '@/data/guides'
import { PageIntro } from '@/components/PageIntro'
import { formatDate } from '@/lib/format'
import { site } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Guías de hardware',
  description: 'Guías prácticas sobre hardware, pruebas y mantenimiento de computadores, escritas desde el banco de trabajo de GUGLIELMINI.',
  alternates: { canonical: '/guias' },
}

export default function GuidesPage() {
  return (
    <>
      <PageIntro
        title="Guías"
        intro={
          <>
            Lo que aprendemos armando y probando equipos. Crece junto a{' '}
            <a href={site.instagram.url} className="link" target="_blank" rel="noopener noreferrer">
              {site.instagram.handle}
            </a>
            .
          </>
        }
      />
      <ul className="wrap-wide grid gap-3 pb-24 md:grid-cols-2">
        {guides.map((g) => (
          <li key={g.slug}>
            <Link href={`/guias/${g.slug}`} className="tile tile-light group reveal flex min-h-[24rem] flex-col p-9">
              <span className={`t-small text-slate`}>
                <time dateTime={g.publishedAt}>{formatDate(g.publishedAt)}</time>, {g.readingMinutes} min de lectura
              </span>
              <span className="t-headline mt-auto">{g.title}</span>
              <span className={`mt-4 max-w-[40ch] text-slate`}>{g.summary}</span>
              <span className="link mt-6 inline-flex items-center gap-1.5">
                Leer guía <ArrowRight size={16} aria-hidden className="transition-transform duration-500 ease-[var(--ease-out-expo)] group-hover:translate-x-1" />
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}
