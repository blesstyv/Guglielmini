import { Check } from 'lucide-react'
import type { ValidationCheck } from '@/lib/types'

/** Pruebas superadas sobre escenario negro: dorado = verificado. */
export function ValidationList({ checks }: { checks: ValidationCheck[] }) {
  return (
    <ul className="grid gap-3 sm:grid-cols-2">
      {checks.map((c) => (
        <li key={c.test} className="tile tile-light reveal flex items-center gap-4 p-6">
          <span className="grid size-9 shrink-0 place-items-center rounded-full bg-gold text-black" aria-hidden>
            <Check size={18} strokeWidth={2.75} />
          </span>
          <span className="min-w-0">
            <span className="t-label block">{c.result}</span>
            <span className="t-small text-slate">{c.test}</span>
          </span>
        </li>
      ))}
    </ul>
  )
}
