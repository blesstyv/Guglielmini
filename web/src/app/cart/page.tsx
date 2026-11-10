import type { Metadata } from 'next'
import { CartView } from '@/components/cart/CartView'

export const metadata: Metadata = {
  title: 'Carrito',
  description: 'Revisa los equipos seleccionados y continúa la compra por WhatsApp.',
  alternates: { canonical: '/cart' },
  robots: { index: false, follow: true },
}

export default function CartPage() {
  return <CartView />
}
