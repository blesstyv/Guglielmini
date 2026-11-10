'use client'

import Image from 'next/image'
import { useState, ViewTransition, type KeyboardEvent } from 'react'
import type { ProductImage } from '@/lib/types'

/**
 * Galería compacta: foto completa (sin recortes) sobre porcelana, altura limitada
 * a la pantalla, crossfade con leve zoom, miniaturas pequeñas y flechas del teclado.
 */
export function ProductGallery({ images, code, transitionName }: { images: ProductImage[]; code: string; transitionName?: string }) {
  const [active, setActive] = useState(0)

  function onKey(e: KeyboardEvent<HTMLButtonElement>) {
    const delta = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0
    if (!delta) return
    e.preventDefault()
    const next = (active + delta + images.length) % images.length
    setActive(next)
    ;(e.currentTarget.parentElement?.parentElement?.children[next]?.firstElementChild as HTMLElement | null)?.focus()
  }

  const stage = (
    <div className="tile tile-light relative h-[min(56vh,30rem)] w-full">
      {images.map((img, i) => (
        <Image
          key={img.src}
          src={img.src}
          alt={i === active ? img.alt : ''}
          aria-hidden={i !== active}
          fill
          priority={i === 0}
          sizes="(min-width: 1024px) 40vw, 90vw"
          className={`object-contain p-6 transition-[opacity,transform] duration-[800ms] ease-[var(--ease-out-expo)] ${i === active ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}
        />
      ))}
    </div>
  )

  return (
    <div>
      {transitionName ? (
        <ViewTransition name={transitionName} share="hero-media">
          {stage}
        </ViewTransition>
      ) : (
        stage
      )}
      <ul aria-label="Fotografías del equipo" className="mt-3 flex justify-center gap-2">
        {images.map((img, i) => (
          <li key={img.src}>
            <button
              type="button"
              aria-pressed={i === active}
              aria-label={`Ver foto ${i + 1} de ${images.length}: ${img.alt}`}
              onClick={() => setActive(i)}
              onKeyDown={onKey}
              className="relative block size-14 overflow-hidden rounded-xl bg-porcelain opacity-60 ring-violet transition duration-300 hover:opacity-100 aria-pressed:opacity-100 aria-pressed:ring-2"
            >
              <Image src={img.src} alt="" fill sizes="56px" className="object-contain p-1" />
            </button>
          </li>
        ))}
      </ul>
      <p className="sr-only" aria-live="polite">
        {code}, foto {active + 1} de {images.length}
      </p>
    </div>
  )
}
