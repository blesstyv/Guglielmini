const BUSINESS_NAME = 'GUGLIELMINI'

function getWhatsAppNumber() {
  return (
    import.meta.env.VITE_WHATSAPP_NUMBER || ''
  ).replace(/\D/g, '')
}

export function createWhatsAppUrl(message) {
  const number = getWhatsAppNumber()

  if (!number) {
    return null
  }

  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`
}

export function openWhatsApp(message) {
  const url = createWhatsAppUrl(message)

  if (!url) {
    window.alert(
      'El canal de WhatsApp todavía no está configurado.',
    )
    return
  }

  window.open(
    url,
    '_blank',
    'noopener,noreferrer',
  )
}

export function productPurchaseMessage(pc) {
  return [
    `Hola, vengo desde la web de ${BUSINESS_NAME}.`,
    '',
    'Estoy interesado en comprar el siguiente equipo:',
    '',
    `${pc.code}`,
    `${pc.name}`,
    `Precio: $${pc.price.toLocaleString('es-CL')}`,
    '',
    '¿Sigue disponible?',
    'Me gustaría conocer las opciones de pago y entrega.',
  ].join('\n')
}

export function productQuestionMessage(pc) {
  return [
    `Hola, vengo desde la web de ${BUSINESS_NAME}.`,
    '',
    `Quiero consultar por el ${pc.code}:`,
    `${pc.name}`,
    `Precio: $${pc.price.toLocaleString('es-CL')}`,
    '',
    'Mi consulta es:',
  ].join('\n')
}

export function cartPurchaseMessage(items, total) {
  const products = items.map(
    (item) =>
      `• ${item.code} — ${item.name} — $${item.price.toLocaleString('es-CL')}`,
  )

  return [
    `Hola, vengo desde la web de ${BUSINESS_NAME}.`,
    '',
    'Quiero continuar con esta compra:',
    '',
    ...products,
    '',
    `Total: $${total.toLocaleString('es-CL')}`,
    '',
    '¿Podemos coordinar disponibilidad, pago y entrega?',
  ].join('\n')
}

export function serviceMessage(service) {
  return [
    `Hola, vengo desde la web de ${BUSINESS_NAME}.`,
    '',
    `Quiero consultar por el servicio de ${service}.`,
    '',
    'Me gustaría conocer disponibilidad, precio y cómo podemos coordinar.',
  ].join('\n')
}

export function supportMessage() {
  return [
    `Hola, vengo desde la web de ${BUSINESS_NAME}.`,
    '',
    'Necesito soporte relacionado con un computador o servicio.',
    '',
    'Mi consulta es:',
  ].join('\n')
}

export function generalContactMessage() {
  return [
    `Hola, vengo desde la web de ${BUSINESS_NAME}.`,
    '',
    'Quisiera realizar una consulta.',
    '',
    'Mi consulta es:',
  ].join('\n')
}