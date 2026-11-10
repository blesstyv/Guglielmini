# Funcionalidades — GUGLIELMINI 3.0

| Ruta | Menú local | Contenido |
|---|---|---|
| `/` | — | Hero sobre blanco con el PC-001 y 4 accesos (Equipos, Servicios, Proceso, Guías) |
| `/pcs` | Equipos | Catálogo: búsqueda sin tildes, filtros, orden, estado vacío, URL compartible |
| `/pcs/[slug]` | PC-001: **Resumen** · Especificaciones · Rendimiento · Comprar | Galería, precio por confirmar, WhatsApp, carrito, cifras clave, upgrade, notas |
| `/pcs/[slug]/especificaciones` | ídem | Ficha técnica de los 8 componentes |
| `/pcs/[slug]/rendimiento` | ídem | FPS medidos (cifras que cuentan, barras) y 7 pruebas superadas |
| `/services` | Servicios: **Todos** · 4 servicios | Tiles de los 4 servicios y cómo se coordina |
| `/services/[id]` | ídem | Detalle, precio, qué incluye, WhatsApp contextual, siguiente servicio |
| `/proceso-armado` | Proceso · Resultados del PC-001 | 6 etapas como pestañas con barra de progreso |
| `/guias`, `/guias/[slug]` | Guías: Todas · cada guía | Guías técnicas |
| `/about`, `/contact` | GUGLIELMINI: Nosotros · Contacto | Historia y principios / mensaje de WhatsApp armado por motivo |
| `/cart` | — | Lista, quitar, total, aviso de precios por confirmar, continuar por WhatsApp. `noindex` |
| `/the-lab` | — | Redirección 308 a `/proceso-armado` |
| 404 / error | — | Páginas propias |

## Mensajes de WhatsApp
Compra de producto, consulta de producto, carrito (con lista y total), servicio específico y 5 motivos de contacto. Todos comienzan con "Hola, vengo desde la web de GUGLIELMINI."

## Datos pendientes de confirmación por el dueño
- Precio ($700.000) y disponibilidad del PC-001 → registrar fecha en `commercialDataConfirmedAt`.
- Número de WhatsApp → variable de entorno en Vercel.
- Revisión de las 2 guías iniciales (redactadas a partir de las pruebas documentadas en el sitio).
- Aprobación del logotipo evolucionado.
