'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { ShoppingBag } from 'lucide-react'
import { LogoMark } from './Logo'
import { navigation } from '@/lib/site'
import { useCart } from './CartProvider'

/** Barra global de 44px: marca, secciones y carrito. En móvil se abre como hoja a pantalla completa. */
export function GlobalNav() {
  const pathname = usePathname()
  const { count, ready } = useCart()
  const [open, setOpen] = useState(false)
  const [openedAt, setOpenedAt] = useState(pathname)

  if (open && openedAt !== pathname) {
    setOpen(false)
    setOpenedAt(pathname)
  }

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    document.addEventListener('keydown', onKey)
    document.documentElement.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.documentElement.style.overflow = ''
    }
  }, [open])

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`)

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl backdrop-saturate-150">
      <div className="wrap flex h-11 items-center justify-between gap-4">
        <Link href="/" aria-label="GUGLIELMINI, inicio" className="flex items-center gap-2 py-1">
          <LogoMark className="h-6 w-auto" />
          <span className="t-micro font-semibold tracking-[0.06em]">GUGLIELMINI</span>
        </Link>

        <nav aria-label="Principal" className="hidden md:block">
          <ul className="flex items-center gap-7">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActive(item.href) ? 'page' : undefined}
                  className="t-micro text-ink/80 transition-colors hover:text-ink aria-[current=page]:font-semibold aria-[current=page]:text-violet"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-1">
          <Link
            href="/cart"
            className="relative grid h-11 w-11 place-items-center text-ink/80 transition-colors hover:text-ink"
            aria-label={ready ? `Carrito, ${count} ${count === 1 ? 'equipo' : 'equipos'}` : 'Carrito'}
          >
            <ShoppingBag size={17} strokeWidth={1.6} aria-hidden />
            {ready && count > 0 && (
              <span key={count} className="pop tnum absolute right-1.5 top-1.5 grid h-4 min-w-4 place-items-center rounded-full bg-violet px-1 text-[10px] font-semibold text-white">
                {count}
              </span>
            )}
          </Link>
          <button
            type="button"
            className="grid h-11 w-11 place-items-center md:hidden"
            aria-expanded={open}
            aria-controls="menu-movil"
            onClick={() => {
              setOpen((o) => !o)
              setOpenedAt(pathname)
            }}
          >
            <span className="sr-only">{open ? 'Cerrar menú' : 'Abrir menú'}</span>
            <span aria-hidden className="relative block h-3 w-4">
              <span className={`absolute left-0 h-[1.5px] w-4 rounded bg-ink transition-transform duration-500 ease-[var(--ease-out-expo)] ${open ? 'top-1.5 rotate-45' : 'top-0.5'}`} />
              <span className={`absolute left-0 h-[1.5px] w-4 rounded bg-ink transition-transform duration-500 ease-[var(--ease-out-expo)] ${open ? 'top-1.5 -rotate-45' : 'top-2.5'}`} />
            </span>
          </button>
        </div>
      </div>

      {open && (
        <nav id="menu-movil" aria-label="Principal móvil" className="h-[calc(100dvh-2.75rem)] overflow-y-auto bg-white md:hidden">
          <ul className="wrap pt-6">
            {navigation.map((item, i) => (
              <li key={item.href} className="sheet-down" style={{ '--d': i * 40 } as React.CSSProperties}>
                <Link
                  href={item.href}
                  aria-current={isActive(item.href) ? 'page' : undefined}
                  className="block py-2.5 text-[1.75rem] font-semibold tracking-tight aria-[current=page]:text-violet"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}
