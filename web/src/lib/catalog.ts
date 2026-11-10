import type { Availability, Product } from './types'

export type SortKey = 'destacados' | 'precio-asc' | 'precio-desc' | 'nombre'

export interface CatalogQuery {
  q?: string
  category?: string
  availability?: Availability | 'todas'
  sort?: SortKey
}

const normalize = (s: string) =>
  s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase()

/** Búsqueda insensible a tildes sobre nombre, código, resumen y componentes. */
export function matchesQuery(p: Product, q: string): boolean {
  const needle = normalize(q.trim())
  if (!needle) return true
  const haystack = normalize(
    [p.name, p.code, p.summary, p.category, ...p.specs.map((s) => `${s.label} ${s.value}`)].join(' '),
  )
  return needle.split(/\s+/).every((term) => haystack.includes(term))
}

const availabilityRank: Record<Availability, number> = { disponible: 0, reservado: 1, 'por-confirmar': 2, vendido: 3 }

export function filterProducts(list: Product[], query: CatalogQuery): Product[] {
  const { q = '', category, availability = 'todas', sort = 'destacados' } = query
  const result = list.filter(
    (p) =>
      matchesQuery(p, q) &&
      (!category || category === 'todas' || p.category === category) &&
      (availability === 'todas' || p.availability === availability),
  )
  const sorted = [...result]
  switch (sort) {
    case 'precio-asc':
      sorted.sort((a, b) => a.price - b.price)
      break
    case 'precio-desc':
      sorted.sort((a, b) => b.price - a.price)
      break
    case 'nombre':
      sorted.sort((a, b) => a.name.localeCompare(b.name, 'es'))
      break
    default:
      sorted.sort((a, b) => availabilityRank[a.availability] - availabilityRank[b.availability])
  }
  return sorted
}

export function categoriesOf(list: Product[]): string[] {
  return [...new Set(list.map((p) => p.category))].sort((a, b) => a.localeCompare(b, 'es'))
}
