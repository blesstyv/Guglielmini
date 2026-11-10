# Sistema de diseño — GUGLIELMINI 3.0 "Galería de hardware"

Basado en la referencia de estilo entregada por el dueño (`docs/DESIGN_REFERENCE.md`) y adaptado a la marca:

| Indicación del dueño | Cómo se aplicó |
|---|---|
| Basarse en el design.md | Escenarios negros para el hardware, titulares grandes de peso 600, radio 28 px, píldoras, cero sombras, keylines de 1 px, barra global de 44 px y barra local de 20 px de radio |
| Mantener los colores actuales | Morado #972BD1, magenta #F2298B y lima/dorado #D9EF29 de la v2 |
| Eliminar todo lo negro, fondo blanco | No hay superficies negras: página blanca y tiles porcelana. Las fotos originales tenían fondo transparente; se exportan así, por lo que el equipo aparece completo y "flota" sobre el blanco |
| Predominio morado y dorado | Morado = acciones, estado activo, cifras y acento del titular. Dorado = rellenos de "verificado", barras de FPS, punto de disponibilidad y líneas de acento (nunca como texto: sobre blanco no se lee) |
| Fotos incompletas | `object-contain`: las fotos nunca se recortan |
| Galería muy grande | Altura máxima `min(56vh, 30rem)`, miniaturas de 56 px |
| Texto innecesario | Fuera la nota de pesos chilenos, descripciones del pie, notas repetidas de precio y de servicios. Sólo queda "Disponibilidad por confirmar." en la ficha |
| No todo en una pantalla | Cada entrada del menú global es su propia sección con menú local; equipo y servicios tienen sub-páginas; el proceso es un selector de etapas |
| Las mejores animaciones, limpio y minimalista | Ver "Movimiento" |

## Tokens (`web/src/app/globals.css` → `@theme`)

| Rol en la referencia | Token GUGLIELMINI | Valor | Uso |
|---|---|---|---|
| Fondo blanco | `canvas` | #FFFFFF | Página |
| Porcelain | `porcelain` | #F5F5F7 | Tiles claros, campos, pie |
| Texto | `ink` | #1D1D1F | Texto sobre blanco (16.8:1) |
| Slate | `slate` | #6E6E73 | Texto secundario sobre blanco (5.1:1) |
| Keyline | `keyline` | #D2D2D7 | Bordes de 1 px |
| **Azul de compra → Morado** | `violet` | #972BD1 | Botones principales, píldora activa, enlaces sobre blanco, foco (blanco sobre morado 5.9:1) |
| Magenta | `magenta` | #F2298B | Reservado (logo). Sin uso como texto |
| **Optical yellow → Dorado** | `gold` | #D9EF29 | Rellenos: círculos de verificado (con check negro, 16:1), barras, acentos. Nunca como texto |

## Tipografía
- **Inter Variable** (sustituto de SF Pro indicado en la referencia), autoalojada con `@fontsource-variable/inter`.
- Escala: display 80 px (`.t-display`), headline 56 px, título 32 px, cifra 28 px, etiqueta 19 px, intro 24 px, cuerpo 17 px, pequeño 14 px, micro 12 px.
- Tracking negativo en tamaños grandes; cifras con `tabular-nums`.
- Se eliminaron Space Grotesk y JetBrains Mono.

## Forma y superficies
- Tiles: radio 28 px, sin sombra, porcelana (`tile-light`) o blanco con keyline, en grillas de 2 columnas con 12 px de separación.
- Fotos: WebP con transparencia, siempre `object-contain`, sobre blanco o porcelana.
- Botones: píldora (`.pill-primary` morado, `.pill-outline`, `.pill-quiet`). Cápsula de precio `.capsule` junto al botón principal.
- Campos: píldora de 980 px de radio sobre porcelana.
- Navegación: barra global blanca translúcida de 44 px + barra local contenida (radio 20 px, keyline) que cambia por sección.

## Movimiento
Todo con CSS nativo y APIs del navegador, sin librerías:
1. **Transición entre páginas** (React `ViewTransition` + View Transitions API): el contenido sale hacia arriba y entra subiendo.
2. **Foto compartida**: la foto del PC viaja desde la portada o el catálogo hasta la ficha (elemento compartido `hero-media`).
   La foto del hero entra subiendo y escalando, con un halo morado difuminado detrás.
3. **Píldora del menú local**: se desliza a la nueva sub-página (`view-transition-name: local-nav-pill`).
4. **Titulares enmascarados**: cada línea sube desde una máscara; la foto del hero se "enciende" (zoom + brillo).
5. **Revelado ligado al scroll** (`animation-timeline: view()`): tiles suben y se escalan; barras de FPS crecen; fotos hacen zoom suave. Sin soporte, el contenido es estático.
6. **Cifras que cuentan** hasta el FPS medido al entrar en pantalla (el valor final siempre está en el HTML).
7. **Respuesta a acciones**: crossfade con zoom en la galería, panel de etapas con blur-in, checks que aparecen, contador del carrito con rebote, menú móvil en cascada.

`prefers-reduced-motion: reduce` desactiva todo. Navegadores sin View Transitions navegan igual, sin animación.

## Logotipo
`docs/brand/logo-v3.svg` (evolución, ahora con interior blanco en vez de negro) y `docs/brand/logo-original-v2.svg` (original). Pendiente de aprobación.

## Redacción
Español de Chile, frases cortas y directas, sin etiquetas en mayúsculas. Los botones dicen qué pasa ("Consultar por WhatsApp", "Agregar al carrito").
