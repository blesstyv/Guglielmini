import type { Metadata, Viewport } from 'next'
import { ViewTransition } from 'react'
import './globals.css'
import { CartProvider } from '@/components/CartProvider'
import { GlobalNav } from '@/components/GlobalNav'
import { SiteFooter } from '@/components/SiteFooter'
import { JsonLd } from '@/components/JsonLd'
import { site } from '@/lib/site'

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: 'GUGLIELMINI | PCs armados, probados y explicados', template: '%s | GUGLIELMINI' },
  description: site.description,
  applicationName: site.name,
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    siteName: site.name,
    locale: site.locale,
    images: [{ url: site.ogImage.src, width: site.ogImage.width, height: site.ogImage.height, alt: 'GUGLIELMINI: PCs, hardware y servicios' }],
  },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true },
}

export const viewport: Viewport = { themeColor: '#ffffff' }

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es-CL">
      <body className="flex min-h-dvh flex-col">
        <a href="#contenido" className="skip-link">
          Saltar al contenido
        </a>
        <JsonLd
          data={{
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: site.name,
            url: site.url,
            logo: `${site.url}/icon.svg`,
            sameAs: [site.instagram.url],
            areaServed: 'CL',
          }}
        />
        <CartProvider>
          <GlobalNav />
          <ViewTransition default="page">
            <main id="contenido" className="flex-1" tabIndex={-1}>
              {children}
            </main>
          </ViewTransition>
          <SiteFooter />
        </CartProvider>
      </body>
    </html>
  )
}
