'use client'

import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'
import { products } from '@/data/products'
import { addItem, CART_STORAGE_KEY, cartTotal, parseStoredCart, removeItem, resolveItems } from '@/lib/cart'
import type { Product } from '@/lib/types'

interface CartValue {
  /** false hasta leer localStorage: evita mostrar "carrito vacío" por un instante. */
  ready: boolean
  items: Product[]
  count: number
  total: number
  has: (id: string) => boolean
  add: (id: string) => void
  remove: (id: string) => void
  clear: () => void
}

const CartContext = createContext<CartValue | null>(null)
const validIds = new Set(products.map((p) => p.id))

export function CartProvider({ children }: { children: ReactNode }) {
  const [ids, setIds] = useState<string[]>([])
  const [ready, setReady] = useState(false)

  useEffect(() => {
    let stored: string | null = null
    try {
      stored = window.localStorage.getItem(CART_STORAGE_KEY)
    } catch {
      /* almacenamiento bloqueado: el carrito funciona sólo en memoria */
    }
    // eslint-disable-next-line react-hooks/set-state-in-effect -- sincronización inicial con almacenamiento externo
    setIds(parseStoredCart(stored, validIds))
    setReady(true)
  }, [])

  useEffect(() => {
    if (!ready) return
    try {
      window.localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(ids))
    } catch {
      /* ignorado */
    }
  }, [ids, ready])

  const add = useCallback((id: string) => setIds((c) => addItem(c, id)), [])
  const remove = useCallback((id: string) => setIds((c) => removeItem(c, id)), [])
  const clear = useCallback(() => setIds([]), [])

  const value = useMemo<CartValue>(() => {
    const items = resolveItems(ids, products)
    return { ready, items, count: items.length, total: cartTotal(items), has: (id) => ids.includes(id), add, remove, clear }
  }, [ids, ready, add, remove, clear])

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart(): CartValue {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart debe usarse dentro de <CartProvider>')
  return ctx
}
