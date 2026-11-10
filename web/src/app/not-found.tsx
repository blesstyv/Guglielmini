import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="wrap py-28 text-center">
      <p className="t-small tnum text-slate">Error 404</p>
      <h1 className="t-display mt-3">
        <span className="line-mask">
          <span>Esta página no existe.</span>
        </span>
      </h1>
      <p className="t-intro enter-up mx-auto mt-5 max-w-[32ch] text-slate">El enlace puede estar mal escrito o el equipo ya no está publicado.</p>
      <div className="enter-up mt-8 flex flex-wrap justify-center gap-3">
        <Link href="/pcs" className="pill pill-primary">
          Ver equipos
        </Link>
        <Link href="/" className="pill pill-outline">
          Ir al inicio
        </Link>
      </div>
    </div>
  )
}
