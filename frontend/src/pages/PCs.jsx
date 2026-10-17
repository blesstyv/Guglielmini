import {
  RotateCcw,
  SearchX,
  SlidersHorizontal,
} from 'lucide-react'

import {
  useMemo,
} from 'react'

import {
  Link,
  useSearchParams,
} from 'react-router-dom'

import PcCard
  from '../components/PcCard.jsx'

import Reveal
  from '../components/Reveal.jsx'

import {
  pcs,
} from '../data/pcs.js'

import '../styles/catalog-final.css'


function PCs() {
  const [
    searchParams,
    setSearchParams,
  ] = useSearchParams()


  const query =
    searchParams.get('q') || ''

  const category =
    searchParams.get('category') || 'Todas'

  const sort =
    searchParams.get('sort') || 'default'


  const categories = [
    'Todas',
    ...new Set(
      pcs.map(
        (pc) =>
          pc.category,
      ),
    ),
  ]


  const filtered =
    useMemo(() => {
      const normalizedQuery =
        query
          .toLowerCase()
          .trim()


      let result =
        pcs.filter(
          (pc) => {

            const searchableText = [
              pc.name,
              pc.code,
              pc.category,
              pc.shortDescription,
              pc.description,
              ...(pc.quickSpecs || []),
              ...(pc.highlights || [])
                .flatMap(
                  (item) => [
                    item.label,
                    item.value,
                  ],
                ),
            ]
              .join(' ')
              .toLowerCase()


            const matchesSearch =
              !normalizedQuery ||
              searchableText.includes(
                normalizedQuery,
              )


            const matchesCategory =
              category === 'Todas' ||
              pc.category === category


            return (
              matchesSearch &&
              matchesCategory
            )
          },
        )


      if (
        sort === 'price-asc'
      ) {
        result =
          [...result].sort(
            (a, b) =>
              a.price - b.price,
          )
      }


      if (
        sort === 'price-desc'
      ) {
        result =
          [...result].sort(
            (a, b) =>
              b.price - a.price,
          )
      }


      return result
    }, [
      query,
      category,
      sort,
    ])


  const hasFilters =
    Boolean(query) ||
    category !== 'Todas' ||
    sort !== 'default'


  function updateParam(
    key,
    value,
  ) {
    const next =
      new URLSearchParams(
        searchParams,
      )


    if (
      !value ||
      value === 'Todas' ||
      value === 'default'
    ) {
      next.delete(key)
    } else {
      next.set(
        key,
        value,
      )
    }


    setSearchParams(next)
  }


  function clearFilters() {
    setSearchParams({})
  }


  return (
    <section className="g-catalog-page">

      <div className="container">

        {/* =====================================
            HEADER
        ===================================== */}

        <Reveal>

          <header className="g-catalog-header">

            <span className="g-label">
              EQUIPOS
            </span>


            <h1>
              PCs
              <span> disponibles.</span>
            </h1>


            <p>
              Revisa los equipos actualmente
              publicados, sus componentes,
              pruebas realizadas y rendimiento
              antes de tomar una decisión.
            </p>

          </header>

        </Reveal>



        {/* =====================================
            TOOLBAR
        ===================================== */}

        <Reveal delay={70}>

          <div className="g-catalog-toolbar">

            <div className="g-catalog-count">

              <strong>
                {filtered.length}
              </strong>


              <span>

                {filtered.length === 1
                  ? 'equipo encontrado'
                  : 'equipos encontrados'}

              </span>

            </div>


            <div className="g-catalog-controls">

              <div className="g-catalog-control">

                <SlidersHorizontal
                  size={15}
                />


                <select
                  value={category}
                  onChange={
                    (event) =>
                      updateParam(
                        'category',
                        event.target.value,
                      )
                  }
                  aria-label="Filtrar por categoría"
                >

                  {categories.map(
                    (item) => (

                      <option
                        value={item}
                        key={item}
                      >
                        {item}
                      </option>

                    ),
                  )}

                </select>

              </div>


              <div className="g-catalog-control">

                <select
                  value={sort}
                  onChange={
                    (event) =>
                      updateParam(
                        'sort',
                        event.target.value,
                      )
                  }
                  aria-label="Ordenar equipos"
                >

                  <option value="default">
                    Orden predeterminado
                  </option>

                  <option value="price-asc">
                    Menor precio
                  </option>

                  <option value="price-desc">
                    Mayor precio
                  </option>

                </select>

              </div>


              {hasFilters && (

                <button
                  type="button"
                  className="g-catalog-clear"
                  onClick={clearFilters}
                >

                  <RotateCcw
                    size={14}
                  />

                  LIMPIAR

                </button>

              )}

            </div>

          </div>

        </Reveal>



        {/* =====================================
            SEARCH QUERY
        ===================================== */}

        {query && (

          <div className="g-catalog-search-query">

            <span>
              Resultados para
            </span>

            <strong>
              “{query}”
            </strong>

          </div>

        )}



        {/* =====================================
            RESULTS
        ===================================== */}

        {filtered.length > 0 ? (

          <div className="g-catalog-grid">

            {filtered.map(
              (pc) => (

                <PcCard
                  pc={pc}
                  key={pc.id}
                />

              ),
            )}

          </div>

        ) : (

          <Reveal>

            <div className="g-catalog-empty">

              <div className="g-catalog-empty-icon">

                <SearchX
                  size={29}
                />

              </div>


              <h2>
                No encontramos equipos.
              </h2>


              <p>
                La búsqueda actual no coincide
                con ningún PC publicado.
              </p>


              <button
                type="button"
                className="secondary-button"
                onClick={clearFilters}
              >

                <RotateCcw
                  size={16}
                />

                LIMPIAR BÚSQUEDA

              </button>

            </div>

          </Reveal>

        )}



        {/* =====================================
            FUTURE INVENTORY NOTE
        ===================================== */}

        <Reveal>

          <div className="g-catalog-bottom">

            <div>

              <span className="g-label">
                INVENTARIO
              </span>

              <h2>
                ¿No encuentras lo que buscas?
              </h2>

              <p>
                También puedes consultar por
                armado, upgrades o futuras
                configuraciones.
              </p>

            </div>


            <Link
              to="/contact"
              className="secondary-button"
            >

              CONTACTAR

            </Link>

          </div>

        </Reveal>

      </div>

    </section>
  )
}


export default PCs