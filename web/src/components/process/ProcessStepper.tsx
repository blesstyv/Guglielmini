'use client'

import { useRef, useState, type KeyboardEvent } from 'react'
import { Check } from 'lucide-react'
import type { ProcessStep } from '@/data/process'

/**
 * Las 6 etapas como pestañas: se elige una y el panel cambia (no todo en la misma pantalla).
 * Patrón ARIA tabs con flechas, Inicio y Fin.
 */
export function ProcessStepper({ steps }: { steps: ProcessStep[] }) {
  const [active, setActive] = useState(0)
  const tabs = useRef<(HTMLButtonElement | null)[]>([])
  const step = steps[active]!

  function go(i: number) {
    const n = (i + steps.length) % steps.length
    setActive(n)
    tabs.current[n]?.focus()
  }
  function onKey(e: KeyboardEvent) {
    const map: Record<string, number> = { ArrowRight: active + 1, ArrowDown: active + 1, ArrowLeft: active - 1, ArrowUp: active - 1, Home: 0, End: steps.length - 1 }
    if (e.key in map) {
      e.preventDefault()
      go(map[e.key]!)
    }
  }

  return (
    <div className="wrap-wide grid gap-3 pb-24 lg:grid-cols-[22rem_1fr]">
      <div role="tablist" aria-label="Etapas del proceso" aria-orientation="vertical" className="tile tile-light flex gap-1 overflow-x-auto p-2 no-scrollbar lg:flex-col">
        {steps.map((s, i) => (
          <button
            key={s.title}
            ref={(el) => {
              tabs.current[i] = el
            }}
            role="tab"
            id={`tab-${i}`}
            type="button"
            aria-selected={i === active}
            aria-controls="panel-etapa"
            tabIndex={i === active ? 0 : -1}
            onClick={() => setActive(i)}
            onKeyDown={onKey}
            className="flex shrink-0 items-center gap-3 rounded-[20px] px-4 py-3.5 text-left text-slate transition-colors duration-300 hover:text-ink aria-selected:bg-white aria-selected:text-ink aria-selected:shadow-[0_0_0_1px_var(--color-keyline)]"
          >
            <span className={`t-micro tnum grid size-7 shrink-0 place-items-center rounded-full font-semibold transition-colors duration-300 ${i < active ? 'bg-gold text-ink' : i === active ? 'bg-violet text-white' : 'bg-white text-slate'}`}>
              {i < active ? <Check size={13} strokeWidth={3} aria-hidden /> : i + 1}
            </span>
            <span className="t-small whitespace-nowrap font-medium lg:whitespace-normal">{s.title}</span>
          </button>
        ))}
      </div>

      <div role="tabpanel" id="panel-etapa" aria-labelledby={`tab-${active}`} className="tile flex min-h-[28rem] flex-col bg-white p-9 shadow-[0_0_0_1px_var(--color-keyline)] md:p-14">
        <div className="h-1 overflow-hidden rounded-full bg-keyline" aria-hidden>
          <div className="h-full rounded-full bg-gold transition-[width] duration-700 ease-[var(--ease-out-expo)]" style={{ width: `${((active + 1) / steps.length) * 100}%` }} />
        </div>
        <div key={active} className="swap-in mt-10 flex flex-1 flex-col">
          <p className="t-small tnum text-slate">
            Etapa {active + 1} de {steps.length}
          </p>
          <h2 className="t-headline mt-2">{step.title}</h2>
          <p className="t-intro mt-5 max-w-[36ch] text-slate">{step.description}</p>
          <ul className="mt-auto grid gap-3 pt-10 sm:grid-cols-3">
            {step.checks.map((c) => (
              <li key={c} className="flex items-center gap-3 rounded-2xl bg-porcelain p-4">
                <Check size={16} className="shrink-0 text-violet" aria-hidden />
                <span className="t-small">{c}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-8 flex justify-between gap-3">
          <button type="button" className="pill pill-quiet pill-sm" onClick={() => setActive(active - 1)} disabled={active === 0}>
            Etapa anterior
          </button>
          <button type="button" className="pill pill-primary pill-sm" onClick={() => setActive(active + 1)} disabled={active === steps.length - 1}>
            Siguiente etapa
          </button>
        </div>
      </div>
    </div>
  )
}
