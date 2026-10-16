import {
  CheckCircle2,
} from 'lucide-react'


function ProcesoArmado() {
  const steps = [

    {
      title:
        'Selección y revisión de componentes',

      description:
        'Se comprueba el estado declarado de cada componente, su compatibilidad y su función dentro de la configuración.',
    },

    {
      title:
        'Preparación del gabinete',

      description:
        'Se prepara el gabinete y el área de montaje para realizar una instalación ordenada.',
    },

    {
      title:
        'Instalación de componentes',

      description:
        'Se instalan procesador, disipación, memoria RAM, almacenamiento, placa madre, fuente de poder y demás componentes incluidos.',
    },

    {
      title:
        'Organización del cableado',

      description:
        'Se ordenan las conexiones internas buscando mantener seguridad, acceso y un flujo de aire adecuado.',
    },

    {
      title:
        'Primer encendido',

      description:
        'Se comprueba que el computador encienda correctamente y que los componentes principales sean reconocidos.',
    },

    {
      title:
        'Configuración de BIOS',

      description:
        'Se revisan parámetros de memoria, seguridad, almacenamiento y arranque según las necesidades del equipo.',
    },

    {
      title:
        'Sistema y controladores',

      description:
        'Se instala y configura el sistema operativo y se incorporan los controladores correspondientes.',
    },

    {
      title:
        'Optimización',

      description:
        'Se revisan procesos, configuración del sistema y parámetros relacionados con estabilidad y rendimiento.',
    },

    {
      title:
        'Pruebas de hardware',

      description:
        'Se comprueba memoria, procesador, almacenamiento y demás componentes según las herramientas de prueba utilizadas para cada equipo.',
    },

    {
      title:
        'Pruebas de rendimiento',

      description:
        'Cuando corresponde, se realizan pruebas reales con aplicaciones o videojuegos para registrar el comportamiento del equipo.',
    },

    {
      title:
        'Control de temperaturas',

      description:
        'Se revisan temperaturas bajo distintas cargas para detectar posibles problemas de refrigeración.',
    },

    {
      title:
        'Validación final',

      description:
        'Se realiza una revisión general antes de considerar el computador disponible para venta.',
    },

  ]


  return (
    <section className="info-page">

      <div className="container">

        <div className="info-header">

          <span className="eyebrow">
            GUGLIELMINI
          </span>

          <h1>
            PROCESO DE
            <span> ARMADO.</span>
          </h1>

          <p>
            Cada computador pasa por una
            secuencia de montaje, configuración
            y comprobaciones antes de
            considerarse terminado.
          </p>

        </div>


        <div className="lab-process">

          {steps.map(
            (step, index) => (

              <article
                key={step.title}
                className="lab-step"
              >

                <span>
                  {String(
                    index + 1,
                  ).padStart(
                    2,
                    '0',
                  )}
                </span>


                <CheckCircle2
                  size={19}
                />


                <div>

                  <strong>
                    {step.title}
                  </strong>


                  <p>
                    {step.description}
                  </p>

                </div>

              </article>

            ),
          )}

        </div>

      </div>

    </section>
  )
}


export default ProcesoArmado