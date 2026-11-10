import type { Benchmark } from '@/lib/types'
import { CountUp } from '../CountUp'

const SCALE = 180

/** FPS medidos como "feature metric tiles": cifra dorada que cuenta, barra que crece con el scroll. */
export function BenchmarkTiles({ benchmarks }: { benchmarks: Benchmark[] }) {
  return (
    <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {benchmarks.map((b) => (
        <li key={b.game} className="tile tile-light reveal flex min-h-56 flex-col p-7">
          <h3 className="t-label">{b.game}</h3>
          <p className="t-small text-slate">{b.settings}</p>
          <p className="mt-auto pt-8 text-violet">
            <span className="text-[3.5rem] font-semibold leading-none tracking-tight">
              <CountUp value={b.fpsMin} />
              {b.fpsMax > b.fpsMin && (
                <>
                  <span aria-hidden>–</span>
                  <span className="sr-only"> a </span>
                  <CountUp value={b.fpsMax} />
                </>
              )}
            </span>
            <span className="t-small ml-1.5 text-slate">FPS</span>
          </p>
          <div className="mt-5 h-1 overflow-hidden rounded-full bg-keyline" aria-hidden>
            <div className="bar-grow h-full rounded-full bg-gold" style={{ width: `${(b.fpsMax / SCALE) * 100}%` }} />
          </div>
        </li>
      ))}
    </ul>
  )
}
