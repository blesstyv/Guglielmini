# Progreso

_Última actualización: 2026-11-10 (rediseño) — rama `rebuild/guglielmini-v3`_

## Completado
- [x] Fase 1 — Reconocimiento del repo v2 (React 19 + Vite 8, 9 páginas, 1 producto, carrito, WhatsApp).
- [x] Fase 2 — Arquitectura Next.js 16 + TS + Tailwind 4 en `web/`.
- [x] Fase 3 — Sistema de diseño "banco de pruebas" y logotipo evolucionado (propuesta).
- [x] Fase 4/5 — 11 rutas + 404/error; datos, fotos, servicios, carrito y WhatsApp migrados.
- [x] Fase 6 — Lint, typecheck, 17 unitarias, 39 E2E (escritorio + móvil), axe 0 violaciones, Lighthouse 95–100.
- [x] Fase 7 — README, CLAUDE.md y documentación en `docs/`.
- [x] Rediseño "Galería de hardware" según la referencia de estilo del dueño: base blanca, morado y dorado, navegación en dos niveles, sub-páginas, animaciones nativas.
- [x] Ajustes pedidos por el dueño: sin negro (fondo blanco), fotos completas con transparencia, galería más pequeña, menos texto.
- [x] Pruebas tras el rediseño: 17 unitarias, 49 E2E (estables en 2 corridas), axe 0 violaciones en 14 rutas.

## Pendiente
- [x] Subido a GitHub (commit 39b0088) en `rebuild/guglielmini-v3` y `main`, a pedido del dueño.
- [x] Vercel: Root Directory `web`, framework Next.js, variable `NEXT_PUBLIC_WHATSAPP_NUMBER` (producción, preview y desarrollo). Deploy de producción READY y verificado en https://guglielmini.vercel.app (WhatsApp activo).
- [ ] Lighthouse sobre la web publicada.
- [ ] Eliminar la variable antigua `VITE_WHATSAPP_NUMBER` en Vercel cuando ya no se necesite el rollback a v2.
- [ ] Dueño: confirmar precio/disponibilidad del PC-001, aprobar logo v3 y guías.

## Problemas conocidos
- `npx playwright install` puede fallar en entornos con red restringida → usar `CHROME_PATH`.
- `SiteFooter` muestra el año de compilación (sitio estático): se actualiza en cada deploy.

## Siguiente objetivo
Ajustes de contenido que pida el dueño sobre la web publicada.
