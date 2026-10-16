import {
  useState,
} from 'react'

import {
  CheckCircle2,
  Cpu,
  Gamepad2,
  ShieldCheck,
} from 'lucide-react'


function ProductDetailsTabs({
  pc,
}) {
  const [active, setActive] =
    useState('performance')


  return (
    <section className="product-tabs">

      <div className="product-tab-buttons">

        <TabButton
          active={
            active === 'performance'
          }
          icon={<Gamepad2 />}
          onClick={() =>
            setActive('performance')
          }
        >
          RENDIMIENTO
        </TabButton>


        <TabButton
          active={
            active === 'specs'
          }
          icon={<Cpu />}
          onClick={() =>
            setActive('specs')
          }
        >
          COMPONENTES
        </TabButton>


        <TabButton
          active={
            active === 'validation'
          }
          icon={<ShieldCheck />}
          onClick={() =>
            setActive('validation')
          }
        >
          VALIDACIÓN
        </TabButton>

      </div>


      <div className="product-tab-content">

        {active ===
          'performance' && (

          <div className="performance-list">

            {pc.benchmarks.map(
              (item) => (

                <div
                  className="performance-row"
                  key={item.game}
                >

                  <div>
                    <strong>
                      {item.game}
                    </strong>

                    <small>
                      {item.settings}
                    </small>
                  </div>


                  <div className="performance-result">

                    <strong>
                      {item.result}
                    </strong>

                    <span>
                      {item.unit}
                    </span>

                  </div>

                </div>

              ),
            )}

          </div>

        )}


        {active === 'specs' && (

          <div className="spec-list">

            {pc.specs.map(
              (spec) => (

                <div
                  key={spec.label}
                  className="spec-row"
                >

                  <span>
                    {spec.label}
                  </span>

                  <div>
                    <strong>
                      {spec.value}
                    </strong>

                    {spec.detail && (
                      <small>
                        {spec.detail}
                      </small>
                    )}
                  </div>

                </div>

              ),
            )}

          </div>

        )}


        {active ===
          'validation' && (

          <div className="validation-list">

            {pc.validation.map(
              (item) => (

                <div
                  key={item}
                  className="validation-row"
                >
                  <CheckCircle2
                    size={18}
                  />

                  <span>
                    {item}
                  </span>
                </div>

              ),
            )}

          </div>

        )}

      </div>

    </section>
  )
}


function TabButton({
  children,
  icon,
  active,
  onClick,
}) {
  return (
    <button
      type="button"
      className={
        active
          ? 'product-tab-button product-tab-button--active'
          : 'product-tab-button'
      }
      onClick={onClick}
    >
      {icon}

      {children}
    </button>
  )
}


export default ProductDetailsTabs