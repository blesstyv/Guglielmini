import { describe, expect, it } from 'vitest'
import { addItem, cartTotal, parseStoredCart, removeItem, resolveItems } from '@/lib/cart'
import { products } from '@/data/products'

describe('carrito', () => {
  it('no duplica unidades', () => {
    expect(addItem(addItem([], 'a'), 'a')).toEqual(['a'])
  })
  it('quita por id', () => {
    expect(removeItem(['a', 'b'], 'a')).toEqual(['b'])
  })
  it('ignora datos guardados corruptos o de productos inexistentes', () => {
    const valid = new Set(['pc-001'])
    expect(parseStoredCart('{rota', valid)).toEqual([])
    expect(parseStoredCart('{"a":1}', valid)).toEqual([])
    expect(parseStoredCart('["pc-001","pc-999",3,"pc-001"]', valid)).toEqual(['pc-001'])
    expect(parseStoredCart(null, valid)).toEqual([])
  })
  it('toma precios del catálogo actual y suma el total', () => {
    const items = resolveItems(['pc-001', 'no-existe'], products)
    expect(items).toHaveLength(1)
    expect(cartTotal(items)).toBe(products[0]!.price)
  })
})
