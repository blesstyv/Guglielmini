import {
  useId,
} from 'react'


function BrandLogo({
  variant = 'full',
  className = '',
}) {
  const iconOnly =
    variant === 'icon'

  const gradientId =
    useId()
      .replaceAll(':', '')

  const accentGradient =
    `guglielminiAccent-${gradientId}`


  return (
    <div
      className={`brand-logo ${
        iconOnly
          ? 'brand-logo--icon'
          : 'brand-logo--full'
      } ${className}`}
    >

      <svg
        className="brand-logo__symbol"
        viewBox="0 0 120 140"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >

        <defs>

          <linearGradient
            id={accentGradient}
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop
              offset="0%"
              stopColor="#ff2b93"
            />

            <stop
              offset="58%"
              stopColor="#a52be0"
            />

            <stop
              offset="100%"
              stopColor="#d9ef29"
            />
          </linearGradient>

        </defs>


        <polygon
          points="
            60,5
            105,30
            105,88
            60,114
            15,88
            15,30
          "
          fill="#060608"
          stroke={`url(#${accentGradient})`}
          strokeWidth="5"
        />


        <polygon
          points="
            60,15
            95,35
            95,82
            60,102
            25,82
            25,35
          "
          fill="none"
          stroke="#45454c"
          strokeWidth="2.5"
        />


        <path
          d="
            M82 40
            H57
            C44 40 36 48 36 60
            C36 72 44 80 57 80
            H73
            V70
            H58
            C51 70 47 66 47 60
            C47 54 51 50 58 50
            H82
            Z

            M73 63
            H91
            V89
            L80 95
            V73
            H73
            Z
          "
          fill={`url(#${accentGradient})`}
        />


        <rect
          x="31"
          y="96"
          width="34"
          height="3"
          rx="1.5"
          fill="#f4f4f4"
          opacity="0.8"
        />


        <rect
          x="69"
          y="96"
          width="17"
          height="3"
          rx="1.5"
          fill="#d9ef29"
        />


        <circle
          cx="60"
          cy="19"
          r="3"
          fill="#d9ef29"
        />


        <polygon
          points="
            49,120
            71,120
            60,134
          "
          fill="#ff2b93"
        />

      </svg>


      {!iconOnly && (

        <div className="brand-logo__text">

          <strong>
            GUGLIELMINI
          </strong>

        </div>

      )}

    </div>
  )
}


export default BrandLogo