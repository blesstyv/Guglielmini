import { describe, expect, it } from 'vitest'
import { filterProducts, matchesQuery } from '@/lib/catalog'
import { products } from '@/data/products'
import type { Product } from '@/lib/types'

const base = products[0]!
const cheap: Product = { ...base, id: 'x', slug: 'x', code: 'PC-X', name: 'Alpha Intel', price: 100, availability: 'vendido', category: 'Oficina', specs: [] }
const list = [base, cheap]

describe('catálogo', () => {
  it('busca sin importar tildes ni mayúsculas, también en componentes', () => {
    expect(matchesQuery(base, 'RYZEN nvme')).toBe(true)
    expect(matchesQuery(base, 'grafícos')).toBe(true)
    expect(matchesQuery(base, 'intel')).toBe(false)
  })
  it('filtra por categoría y disponibilidad', () => {
    expect(filterProducts(list, { category: 'Oficina' }).map((p) => p.id)).toEqual(['x'])
    expect(filterProducts(list, { availability: 'disponible' }).map((p) => p.id)).toEqual([base.id])
  })
  it('ordena por precio y deja disponibles primero por defecto', () => {
    expect(filterProducts(list, { sort: 'precio-asc' })[0]!.id).toBe('x')
    expect(filterProducts([cheap, base], {})[0]!.id).toBe(base.id)
  })
})

describe('integridad de datos', () => {
  it('cada producto tiene slug único, fotos con alt y medidas', () => {
    const slugs = new Set(products.map((p) => p.slug))
    expect(slugs.size).toBe(products.length)
    for (const p of products) {
      expect(p.images.length).toBeGreaterThan(0)
      for (const img of p.images) {
        expect(img.alt.length).toBeGreaterThan(10)
        expect(img.width).toBeGreaterThan(0)
      }
      for (const b of p.benchmarks) expect(b.fpsMax).toBeGreaterThanOrEqual(b.fpsMin)
    }
  })
  it('el precio histórico no se presenta como confirmado', () => {
    expect(products[0]!.commercialDataConfirmedAt).toBeNull()
  })
})
