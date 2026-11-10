# Despliegue en Vercel

> Producción sigue sirviendo `frontend/` (v2) hasta que el dueño apruebe el cambio. No hacer los pasos de producción sin esa aprobación.

## Vista previa (sin tocar producción)
Vercel crea un preview automático por cada push a una rama si el proyecto está conectado a GitHub. Para que la rama v3 construya `web/`:

Opción A — **proyecto nuevo** (recomendado para comparar lado a lado):
1. Vercel → Add New → Project → importar `blesstyv/Guglielmini`.
2. Root Directory: `web`. Framework: Next.js (autodetectado).
3. Environment Variables: `NEXT_PUBLIC_WHATSAPP_NUMBER` (Preview y Production).
4. Deploy. La rama `rebuild/guglielmini-v3` obtiene su URL de preview.

Opción B — mismo proyecto: cambiar Root Directory de `frontend` a `web` **afecta también producción en el próximo deploy de `main`**; hacerlo sólo al publicar.

## Publicar a producción (requiere aprobación)
1. Revisar y aprobar el PR `rebuild/guglielmini-v3 → main`.
2. En el proyecto de producción: Settings → Build & Deployment → Root Directory = `web`.
3. Settings → Environment Variables: crear `NEXT_PUBLIC_WHATSAPP_NUMBER` (la v2 usaba `VITE_WHATSAPP_NUMBER`; el nombre cambia).
4. Fusionar el PR. Vercel construye `web/` (`next build`).
5. Verificar: inicio, ficha, carrito → WhatsApp, `/sitemap.xml`, `/the-lab` redirige.

## Rollback
Vercel → Deployments → último deploy de la v2 → "Promote to Production". O revertir Root Directory a `frontend`. La carpeta `frontend/` se mantiene intacta para esto.

## Compatibilidad de URLs
Se conservan todas las rutas de la v2 (`/pcs`, `/pcs/pc-001-ryzen-5-5600g`, `/services`, `/proceso-armado`, `/about`, `/contact`, `/cart`) y `/the-lab` redirige. No se pierde SEO.
