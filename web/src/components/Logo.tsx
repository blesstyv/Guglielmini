/**
 * Logotipo GUGLIELMINI 3.0 — evolución del original (ver docs/brand/).
 * Conserva el hexágono y la G geométrica del original; elimina la punta inferior,
 * el contorno interno y las barras para que funcione nítido desde 16 px y en un color.
 * El punto lima en el vértice superior es el "LED de encendido" de la marca.
 */
const G_PATH =
  'M84 40H57C43 40 34 49 34 61C34 74 43 83 57 83H75V70H59C51 70 47 67 47 61C47 55 51 51 59 51H84ZM71 62H91V88L79 95V74H71Z'

export function LogoMark({ className = '', title }: { className?: string; title?: string }) {
  return (
    <svg
      viewBox="10 0 100 119"
      className={className}
      role={title ? 'img' : undefined}
      aria-hidden={title ? undefined : true}
      aria-label={title}
    >
      <polygon
        points="60,5 105,30 105,88 60,114 15,88 15,30"
        fill="#fff"
        stroke="#F2298B"
        strokeWidth="6"
        strokeLinejoin="round"
      />
      <path d={G_PATH} fill="#F2298B" />
      <circle cx="60" cy="19" r="4.5" fill="#D9EF29" />
    </svg>
  )
}

export function Logo({ className = '' }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <LogoMark className="h-8 w-auto" />
      <span className="text-[1.15rem] font-bold tracking-[0.04em]">GUGLIELMINI</span>
    </span>
  )
}

export { G_PATH }
