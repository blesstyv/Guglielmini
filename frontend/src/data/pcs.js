import pc001Interior1
  from '../assets/images/pc-001/pc-001-interior1.png'

import pc001Interior2
  from '../assets/images/pc-001/pc-001-interior2.png'

import pc001Kit
  from '../assets/images/pc-001/pc-001-kit.png'

import pc001Setup
  from '../assets/images/pc-001/pc-001-setup.png'

export const pcs = [
  {
    id: 1,

    slug:
      'pc-001-ryzen-5-5600g',

    code:
      'GUGLIELMINI // PC-001',

    name:
      'PC GAMER RYZEN 5 5600G',

    category:
      'PC Gamer de entrada',

    status:
      'Disponible',

    stock:
      1,

    price:
      700000,

    condition:
      'Equipo armado y probado',

    images: [
      pc001Setup,
      pc001Interior1,
      pc001Interior2,      
      pc001Kit,
    ],

    shortDescription:
      'Ryzen 5 5600G · 16 GB RGB · NVMe 1 TB · Fuente 850 W Gold',

    description:
      'Equipo preparado para gaming competitivo, uso diario y futuras mejoras de hardware. Actualmente utiliza gráficos Radeon Vega 7 integrados.',

    quickSpecs: [
      'Ryzen 5 5600G',
      '16 GB DDR4 Dual Channel',
      'NVMe 1 TB',
      'Radeon Vega 7',
    ],

    highlights: [
      {
        label: 'CPU',
        value: '6C / 12T',
      },
      {
        label: 'RAM',
        value: '16 GB',
      },
      {
        label: 'SSD',
        value: '1 TB',
      },
      {
        label: 'PSU',
        value: '850 W',
      },
    ],

    specs: [
      {
        label: 'Procesador',
        value: 'AMD Ryzen 5 5600G',
        detail: '6 núcleos / 12 hilos · hasta 4,4 GHz',
      },
      {
        label: 'Gráficos',
        value: 'AMD Radeon Vega 7',
        detail: 'Gráficos integrados',
      },
      {
        label: 'Memoria RAM',
        value: '16 GB XPG Spectrix D41 RGB',
        detail: '2×8 GB DDR4-3000 CL16 · Dual Channel',
      },
      {
        label: 'Almacenamiento',
        value: 'Kingston NV3 1 TB NVMe',
        detail: 'M.2 2280',
      },
      {
        label: 'Placa madre',
        value: 'ASUS PRIME A520M-K',
        detail: 'Socket AM4',
      },
      {
        label: 'Fuente',
        value: 'Snake Gamer Hydra 850 W',
        detail: '80 Plus Gold · Modular',
      },
      {
        label: 'Gabinete',
        value: 'XYZ AIRONE 50 Mesh',
        detail: '4 ventiladores RGB',
      },
      {
        label: 'Refrigeración',
        value: 'AMD Wraith Stealth',
        detail: 'Cooler original AMD',
      },
    ],

    benchmarks: [
      {
        game: 'Fortnite OG',
        result: '120 promedio',
        unit: 'FPS',
        settings: '1080p · Performance',
      },
      {
        game: 'Valorant',
        result: '140–170 promedio',
        unit: 'FPS',
        settings: '1080p · Alto',
      },
      {
        game: 'League of Legends',
        result: '120 promedio',
        unit: 'FPS',
        settings: '1080p · Alto',
      },
      {
        game: 'Rocket League',
        result: '90 promedio',
        unit: 'FPS',
        settings: '1080p · Quality',
      },
      {
        game: 'GTA V Legacy',
        result: '60 promedio',
        unit: 'FPS',
        settings: '1080p · Online',
      },
      {
        game: 'Minecraft Java',
        result: '120–150 promedio',
        unit: 'FPS',
        settings: 'Vanilla · 1080p',
      },
    ],

    validation: [
      'MemTest86: 0 errores',
      'CPU stress test: 0 errores',
      'SSD S.M.A.R.T. correcto',
      '100 % de vida reportada por SSD',
      'RAM Dual Channel a 3000 MT/s',
      'Temperaturas verificadas',
      'Drivers AMD instalados',
      'Secure Boot + TPM configurados',
    ],

    upgrade:
      'La fuente modular de 850 W deja margen para incorporar posteriormente una tarjeta gráfica dedicada compatible.',

    notes: [
      'No incluye tarjeta gráfica dedicada.',
      'Monitor y periféricos no incluidos.',
      'Los FPS pueden variar según actualización, escenario y configuración.',
    ],
  },
]