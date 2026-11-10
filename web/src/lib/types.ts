/**
 * Modelo de contenido de GUGLIELMINI.
 * Toda la información comercial vive en src/data y se tipa aquí, para que un
 * futuro CMS (p. ej. Sanity) pueda reemplazar los archivos sin tocar la UI.
 */

export type Availability = 'disponible' | 'reservado' | 'vendido' | 'por-confirmar'

export interface ProductImage {
  src: string
  alt: string
  width: number
  height: number
}

export interface SpecRow {
  /** Nombre del componente, p. ej. "Procesador". */
  label: string
  /** Modelo exacto. */
  value: string
  /** Datos técnicos complementarios. */
  detail?: string
}

export interface Benchmark {
  game: string
  /** FPS promedio medido. Si hubo un rango, min y max. */
  fpsMin: number
  fpsMax: number
  settings: string
}

export interface ValidationCheck {
  test: string
  result: string
}

export interface Product {
  id: string
  slug: string
  /** Código interno visible, p. ej. "PC-001". */
  code: string
  name: string
  category: string
  availability: Availability
  stock: number
  /** Precio en CLP registrado en el repositorio. */
  price: number
  /**
   * Fecha ISO en que el dueño confirmó precio y disponibilidad por última vez.
   * null = dato histórico, debe confirmarse por WhatsApp.
   */
  commercialDataConfirmedAt: string | null
  condition: string
  summary: string
  description: string
  images: ProductImage[]
  highlights: { label: string; value: string }[]
  specs: SpecRow[]
  benchmarks: Benchmark[]
  validation: ValidationCheck[]
  upgrade: string
  notes: string[]
}

export interface Service {
  id: string
  title: string
  /** Precio visible tal como lo define el negocio, p. ej. "Desde $19.990". */
  price: string
  summary: string
  includes: string[]
  /** Texto usado en el mensaje contextual de WhatsApp. */
  whatsappTopic: string
}

export interface Guide {
  slug: string
  title: string
  /** Etiqueta corta para el menú local. */
  navLabel: string
  summary: string
  /** ISO date. */
  publishedAt: string
  readingMinutes: number
  sections: { heading: string; paragraphs: string[] }[]
}
