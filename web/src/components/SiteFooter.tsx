import Link from 'next/link'
import { navigation, site } from '@/lib/site'

const YEAR = new Date().getFullYear()

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-keyline">
      <div className="wrap t-micro flex flex-wrap items-center justify-between gap-4 py-8 text-slate">
        <nav aria-label="Pie de página">
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {navigation.map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="hover:text-ink hover:underline">
                  {n.label}
                </Link>
              </li>
            ))}
            <li>
              <a href={site.instagram.url} target="_blank" rel="noopener noreferrer" className="hover:text-ink hover:underline">
                Instagram
              </a>
            </li>
          </ul>
        </nav>
        <p>© {YEAR} GUGLIELMINI</p>
      </div>
    </footer>
  )
}
