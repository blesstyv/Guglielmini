import type { MetadataRoute } from 'next'
import { products } from '@/data/products'
import { guides } from '@/data/guides'
import { services } from '@/data/services'
import { site } from '@/lib/site'

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ['', '/pcs', '/services', ...services.map((s) => `/services/${s.id}`), '/proceso-armado', '/guias', '/about', '/contact']
  return [
    ...pages.map((p) => ({ url: `${site.url}${p}`, changeFrequency: 'weekly' as const, priority: p === '' ? 1 : 0.8 })),
    ...products.flatMap((p) => ['', '/especificaciones', '/rendimiento'].map((sub) => ({ url: `${site.url}/pcs/${p.slug}${sub}`, changeFrequency: 'weekly' as const, priority: sub ? 0.7 : 0.9 }))),
    ...guides.map((g) => ({ url: `${site.url}/guias/${g.slug}`, lastModified: g.publishedAt, priority: 0.6 })),
  ]
}
