export interface ProcessStep {
  title: string
  description: string
  checks: string[]
}

/** Etapas reales del proceso documentado en la versión 2. Es una secuencia: el orden importa. */
export const processSteps: ProcessStep[] = [
  {
    title: 'Inspección y compatibilidad',
    description: 'Antes de montar, revisamos el estado de cada componente y que la configuración sea compatible.',
    checks: ['Estado físico de los componentes', 'Compatibilidad de hardware', 'Conectores y alimentación'],
  },
  {
    title: 'Montaje',
    description: 'Instalamos los componentes en orden, cuidando las conexiones y el flujo de aire.',
    checks: ['Montaje del hardware', 'Cable management', 'Revisión de ventilación'],
  },
  {
    title: 'BIOS',
    description: 'Primer encendido: confirmamos que la placa reconozca todo y configuramos memoria y arranque.',
    checks: ['Detección del hardware', 'Perfil de memoria', 'Arranque seguro y TPM'],
  },
  {
    title: 'Sistema y drivers',
    description: 'Preparamos Windows e instalamos los controladores que el equipo necesita.',
    checks: ['Configuración de Windows', 'Drivers de chipset y gráficos', 'Ajustes iniciales'],
  },
  {
    title: 'Pruebas',
    description: 'Ponemos a prueba memoria, procesador y almacenamiento, y medimos temperaturas en carga.',
    checks: ['MemTest86', 'Estrés de CPU', 'S.M.A.R.T. del SSD'],
  },
  {
    title: 'Validación final',
    description: 'Jugamos y medimos FPS reales. Sólo entonces el equipo se publica.',
    checks: ['Benchmarks en juegos', 'Control de temperaturas', 'Revisión general'],
  },
]
