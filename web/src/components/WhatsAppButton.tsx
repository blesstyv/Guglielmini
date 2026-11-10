'use client'

import { createWhatsAppUrl } from '@/lib/whatsapp'

interface Props {
  message: string
  children: React.ReactNode
  variant?: 'primary' | 'outline' | 'quiet'
  size?: 'md' | 'sm'
  className?: string
}

/**
 * Enlace a WhatsApp con mensaje contextual. Sin NEXT_PUBLIC_WHATSAPP_NUMBER se muestra
 * deshabilitado con la razón visible, nunca un número inventado.
 */
export function WhatsAppButton({ message, children, variant = 'primary', size = 'md', className = '' }: Props) {
  const url = createWhatsAppUrl(message)
  const cls = `pill pill-${variant} ${size === 'sm' ? 'pill-sm' : ''} ${className}`

  if (!url) {
    return (
      <button type="button" className={cls} disabled title="WhatsApp aún no está configurado en este sitio">
        {children}
        <span className="sr-only"> (WhatsApp aún no está configurado)</span>
      </button>
    )
  }
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className={cls}>
      {children}
      <span className="sr-only"> (abre WhatsApp en una nueva pestaña)</span>
    </a>
  )
}
