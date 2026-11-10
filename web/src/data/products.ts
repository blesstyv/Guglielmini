import type { Product } from '@/lib/types'

/**
 * Catálogo. Datos recuperados de frontend/src/data/pcs.js (versión 2).
 * Precio, stock y disponibilidad son históricos: commercialDataConfirmedAt = null
 * hace que la interfaz los muestre como "por confirmar".
 * Para confirmar, registra la fecha ISO del día en que se verificaron.
 */
export const products: Product[] = [
  {
    id: 'pc-001',
    slug: 'pc-001-ryzen-5-5600g',
    code: 'PC-001',
    name: 'PC Gamer Ryzen 5 5600G',
    category: 'PC gamer de entrada',
    availability: 'disponible',
    stock: 1,
    price: 700000,
    commercialDataConfirmedAt: null,
    condition: 'Armado y probado',
    summary: 'Ryzen 5 5600G, 16 GB RGB en dual channel, NVMe de 1 TB y fuente 850 W Gold.',
    description:
      'Equipo preparado para gaming competitivo, uso diario y futuras mejoras de hardware. Hoy funciona con los gráficos Radeon Vega 7 integrados en el procesador.',
    images: [
      {
        src: '/images/pc-001/pc-001-setup-recorte.webp',
        alt: 'PC-001 completo: gabinete XYZ Airone 50 Mesh con ventiladores RGB encendidos en magenta',
        width: 1122,
        height: 1402,
      },
      {
        src: '/images/pc-001/pc-001-interior1-recorte.webp',
        alt: 'Interior del PC-001 visto desde el panel de vidrio: placa ASUS, memorias XPG RGB y cooler Wraith Stealth',
        width: 1122,
        height: 1402,
      },
      {
        src: '/images/pc-001/pc-001-interior2-recorte.webp',
        alt: 'Interior del PC-001 de frente, con el cableado ordenado detrás de la placa',
        width: 1122,
        height: 1402,
      },
      {
        src: '/images/pc-001/pc-001-kit-recorte.webp',
        alt: 'Cajas originales de la fuente Hydra, el procesador Ryzen 5 y la placa ASUS PRIME A520M-K junto al equipo',
        width: 1122,
        height: 1402,
      },
    ],
    highlights: [
      { label: 'CPU', value: '6 núcleos, 12 hilos' },
      { label: 'RAM', value: '16 GB' },
      { label: 'SSD', value: '1 TB NVMe' },
      { label: 'Fuente', value: '850 W' },
    ],
    specs: [
      { label: 'Procesador', value: 'AMD Ryzen 5 5600G', detail: '6 núcleos y 12 hilos, hasta 4,4 GHz' },
      { label: 'Gráficos', value: 'AMD Radeon Vega 7', detail: 'Integrados en el procesador' },
      { label: 'Memoria RAM', value: '16 GB XPG Spectrix D41 RGB', detail: '2 × 8 GB DDR4-3000 CL16 en dual channel' },
      { label: 'Almacenamiento', value: 'Kingston NV3 1 TB NVMe', detail: 'Formato M.2 2280' },
      { label: 'Placa madre', value: 'ASUS PRIME A520M-K', detail: 'Socket AM4' },
      { label: 'Fuente', value: 'Snake Gamer Hydra 850 W', detail: '80 Plus Gold, modular' },
      { label: 'Gabinete', value: 'XYZ Airone 50 Mesh', detail: '4 ventiladores RGB' },
      { label: 'Refrigeración', value: 'AMD Wraith Stealth', detail: 'Cooler original de AMD' },
    ],
    benchmarks: [
      { game: 'Valorant', fpsMin: 140, fpsMax: 170, settings: '1080p, calidad alta' },
      { game: 'Minecraft Java', fpsMin: 120, fpsMax: 150, settings: '1080p, vanilla' },
      { game: 'Fortnite OG', fpsMin: 120, fpsMax: 120, settings: '1080p, modo rendimiento' },
      { game: 'League of Legends', fpsMin: 120, fpsMax: 120, settings: '1080p, calidad alta' },
      { game: 'Rocket League', fpsMin: 90, fpsMax: 90, settings: '1080p, perfil Quality' },
      { game: 'GTA V Legacy', fpsMin: 60, fpsMax: 60, settings: '1080p, modo online' },
    ],
    validation: [
      { test: 'MemTest86', result: '0 errores' },
      { test: 'Prueba de estrés de CPU', result: '0 errores' },
      { test: 'Salud del SSD (S.M.A.R.T.)', result: '100 % de vida' },
      { test: 'RAM en dual channel', result: '3000 MT/s' },
      { test: 'Temperaturas en carga', result: 'Verificadas' },
      { test: 'Drivers AMD', result: 'Instalados' },
      { test: 'Secure Boot y TPM', result: 'Configurados' },
    ],
    upgrade:
      'La fuente modular de 850 W deja margen para sumar más adelante una tarjeta gráfica dedicada compatible.',
    notes: [
      'No incluye tarjeta gráfica dedicada.',
      'Monitor y periféricos no incluidos.',
      'Los FPS pueden variar según la actualización del juego, el escenario y la configuración.',
    ],
  },
]

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug)
}
