'use client'

import Link from 'next/link'
import { Check } from 'lucide-react'
import { useCart } from '../CartProvider'
import type { Product } from '@/lib/types'
import { canBeAddedToCart } from '@/lib/availability'

export function AddToCartButton({ product, variant = 'outline', size = 'md' }: { product: Product; variant?: 'outline' | 'quiet'; size?: 'md' | 'sm' }) {
  const { has, add, ready } = useCart()
  const cls = `pill pill-${variant} ${size === 'sm' ? 'pill-sm' : ''}`

  if (!canBeAddedToCart(product)) {
    return (
      <button type="button" className={cls} disabled>
        No disponible
      </button>
    )
  }
  if (ready && has(product.id)) {
    return (
      <Link href="/cart" className={`${cls} swap-in`}>
        <Check size={16} aria-hidden className="pop" />
        En tu carrito, revisar
      </Link>
    )
  }
  return (
    <button type="button" className={cls} onClick={() => add(product.id)} disabled={!ready}>
      Agregar al carrito
    </button>
  )
}
