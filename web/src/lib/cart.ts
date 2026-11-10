/**
 * Lógica pura del carrito (sin React), para poder probarla con Vitest.
 * Guardamos sólo ids: el precio y los datos siempre se leen del catálogo actual,
 * así un cambio de precio nunca queda "congelado" en el navegador del cliente.
 */
import type { Product } from './types'

export const CART_STORAGE_KEY = 'guglielmini-cart-v3'

export function addItem(ids: string[], id: string): string[] {
  return ids.includes(id) ? ids : [...ids, id]
}

export function removeItem(ids: string[], id: string): string[] {
  return ids.filter((x) => x !== id)
}

export function parseStoredCart(raw: string | null, validIds: Set<string>): string[] {
  if (!raw) return []
  try {
    const data: unknown = JSON.parse(raw)
    if (!Array.isArray(data)) return []
    return [...new Set(data.filter((x): x is string => typeof x === 'string' && validIds.has(x)))]
  } catch {
    return []
  }
}

export function resolveItems(ids: string[], catalog: Product[]): Product[] {
  return ids.map((id) => catalog.find((p) => p.id === id)).filter((p): p is Product => Boolean(p))
}

export function cartTotal(items: Pick<Product, 'price'>[]): number {
  return items.reduce((sum, i) => sum + i.price, 0)
}
