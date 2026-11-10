'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useRef } from 'react'

export interface LocalLink {
  href: string
  label: string
}

/**
 * Menú local de cada sección: título, sub-páginas y una acción.
 * Cambia según la sección elegida en el menú global. Al pasar de una sub-página a otra,
 * la píldora activa se desliza a su nueva posición con la View Transitions API
 * (view-transition-name compartido); sin soporte, simplemente cambia.
 */
export function LocalNav({ title, titleHref, links = [], action }: { title: string; titleHref?: string; links?: LocalLink[]; action?: React.ReactNode }) {
  const pathname = usePathname()
  const listRef = useRef<HTMLUListElement>(null)
  const activeIndex = links.findIndex((l) => l.href === pathname)

  useEffect(() => {
    if (activeIndex < 0) return
    const el = listRef.current?.querySelector<HTMLElement>('[aria-current="page"]')
    el?.scrollIntoView({ block: 'nearest', inline: 'center' })
  }, [activeIndex])

  return (
    <div className="sticky top-11 z-40 px-3 pt-2 sm:px-5">
      <nav aria-label={`Sección ${title}`} className="wrap-wide flex min-h-13 items-center gap-3 rounded-[var(--radius-nav)] bg-white py-1.5 pl-5 pr-2 shadow-[0_0_0_1px_var(--color-keyline)]">
        {titleHref ? (
          <Link href={titleHref} className="t-label shrink-0 truncate">
            {title}
          </Link>
        ) : (
          <span className="t-label shrink-0 truncate">{title}</span>
        )}
        {links.length > 0 && (
          <ul ref={listRef} className="no-scrollbar ml-auto flex min-w-0 items-center gap-1 overflow-x-auto">
            {links.map((l, i) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  aria-current={i === activeIndex ? 'page' : undefined}
                  style={i === activeIndex ? { viewTransitionName: 'local-nav-pill' } : undefined}
                  className="t-small block whitespace-nowrap rounded-full px-3.5 py-1.5 text-slate transition-colors duration-300 hover:text-ink aria-[current=page]:bg-violet aria-[current=page]:text-white"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        )}
        {action && <div className={`shrink-0 ${links.length ? 'hidden sm:block' : 'ml-auto'}`}>{action}</div>}
      </nav>
    </div>
  )
}
