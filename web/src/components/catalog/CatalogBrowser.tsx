'use client'

import { useEffect, useId, useMemo, useState } from 'react'
import { Search } from 'lucide-react'
import { ProductCard } from '../product/ProductCard'
import { categoriesOf, filterProducts, type CatalogQuery, type SortKey } from '@/lib/catalog'
import type { Availability, Product } from '@/lib/types'
import { availabilityLabel } from '@/lib/availability'

const sortOptions: { value: SortKey; label: string }[] = [
  { value: 'destacados', label: 'Disponibles primero' },
  { value: 'precio-asc', label: 'Precio: menor a mayor' },
  { value: 'precio-desc', label: 'Precio: mayor a menor' },
  { value: 'nombre', label: 'Nombre' },
]

function readQuery(): CatalogQuery {
  if (typeof window === 'undefined') return {}
  const p = new URLSearchParams(window.location.search)
  return {
    q: p.get('q') ?? '',
    category: p.get('categoria') ?? 'todas',
    availability: (p.get('estado') as Availability | null) ?? 'todas',
    sort: (p.get('orden') as SortKey | null) ?? 'destacados',
  }
}

/** Buscador, filtros y orden. El estado se refleja en la URL para poder compartir una búsqueda. */
export function CatalogBrowser({ products }: { products: Product[] }) {
  const id = useId()
  const [query, setQuery] = useState<CatalogQuery>({ q: '', category: 'todas', availability: 'todas', sort: 'destacados' })
  const [hydrated, setHydrated] = useState(false)
  const categories = useMemo(() => categoriesOf(products), [products])
  const results = useMemo(() => filterProducts(products, query), [products, query])

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- leer la URL sólo tras hidratar
    setQuery((q) => ({ ...q, ...readQuery() }))
    setHydrated(true)
  }, [])

  useEffect(() => {
    const p = new URLSearchParams()
    if (query.q) p.set('q', query.q)
    if (query.category && query.category !== 'todas') p.set('categoria', query.category)
    if (query.availability && query.availability !== 'todas') p.set('estado', query.availability)
    if (query.sort && query.sort !== 'destacados') p.set('orden', query.sort)
    const qs = p.toString()
    window.history.replaceState(null, '', qs ? `?${qs}` : window.location.pathname)
  }, [query])

  const update = (patch: Partial<CatalogQuery>) => setQuery((q) => ({ ...q, ...patch }))
  const hasFilters = Boolean(query.q) || query.category !== 'todas' || query.availability !== 'todas'

  return (
    <div className="wrap-wide pb-24">
      <search>
      <form data-ready={hydrated || undefined} className="grid gap-2 md:grid-cols-[minmax(0,2fr)_repeat(3,minmax(0,1fr))]" onSubmit={(e) => e.preventDefault()}>
        <div className="relative">
          <label htmlFor={`${id}-q`} className="sr-only">
            Buscar por modelo o componente
          </label>
          <Search size={18} className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-slate" aria-hidden />
          <input
            id={`${id}-q`}
            type="search"
            className="field pl-12"
            placeholder="Buscar: Ryzen, NVMe, 16 GB…"
            value={query.q}
            onChange={(e) => update({ q: e.target.value })}
            autoComplete="off"
          />
        </div>
        <Select id={`${id}-cat`} label="Categoría" value={query.category ?? 'todas'} onChange={(v) => update({ category: v })}>
          <option value="todas">Todas las categorías</option>
          {categories.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </Select>
        <Select id={`${id}-av`} label="Disponibilidad" value={query.availability ?? 'todas'} onChange={(v) => update({ availability: v as Availability | 'todas' })}>
          <option value="todas">Cualquier estado</option>
          {(Object.keys(availabilityLabel) as Availability[]).map((a) => (
            <option key={a} value={a}>
              {availabilityLabel[a]}
            </option>
          ))}
        </Select>
        <Select id={`${id}-sort`} label="Ordenar" value={query.sort ?? 'destacados'} onChange={(v) => update({ sort: v as SortKey })}>
          {sortOptions.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </Select>
      </form>
      </search>

      <p className="t-small mt-6 px-2 text-slate" aria-live="polite">
        {results.length === 1 ? '1 equipo' : `${results.length} equipos`}
        {hasFilters ? ' con estos filtros' : results.length === 1 ? ' publicado' : ' publicados'}
      </p>

      {results.length > 0 ? (
        <ul className="mt-4 grid gap-3">
          {results.map((p) => (
            <li key={p.id} className="swap-in">
              <ProductCard product={p} />
            </li>
          ))}
        </ul>
      ) : (
        <div className="tile tile-light swap-in mt-4 p-10 text-center md:p-16">
          <h2 className="t-title">No hay equipos que coincidan.</h2>
          <p className="mx-auto mt-3 max-w-[44ch] text-slate">Prueba con otro término o quita los filtros. Si buscas una configuración específica, podemos armarla.</p>
          <button type="button" className="pill pill-primary mt-6" onClick={() => setQuery({ q: '', category: 'todas', availability: 'todas', sort: query.sort })}>
            Quitar filtros
          </button>
        </div>
      )}
    </div>
  )
}

function Select({ id, label, value, onChange, children }: { id: string; label: string; value: string; onChange: (v: string) => void; children: React.ReactNode }) {
  return (
    <div>
      <label htmlFor={id} className="sr-only">
        {label}
      </label>
      <select id={id} className="field appearance-auto" value={value} onChange={(e) => onChange(e.target.value)}>
        {children}
      </select>
    </div>
  )
}
