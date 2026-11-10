'use client'

import { createWhatsAppUrl } from '@/lib/whatsapp'

export function WhatsAppInline({ message, children = 'Pregúntanos por WhatsApp' }: { message: string; children?: React.ReactNode }) {
  const url = createWhatsAppUrl(message)
  if (!url) return <span className="text-slate">WhatsApp aún no está configurado en este sitio.</span>
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className="link">
      {children}
      <span className="sr-only"> (abre WhatsApp en una nueva pestaña)</span>
    </a>
  )
}
