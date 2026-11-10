import type { SpecRow } from '@/lib/types'

/** Ficha técnica: etiqueta a la izquierda, modelo y detalle a la derecha, separados por keylines. */
export function SpecTable({ specs }: { specs: SpecRow[] }) {
  return (
    <dl className="border-t border-keyline">
      {specs.map((s) => (
        <div key={s.label} className="reveal grid gap-1 border-b border-keyline py-7 md:grid-cols-[14rem_1fr] md:gap-8">
          <dt className="t-label text-slate">{s.label}</dt>
          <dd>
            <span className="t-title block">{s.value}</span>
            {s.detail && <span className="mt-1 block text-slate">{s.detail}</span>}
          </dd>
        </div>
      ))}
    </dl>
  )
}
