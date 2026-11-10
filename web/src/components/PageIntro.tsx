/** Encabezado de página: titular grande centrado al estilo galería, con entrada enmascarada. */
export function PageIntro({ title, intro, children, align = 'center' }: { title: string; intro?: React.ReactNode; children?: React.ReactNode; align?: 'center' | 'left' }) {
  const center = align === 'center'
  return (
    <header className={`wrap pb-12 pt-16 md:pb-16 md:pt-24 ${center ? 'text-center' : ''}`}>
      <h1 className="t-display">
        <span className="line-mask">
          <span>{title}</span>
        </span>
      </h1>
      {intro && (
        <p className={`t-intro enter-up mt-5 max-w-[34ch] text-slate ${center ? 'mx-auto' : ''}`} style={{ '--d': 180 } as React.CSSProperties}>
          {intro}
        </p>
      )}
      {children && (
        <div className={`enter-up mt-8 flex flex-wrap gap-3 ${center ? 'justify-center' : ''}`} style={{ '--d': 300 } as React.CSSProperties}>
          {children}
        </div>
      )}
    </header>
  )
}
