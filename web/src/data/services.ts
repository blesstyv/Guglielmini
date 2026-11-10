import type { Service } from '@/lib/types'

/** Precios tomados del último commit de la versión 2 ("Actualización precio servicios"). */
export const services: Service[] = [
  {
    id: 'armado',
    title: 'Armado de PC',
    price: 'Desde $19.990',
    summary: 'Montaje completo de tus componentes, cableado ordenado y revisión física de cada pieza.',
    includes: [
      'Montaje completo del hardware',
      'Cable management',
      'Configuración inicial de BIOS/UEFI',
      'Instalación y revisión de drivers',
      'Comprobación general del equipo',
    ],
    whatsappTopic: 'armado de PC',
  },
  {
    id: 'optimizacion',
    title: 'Optimización gamer',
    price: 'Desde $9.990',
    summary: 'Ajustes para mejorar la estabilidad y el rendimiento de tu equipo en juegos y uso diario.',
    includes: [
      'Revisión de la configuración de Windows',
      'Configuración de drivers',
      'Ajustes básicos de rendimiento',
      'Revisión de temperaturas',
      'Comprobación con pruebas reales',
    ],
    whatsappTopic: 'optimización gamer',
  },
  {
    id: 'mantenimiento',
    title: 'Mantenimiento de PC',
    price: 'Desde $19.990',
    summary: 'Revisión preventiva para mantener tu computador limpio, fresco y funcionando bien.',
    includes: [
      'Inspección general del equipo',
      'Limpieza física básica',
      'Revisión de temperaturas',
      'Comprobación del almacenamiento',
      'Evaluación del estado general',
    ],
    whatsappTopic: 'mantenimiento de PC',
  },
  {
    id: 'upgrade',
    title: 'Upgrade de hardware',
    price: 'Según componente',
    summary: 'Te ayudamos a elegir mejoras compatibles con tu equipo, presupuesto y objetivo, y las instalamos.',
    includes: [
      'Revisión de compatibilidad',
      'Recomendación de componentes',
      'Instalación del nuevo hardware',
      'Configuración posterior',
      'Pruebas de funcionamiento',
    ],
    whatsappTopic: 'upgrade de hardware',
  },
]

export function getService(id: string): Service | undefined {
  return services.find((s) => s.id === id)
}
