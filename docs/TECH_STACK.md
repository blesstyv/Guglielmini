# Stack tecnológico

| Elegido | Por qué | Descartado (por ahora) |
|---|---|---|
| **Next.js 16** (App Router) | HTML prerenderizado por ruta (la v2 era SPA: Google veía `<div id="root">` vacío y los metadatos se cambiaban con JS), `next/image` (AVIF/WebP + tamaños responsive), Metadata API, sitemap/robots tipados, integración nativa con Vercel | Seguir con Vite SPA: requeriría SSR/prerender manual |
| **TypeScript** (strict + `noUncheckedIndexedAccess`) | El modelo `Product` impide publicar un equipo con datos incompletos | — |
| **Tailwind CSS 4** | Tokens en `@theme` como única fuente; sin 11 hojas CSS sueltas como en v2 | CSS-in-JS |
| **lucide-react** | Ya usado en v2, tree-shakeable | Phosphor (sin beneficio adicional) |
| **@fontsource-variable/inter** | Inter (sustituto de SF Pro según la referencia de diseño), autoalojada | Space Grotesk y JetBrains Mono (retiradas en el rediseño) |
| **React `ViewTransition` + View Transitions API + CSS scroll-driven** | Transiciones entre páginas, elemento compartido, píldora deslizante y revelados ligados al scroll sin librerías | Motion, GSAP, Three.js/R3F (ver ADR-003 y ADR-012) |
| **Vitest** | Lógica pura (whatsapp, carrito, catálogo, formato, integridad de datos) | Jest |
| **Playwright + @axe-core/playwright** | Flujos reales en escritorio y móvil + WCAG 2.2 AA | Cypress |
| **Oxlint** | Ya usado en v2; muy rápido; plugins react, jsx-a11y, nextjs | ESLint |
| shadcn/ui, Radix | No se necesitan diálogos/menús complejos aún; los componentes propios son más livianos | Reevaluar si se agrega checkout o panel |
| Sanity / CMS | Ver ADR-005 | — |

Versiones exactas: `web/package.json` + `package-lock.json`.
