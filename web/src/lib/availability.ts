import type { Availability, Product } from './types'

export const availabilityLabel: Record<Availability, string> = {
  disponible: 'Disponible',
  reservado: 'Reservado',
  vendido: 'Vendido',
  'por-confirmar': 'Por confirmar',
}

/** El precio y stock sólo se presentan como vigentes si el dueño los confirmó. */
export function isCommercialDataConfirmed(product: Product): boolean {
  return product.commercialDataConfirmedAt !== null
}

export function canBeAddedToCart(product: Product): boolean {
  return product.availability !== 'vendido' && product.stock > 0
}
