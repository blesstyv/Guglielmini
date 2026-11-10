/** Datos estructurados. Sólo incluye hechos verificables (sin reseñas ni ofertas sin confirmar). */
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }} />
}
