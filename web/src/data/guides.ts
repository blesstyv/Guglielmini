import type { Guide } from '@/lib/types'

/**
 * Guías educativas. Sólo contenido técnico verificable, escrito a partir del trabajo
 * real documentado en el sitio. Para agregar una guía, añade un objeto aquí;
 * la ruta, el índice y el sitemap se generan solos.
 */
export const guides: Guide[] = [
  {
    slug: 'como-probamos-un-pc',
    title: 'Cómo probamos un PC antes de publicarlo',
    navLabel: 'Cómo probamos un PC',
    summary: 'Qué revisan MemTest86, una prueba de estrés y el S.M.A.R.T. de un SSD, y por qué un equipo que enciende no está necesariamente listo.',
    publishedAt: '2026-11-10',
    readingMinutes: 4,
    sections: [
      {
        heading: 'Encender no es lo mismo que funcionar',
        paragraphs: [
          'Un computador puede arrancar Windows sin problemas y aun así tener una memoria defectuosa, un disco con sectores dañados o temperaturas que lo hacen bajar el rendimiento a los veinte minutos de juego. Esos fallos no aparecen en el primer encendido: aparecen con el uso.',
          'Por eso cada equipo pasa por pruebas que simulan horas de trabajo exigente antes de publicarse. El objetivo es encontrar los problemas aquí, no en tu escritorio.',
        ],
      },
      {
        heading: 'Memoria RAM: MemTest86',
        paragraphs: [
          'MemTest86 arranca desde un pendrive, fuera de Windows, y escribe y lee patrones en toda la memoria una y otra vez. Si un solo bit no vuelve como se escribió, lo reporta como error.',
          'Un error de memoria suele manifestarse como cierres inesperados, pantallas azules o archivos corruptos difíciles de diagnosticar. El resultado que buscamos es siempre el mismo: cero errores.',
        ],
      },
      {
        heading: 'Procesador: prueba de estrés',
        paragraphs: [
          'Una prueba de estrés lleva todos los núcleos del procesador a carga completa durante un tiempo prolongado. Sirve para dos cosas: confirmar que los cálculos no fallan bajo carga y observar cómo se comporta la refrigeración.',
          'Si las temperaturas suben demasiado, el procesador baja su frecuencia para protegerse y el equipo rinde menos de lo que debería. Medirlo antes permite corregir el montaje del cooler, la pasta térmica o el flujo de aire.',
        ],
      },
      {
        heading: 'Almacenamiento: S.M.A.R.T.',
        paragraphs: [
          'Los SSD llevan un registro interno llamado S.M.A.R.T. con datos sobre su salud: horas de uso, datos escritos, errores y porcentaje de vida útil estimada. Revisarlo confirma que la unidad está sana antes de instalar el sistema.',
        ],
      },
      {
        heading: 'La prueba final: jugar',
        paragraphs: [
          'Al final medimos FPS en juegos reales, con la resolución y la calidad indicadas en cada ficha. Esos números describen a ese equipo en esas condiciones; una actualización del juego o un cambio de configuración puede moverlos.',
        ],
      },
    ],
  },
  {
    slug: 'dual-channel-y-graficos-integrados',
    title: 'Dual channel: por qué importa tanto con gráficos integrados',
    navLabel: 'Dual channel',
    summary: 'Los gráficos integrados usan la RAM del sistema como memoria de video. Así afecta al rendimiento instalar una o dos memorias.',
    publishedAt: '2026-11-10',
    readingMinutes: 3,
    sections: [
      {
        heading: 'Qué es el dual channel',
        paragraphs: [
          'Las placas madre de escritorio comunican el procesador con la memoria a través de dos canales. Con un solo módulo instalado se usa uno; con dos módulos iguales en las ranuras correctas se usan ambos a la vez, y el ancho de banda disponible se duplica.',
          'Por eso 2 × 8 GB suele rendir mejor que 1 × 16 GB, aunque la capacidad total sea la misma.',
        ],
      },
      {
        heading: 'Por qué los gráficos integrados lo notan más',
        paragraphs: [
          'Una tarjeta gráfica dedicada trae su propia memoria de video, muy rápida. Los gráficos integrados, como los Radeon Vega 7 del Ryzen 5 5600G, no la tienen: usan una parte de la RAM del sistema.',
          'Eso convierte al ancho de banda de la memoria en el principal límite de rendimiento en juegos. Pasar de un canal a dos puede marcar una diferencia muy visible en FPS, mucho mayor que en un equipo con tarjeta dedicada.',
        ],
      },
      {
        heading: 'Cómo comprobarlo',
        paragraphs: [
          'Herramientas como CPU-Z muestran en la pestaña Memory si la memoria trabaja en modo Dual. También conviene revisar en la BIOS que el perfil de la memoria esté activado, para que funcione a la velocidad indicada por el fabricante y no a una más baja por defecto.',
          'En el PC-001, por ejemplo, la memoria quedó verificada en dual channel a 3000 MT/s.',
        ],
      },
    ],
  },
]

export function getGuide(slug: string): Guide | undefined {
  return guides.find((g) => g.slug === slug)
}
