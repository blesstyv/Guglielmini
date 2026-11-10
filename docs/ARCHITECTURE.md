# Arquitectura — GUGLIELMINI 3.0

## Visión general
Sitio estático generado con **Next.js App Router**. No hay backend ni base de datos: el catálogo es pequeño, cambia con poca frecuencia y la venta se cierra por WhatsApp. Todas las rutas se prerenderizan en el build (SSG), lo que da HTML completo para SEO y tiempos de carga mínimos en Vercel.

```
web/src
├── app/                 Rutas (Server Components por defecto)
│   ├── page.tsx         Inicio
│   ├── pcs/             Catálogo + [slug] ficha (generateStaticParams)
│   ├── pcs/[slug]/      layout con menú local + page, especificaciones/, rendimiento/
│   ├── services/        layout con menú local + page + [id]
│   ├── (empresa)/       grupo de rutas: about/ y contact/ comparten menú local
│   ├── proceso-armado/ cart/
│   ├── guias/           Índice + [slug]
│   ├── sitemap.ts robots.ts manifest.ts icon.svg
│   ├── not-found.tsx error.tsx layout.tsx globals.css
├── components/          UI. Client Components sólo donde hay interacción:
│   ├── CartProvider     contexto + localStorage
│   ├── GlobalNav        barra global de 44px, menú móvil, contador del carrito
│   ├── LocalNav         barra local por sección (cambia según el menú global)
│   ├── CountUp PageIntro WhatsAppButton
│   ├── catalog/         buscador/filtros (estado reflejado en la URL)
│   ├── product/         galería, specs, benchmarks, validación, precio, add-to-cart
│   ├── contact/ cart/ process/
├── data/                Contenido tipado (products, services, process, guides)
└── lib/                 Lógica pura y testeable (whatsapp, cart, catalog, format, types, site)
```

## Capas
1. **Datos** (`data/`): objetos tipados por `lib/types.ts`. Es el contrato que un CMS futuro debe respetar.
2. **Lógica** (`lib/`): funciones puras sin React → probadas con Vitest.
3. **Presentación** (`components/`, `app/`): Server Components por defecto; `'use client'` sólo en galería, carrito, catálogo, contacto, header y timeline.

## Navegación y transiciones
- Dos niveles: `GlobalNav` (layout raíz) y `LocalNav` (layout de cada sección o la página).
- El `<main>` está envuelto en `<ViewTransition default="page">`; las fotos del equipo comparten `name="media-<id>"` para morfar entre portada/catálogo y ficha.

## Estado
- Carrito: React Context. Persiste **sólo ids** en `localStorage` (`guglielmini-cart-v3`); precios siempre del catálogo vigente. Datos corruptos o ids inexistentes se descartan.
- Catálogo: estado local sincronizado con la URL (`?q=&categoria=&estado=&orden=`) para compartir búsquedas.

## WhatsApp
`lib/whatsapp.ts` genera mensajes contextuales (producto, carrito, servicio, motivo de contacto). El número viene de `NEXT_PUBLIC_WHATSAPP_NUMBER`; si falta, los botones se muestran deshabilitados con explicación.

## SEO
- Metadata API por ruta (título, descripción, canonical, Open Graph).
- `sitemap.xml` y `robots.txt` generados desde los datos.
- JSON-LD: `Organization` (layout), `Product` (sin `offers` mientras el precio no esté confirmado), `Article` (guías).

## Seguridad
- Cabeceras: `X-Content-Type-Options`, `Referrer-Policy`, `X-Frame-Options: DENY`, `Permissions-Policy`. `poweredByHeader` desactivado.
- Sin formularios que envíen datos a servidores; el contacto sólo arma un enlace `wa.me`.
- JSON-LD escapado (`<` → `<`).
- `npm audit`: 0 vulnerabilidades al momento del build.

## Escalabilidad
- Nuevo producto/guía = un objeto en `data/`. Rutas, sitemap y catálogo se actualizan solos.
- Si el catálogo crece o el dueño quiere editar sin código, reemplazar `data/*.ts` por consultas a un CMS (ver DECISIONS.md, ADR-005) manteniendo los tipos.
