import {
  ArrowUpRight,
  BadgeCheck,
  Cpu,
  Gamepad2,
  HardDrive,
  MemoryStick,
} from 'lucide-react'

import {
  Link,
} from 'react-router-dom'

import ProductImage
  from './ProductImage.jsx'

import Reveal
  from './Reveal.jsx'


function PcCard({
  pc,
}) {
  return (
    <Reveal>

      <article className="pc-card pc-card--premium">

        <Link
          to={`/pcs/${pc.slug}`}
          className="pc-card-image-link"
        >

          <div className="pc-card-topbar">

            <span className="pc-card-code">
              {pc.code}
            </span>


            <span className="verified-badge">

              <BadgeCheck
                size={14}
              />

              VALIDADO

            </span>

          </div>


          <ProductImage
            pc={pc}
            className="pc-card-image"
          />


          <div className="pc-card-image-overlay" />

        </Link>


        <div className="pc-card-body">

          <div className="pc-card-availability">

            <span className="status-dot" />

            {pc.status}

          </div>


          <span className="pc-card-category">

            <Gamepad2
              size={13}
            />

            {pc.category}

          </span>


          <Link
            to={`/pcs/${pc.slug}`}
          >

            <h2>
              {pc.name}
            </h2>

          </Link>


          <p>
            {pc.shortDescription}
          </p>


          <div className="quick-specs">

            <div>

              <Cpu size={16} />

              <span>
                {pc.quickSpecs[0]}
              </span>

            </div>


            <div>

              <MemoryStick
                size={16}
              />

              <span>
                {pc.quickSpecs[1]}
              </span>

            </div>


            <div>

              <HardDrive
                size={16}
              />

              <span>
                {pc.quickSpecs[2]}
              </span>

            </div>

          </div>


          <div className="pc-card-footer">

            <div className="card-price">

              <span>
                Precio
              </span>

              <strong>
                $
                {pc.price.toLocaleString(
                  'es-CL',
                )}
              </strong>

            </div>


            <Link
              to={`/pcs/${pc.slug}`}
              className="card-button"
            >

              VER EQUIPO

              <ArrowUpRight
                size={16}
              />

            </Link>

          </div>

        </div>


        <div className="pc-card-accent" />

      </article>

    </Reveal>
  )
}


export default PcCard