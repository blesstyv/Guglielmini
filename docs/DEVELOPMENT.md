# Desarrollo

## Requisitos
Node.js ≥ 20.9 (probado con 22.x) y npm.

## Primer uso
```bash
cd web
cp .env.example .env.local
npm ci
npm run dev
```

## Variables de entorno
| Variable | Obligatoria | Descripción |
|---|---|---|
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | Sí (producción) | Número en formato internacional, sólo dígitos (`569XXXXXXXX`). Sin ella, los botones de WhatsApp quedan deshabilitados. |
| `NEXT_PUBLIC_SITE_URL` | No | URL canónica. Por defecto `https://guglielmini.vercel.app`. |

`.env.local` está en `.gitignore`. Nunca subir un número o secreto al repo.

## Flujo de trabajo
1. Rama desde `rebuild/guglielmini-v3` (o la que corresponda).
2. `npm run check` antes de cada commit.
3. `npm run test:e2e` antes de abrir PR.
4. Actualizar `docs/PROGRESS.md`.

## Tareas comunes
- **Nuevo PC**: ver `CLAUDE.md` → "Agregar un PC nuevo".
- **Confirmar precio**: en `data/products.ts` pon `commercialDataConfirmedAt: '2026-11-15'` (fecha real de confirmación). La UI pasará a "Precio vigente".
- **Marcar vendido**: `availability: 'vendido'`, `stock: 0`. El botón de carrito se deshabilita y se ordena al final.
- **Nueva guía**: objeto en `data/guides.ts`. Sólo contenido verificable.
- **Cambiar precios de servicios**: `data/services.ts` (y la descripción en `app/services/page.tsx` metadata).
