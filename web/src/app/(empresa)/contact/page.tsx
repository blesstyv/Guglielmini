import type { Metadata } from 'next'
import { PageIntro } from '@/components/PageIntro'
import { ContactComposer } from '@/components/contact/ContactComposer'
import { site } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Contacto',
  description: 'Escríbele a GUGLIELMINI por WhatsApp para comprar un equipo, coordinar un servicio o resolver una duda técnica.',
  alternates: { canonical: '/contact' },
}

export default function ContactPage() {
  return (
    <>
      <PageIntro title="Hablemos." intro="Elige un motivo y abrimos WhatsApp con tu mensaje listo." />
      <div className="wrap-wide pb-20">
        <ContactComposer />
        <p className="t-small mt-10 text-center text-slate">
          También en Instagram:{' '}
          <a className="link" href={site.instagram.url} target="_blank" rel="noopener noreferrer">
            {site.instagram.handle}
          </a>
        </p>
      </div>
    </>
  )
}
