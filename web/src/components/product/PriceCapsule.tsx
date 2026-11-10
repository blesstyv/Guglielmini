import type { Product } from '@/lib/types'
import { formatCLP } from '@/lib/format'
import { isCommercialDataConfirmed } from '@/lib/availability'

/** Precio. Si no está confirmado por el dueño, la ficha agrega una línea breve (showNote). */
export function PriceCapsule({ product, showNote = false }: { product: Product; showNote?: boolean }) {
  return (
    <div>
      <p className="t-title tnum">{formatCLP(product.price)}</p>
      {showNote && !isCommercialDataConfirmed(product) && <p className="t-small mt-1 text-slate">Disponibilidad por confirmar.</p>}
    </div>
  )
}
