# GUGLIELMINI

Plataforma web de **GUGLIELMINI**, emprendimiento chileno de computadores armados y probados, hardware y servicios tecnológicos.

🌐 https://guglielmini.vercel.app · 📷 [@guglielmini.pc](https://www.instagram.com/guglielmini.pc/)

## Versiones en este repositorio

| Carpeta | Versión | Stack | Estado |
|---|---|---|---|
| `web/` | 3.0 | Next.js 16, TypeScript, Tailwind CSS 4 | Nueva plataforma (rama `rebuild/guglielmini-v3`) |
| `frontend/` | 2.x | React 19, Vite 8 | Producción actual, se conserva como respaldo |

## Inicio rápido

```bash
cd web
cp .env.example .env.local   # completa NEXT_PUBLIC_WHATSAPP_NUMBER
npm ci
npm run dev
```

## Calidad

```bash
npm run check      # oxlint + TypeScript + Vitest + build
npm run test:e2e   # Playwright: flujos + accesibilidad axe (escritorio y móvil)
```

## Documentación

- [Arquitectura](docs/ARCHITECTURE.md) · [Sistema de diseño](docs/DESIGN_SYSTEM.md) · [Funcionalidades](docs/FEATURES.md)
- [Stack](docs/TECH_STACK.md) · [Desarrollo](docs/DEVELOPMENT.md) · [Despliegue](docs/DEPLOYMENT.md) · [Pruebas](docs/TESTING.md)
- [Decisiones](docs/DECISIONS.md) · [Progreso](docs/PROGRESS.md)
