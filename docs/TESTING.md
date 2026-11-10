# Pruebas

## Unitarias — Vitest (`web/tests/unit`)
`npm run test` · 17 pruebas
- `whatsapp.test.ts`: limpieza del número, URL nula sin número, codificación, contenido de cada mensaje.
- `cart.test.ts`: sin duplicados, quitar, almacenamiento corrupto, precios desde el catálogo.
- `catalog.test.ts`: búsqueda sin tildes, filtros, orden + integridad de datos (slugs únicos, alt en fotos, FPS coherentes, precio no confirmado).
- `format.test.ts`: CLP y rangos de FPS.

## E2E + accesibilidad — Playwright (`web/tests/e2e`)
`npm run test:e2e` · 49 pruebas, contra el build de producción, en escritorio (Desktop Chrome) y móvil (Pixel 7).
- Flujos: portada → ficha, menú local y sub-páginas (equipo y servicios), selector de etapas con teclado, galería (clic y teclado), carrito completo con persistencia y mensaje de WhatsApp, catálogo (búsqueda, vacío, URL), contacto, redirección heredada, 404, menú móvil, SEO (título, canonical, JSON-LD, sitemap).
- axe-core con etiquetas WCAG 2.0/2.1/2.2 A y AA en 14 rutas, con 0 violaciones exigidas; skip link por teclado.

Si `npx playwright install` no puede descargar el navegador, usar un Chrome local: `CHROME_PATH=/ruta/a/chrome npm run test:e2e`.

## Lighthouse
Ejecutado localmente (emulación móvil, `next start`), 10-11-2026, después del rediseño. Hay variación entre corridas locales:

| Ruta | Rend. | Accesib. | Buenas prácticas | SEO | LCP | CLS | TBT |
|---|---|---|---|---|---|---|---|
| `/` | 94–96 | 100 | 100 | 100 | 2,6–2,7 s | 0 | 70–170 ms |
| `/pcs/pc-001-ryzen-5-5600g` | 89 (1 medición, con la máquina cargada) | 100 | 100 | 100 | 2,1 s | 0 | 390 ms |

Los valores en Vercel (CDN + optimización de imágenes en el edge) deberían ser iguales o mejores; medir de nuevo en el preview.

## Hallazgos corregidos gracias a las pruebas
- Contraste: etapas atenuadas en el proceso (v3.0) y el indicador deslizante del menú local (rediseño).
- Enlaces dentro de un texto distinguidos sólo por color → ahora subrayados.
- Buscador del catálogo: texto escrito antes de terminar la carga se perdía; el formulario expone `data-ready` y la prueba lo espera.
