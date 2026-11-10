# CLAUDE.md — GUGLIELMINI

Contexto rápido para futuras sesiones. Léelo antes de tocar código.

## Qué es
Sitio comercial de GUGLIELMINI (Chile): PCs armados y probados + servicios (armado, mantenimiento, optimización, upgrades).
Web: https://guglielmini.vercel.app · Instagram: @guglielmini.pc · Repo: blesstyv/Guglielmini

## Estructura
- `web/` — **versión 3 (activa)**: Next.js 16 App Router + TypeScript + Tailwind CSS 4. Todo se prerenderiza (SSG).
- `frontend/` — versión 2 (React 19 + Vite). **No borrar**: es la versión recuperable y la que sigue en producción hasta aprobar el cambio.
- `docs/` — arquitectura, diseño, decisiones, progreso. `docs/PROGRESS.md` = estado actual y próximo paso.

## Comandos (desde `web/`)
```bash
npm ci
npm run dev          # http://localhost:3000
npm run check        # lint + typecheck + unit + build (correr antes de cada commit)
CHROME_PATH=/usr/bin/google-chrome npm run test:e2e   # Playwright + axe (CHROME_PATH sólo si no se pudo descargar el navegador)
```

## Reglas del proyecto (no negociables)
1. **Nunca inventar** precios, stock, fotos, FPS, pruebas, garantías ni testimonios. Datos comerciales en `web/src/data/`.
2. Precio/stock del repo son **históricos**: `commercialDataConfirmedAt: null` ⇒ la UI dice "por confirmar". Sólo el dueño fija una fecha.
3. WhatsApp sólo por `NEXT_PUBLIC_WHATSAPP_NUMBER` (Vercel env). Nunca escribir números en el código.
4. Sin secretos en Git. Sin force push. Sin merge a `main` ni deploy a producción sin aprobación del dueño.
5. Trabajo en la rama `rebuild/guglielmini-v3`. **El dueño hace los commits y el push**: Claude entrega los cambios sin confirmarlos y explica qué cambió.
6. Accesibilidad WCAG 2.2 AA: la suite axe debe quedar en 0 violaciones. Respetar `prefers-reduced-motion`.

## Dónde está cada cosa (web/src)
- `data/` products, services, process, guides (contenido tipado — futuro CMS)
- `lib/` types, whatsapp (mensajes contextuales), cart (lógica pura), catalog (búsqueda/filtros), format, site
- `components/` UI; `components/product/*` ficha; `CartProvider` (localStorage, guarda sólo ids)
- `app/` rutas; `sitemap.ts`, `robots.ts`, `manifest.ts`, `icon.svg`
- Diseño: tokens en `app/globals.css` (`@theme`), explicados en `docs/DESIGN_SYSTEM.md`. Referencia de estilo del dueño: `docs/DESIGN_REFERENCE.md` (**todo blanco, sin superficies negras**, morado #972BD1 y dorado #D9EF29 predominantes — dorado sólo como relleno, nunca texto —, fotos completas, poco texto, cada sección con su menú local)

## Agregar un PC nuevo
1. Fotos reales a `web/public/images/<id>/` (WebP **con fondo transparente**, se muestran completas con `object-contain`).
2. Objeto nuevo en `web/src/data/products.ts` (el tipo `Product` obliga a completar todo).
3. `npm run check`. La ruta, el sitemap y el catálogo se actualizan solos.
