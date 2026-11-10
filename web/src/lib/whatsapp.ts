import type { Product } from './types'
import { formatCLP } from './format'
import { site } from './site'

const greeting = `Hola, vengo desde la web de ${site.name}.`

/** Número desde variable de entorno pública. Nunca se escribe un número en el código. */
export function getWhatsAppNumber(env: string | undefined = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER): string {
  return (env ?? '').replace(/\D/g, '')
}

export function createWhatsAppUrl(message: string, number = getWhatsAppNumber()): string | null {
  if (!number) return null
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`
}

export function productPurchaseMessage(p: Pick<Product, 'code' | 'name' | 'price'>): string {
  return [
    greeting,
    '',
    'Me interesa comprar este equipo:',
    `${p.code} — ${p.name}`,
    `Precio publicado: ${formatCLP(p.price)}`,
    '',
    '¿Sigue disponible? Quiero conocer las opciones de pago y entrega.',
  ].join('\n')
}

export function productQuestionMessage(p: Pick<Product, 'code' | 'name'>): string {
  return [greeting, '', `Tengo una consulta sobre el ${p.code} — ${p.name}:`, ''].join('\n')
}

export function cartMessage(items: Pick<Product, 'code' | 'name' | 'price'>[], total: number): string {
  return [
    greeting,
    '',
    'Quiero continuar con esta selección:',
    ...items.map((i) => `• ${i.code} — ${i.name} — ${formatCLP(i.price)}`),
    '',
    `Total publicado: ${formatCLP(total)}`,
    '',
    '¿Podemos confirmar disponibilidad, pago y entrega?',
  ].join('\n')
}

export function serviceMessage(topic: string): string {
  return [greeting, '', `Quiero consultar por el servicio de ${topic}.`, 'Me gustaría saber disponibilidad, precio y cómo coordinamos.'].join('\n')
}

export type ContactReason = 'compra' | 'servicio' | 'soporte' | 'tecnica' | 'general'

export const contactReasons: { id: ContactReason; title: string; description: string; message: string }[] = [
  {
    id: 'compra',
    title: 'Quiero comprar un PC',
    description: 'Equipos disponibles, formas de pago y entrega.',
    message: 'Quiero consultar por la compra de un computador.',
  },
  {
    id: 'servicio',
    title: 'Necesito un servicio',
    description: 'Armado, mantenimiento, optimización o upgrade.',
    message: 'Quiero consultar por servicios técnicos y de hardware.',
  },
  {
    id: 'soporte',
    title: 'Necesito ayuda con mi equipo',
    description: 'Un problema con tu PC o con un servicio que hicimos.',
    message: 'Necesito soporte con un computador o servicio.',
  },
  {
    id: 'tecnica',
    title: 'Tengo una duda técnica',
    description: 'FPS, compatibilidad, componentes o futuras mejoras.',
    message: 'Tengo una consulta sobre rendimiento, componentes o compatibilidad.',
  },
  {
    id: 'general',
    title: 'Otra consulta',
    description: 'Cualquier otra pregunta.',
    message: 'Quisiera hacer una consulta.',
  },
]

export function contactMessage(reason: ContactReason, detail = ''): string {
  const r = contactReasons.find((c) => c.id === reason) ?? contactReasons[4]!
  const lines = [greeting, '', r.message]
  if (detail.trim()) lines.push('', detail.trim())
  return lines.join('\n')
}
