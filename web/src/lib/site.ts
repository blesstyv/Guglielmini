export const site = {
  name: 'GUGLIELMINI',
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://guglielmini.vercel.app').replace(/\/$/, ''),
  description:
    'Computadores armados, configurados y probados antes de publicarse en Chile. PCs, armado, mantenimiento, optimización y upgrades de hardware.',
  instagram: { handle: '@guglielmini.pc', url: 'https://www.instagram.com/guglielmini.pc/' },
  ogImage: { src: '/og-guglielmini.png', width: 1734, height: 907 },
  locale: 'es_CL',
} as const

/** Menú global. Cada entrada lleva a su propia sección con su propio menú local. */
export const navigation = [
  { href: '/pcs', label: 'Equipos' },
  { href: '/services', label: 'Servicios' },
  { href: '/proceso-armado', label: 'Proceso' },
  { href: '/guias', label: 'Guías' },
  { href: '/about', label: 'Nosotros' },
  { href: '/contact', label: 'Contacto' },
] as const
