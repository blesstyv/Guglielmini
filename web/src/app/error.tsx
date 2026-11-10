'use client'

export default function Error({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <div className="wrap py-28 text-center">
      <h1 className="t-display">Algo falló al cargar esta página.</h1>
      <p className="t-intro mx-auto mt-5 max-w-[32ch] text-slate">Vuelve a intentarlo. Si sigue fallando, escríbenos por Instagram.</p>
      <button type="button" className="pill pill-primary mt-8" onClick={reset}>
        Reintentar
      </button>
    </div>
  )
}
