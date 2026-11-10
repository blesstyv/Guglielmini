import { describe, expect, it } from 'vitest'
import { cartMessage, contactMessage, createWhatsAppUrl, getWhatsAppNumber, productPurchaseMessage, serviceMessage } from '@/lib/whatsapp'

const pc = { code: 'PC-001', name: 'PC Gamer Ryzen 5 5600G', price: 700000 }

describe('whatsapp', () => {
  it('limpia el número dejando sólo dígitos', () => {
    expect(getWhatsAppNumber('+56 9 1234-5678')).toBe('56912345678')
    expect(getWhatsAppNumber(undefined)).toBe('')
  })
  it('no genera URL si no hay número configurado', () => {
    expect(createWhatsAppUrl('hola', '')).toBeNull()
  })
  it('codifica el mensaje en la URL', () => {
    const url = createWhatsAppUrl('Hola\n¿precio?', '56900000000')
    expect(url).toBe('https://wa.me/56900000000?text=Hola%0A%C2%BFprecio%3F')
  })
  it('incluye código, nombre y precio en el mensaje de compra', () => {
    const m = productPurchaseMessage(pc)
    expect(m).toContain('PC-001 — PC Gamer Ryzen 5 5600G')
    expect(m).toContain('$700.000')
  })
  it('lista cada equipo y el total en el mensaje del carrito', () => {
    const m = cartMessage([pc, { ...pc, code: 'PC-002', price: 300000 }], 1000000)
    expect(m).toContain('• PC-002')
    expect(m).toContain('Total publicado: $1.000.000')
  })
  it('contextualiza servicio y contacto', () => {
    expect(serviceMessage('mantenimiento de PC')).toContain('servicio de mantenimiento de PC')
    expect(contactMessage('soporte', '  mi PC no enciende ')).toMatch(/soporte[\s\S]*mi PC no enciende$/)
    expect(contactMessage('general')).not.toMatch(/\n\n$/)
  })
})
