# Registro de decisiones (ADR)

## ADR-001 — Reconstruir en `web/` y conservar `frontend/`
Nueva app en carpeta propia en vez de reescribir `frontend/`. Producción no se toca, la v2 queda recuperable y comparable, y el cambio en Vercel es sólo el Root Directory.

## ADR-002 — Next.js App Router con SSG
La v2 era una SPA: el HTML servido estaba vacío y título/descripción se cambiaban con JS (`RouteMeta.jsx`). Con SSG cada ruta llega con su HTML, metadatos y JSON-LD. Sin servidor que mantener: todo es estático.

## ADR-003 — Sin librerías de animación ni 3D
Motion/GSAP/Three.js evaluados. Las interacciones necesarias se logran con CSS e IntersectionObserver. Un modelo 3D del PC requeriría un escaneo real (no existe) y penalizaría el LCP móvil. Reevaluar si hay un modelo 3D real del equipo.

## ADR-004 — Precio y stock "por confirmar"
Los datos comerciales del repo son históricos. Se agrega `commercialDataConfirmedAt`; mientras sea `null` la UI no los presenta como vigentes y el JSON-LD omite `offers`. Evita publicar información comercial potencialmente falsa sin bloquear el sitio.

## ADR-005 — Sin CMS por ahora
Un CMS (Sanity) agrega cuenta, costo potencial, configuración y una dependencia externa para un catálogo de 1 producto y 2 guías. Los datos están tipados y aislados en `data/`, así que migrar después es directo. Revisar cuando haya >10 productos o publicación frecuente de guías.

## ADR-006 — Carrito guarda sólo ids
Evita que un precio viejo quede guardado en el navegador. Clave nueva (`-v3`) para no leer datos con formato de la v2.

## ADR-007 — Identidad: escenario negro + papel frío (reemplazada por ADR-010)
Las fotos tienen fondo negro puro; se usan sobre negro sin marcos. El contenido de lectura va sobre papel claro para legibilidad y para romper el "todo negro con un acento neón" genérico. Lima reservado a "verificado". Ver DESIGN_SYSTEM.md.

## ADR-008 — Imágenes WebP compuestas sobre negro (reemplazada por ADR-014)
Los PNG originales (≈9 MB en total, con transparencia) se componen sobre #000 y se exportan a WebP q90 (≈1 MB en total). `next/image` sirve AVIF/WebP al tamaño necesario. Los originales siguen en `frontend/src/assets`.

## ADR-009 — Guías iniciales
El brief pide no publicar artículos ficticios. Las 2 guías son contenido técnico factual basado en las pruebas reales ya documentadas (MemTest86, estrés de CPU, S.M.A.R.T., dual channel). Requieren revisión del dueño antes de publicar en producción.

## ADR-010 — Rediseño "Galería de hardware" según referencia del dueño
El dueño entregó una referencia de estilo (`docs/DESIGN_REFERENCE.md`) y pidió conservar sus colores, con predominio de morado y dorado, base blanca permitida y sin todo en una pantalla. Se reemplazó el concepto anterior por: base blanca, escenarios negros sólo para hardware, morado en el rol del azul de compra, dorado en el rol del amarillo técnico, Inter como sustituto de SF Pro. Se conservan datos, rutas, lógica y pruebas.

## ADR-011 — Navegación en dos niveles y sub-páginas
Menú global → sección con menú local propio. El equipo se divide en Resumen / Especificaciones / Rendimiento; servicios en una página por servicio; nosotros y contacto comparten menú; el proceso es un selector de etapas (pestañas ARIA) en vez de una página larga. Mejora el SEO (más páginas con contenido específico) y responde al pedido de no tener todo en una pantalla.

## ADR-012 — Animaciones sin librerías
Las animaciones pedidas se logran con React `ViewTransition` (incluido en Next 16), View Transitions API y animaciones CSS ligadas al scroll. Se mantiene el descarte de Motion/GSAP/Three.js: costarían 30–60 kB sin aportar efectos que no se logren ya. Lighthouse móvil local tras el cambio: rendimiento 94–96.

## ADR-013 — Píldora activa del menú local por View Transition
Una primera versión movía un indicador absoluto con JavaScript; axe detectó que durante el desplazamiento el texto blanco quedaba sobre fondo blanco. Se reemplazó por estilo directo en el enlace activo y un `view-transition-name` compartido, que anima el cambio sin afectar el contraste.

## ADR-014 — Todo blanco y fotos con transparencia
El dueño pidió eliminar todo lo negro, conservar el fondo blanco, mostrar las fotos completas, reducir la galería y quitar texto innecesario. Los PNG originales tenían el fondo recortado (transparente), así que se exportan a WebP conservando la transparencia y se muestran con `object-contain`. Los archivos se renombraron a `*-recorte.webp` para que ninguna caché (navegador o CDN) siga sirviendo la versión anterior con fondo negro. El dorado no se usa como texto porque no tiene contraste sobre blanco; queda como relleno y acento. El precio ya no lleva la frase "precio publicado, por confirmar": la ficha muestra sólo "Disponibilidad por confirmar." y el mensaje de WhatsApp pide confirmar.
