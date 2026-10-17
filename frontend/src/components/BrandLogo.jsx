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

  const glowId =
    useId()
      .replaceAll(':', '')

  const accentGradient =
    `guglielminiAccent-${gradientId}`

  const glowGradient =
    `guglielminiGlow-${glowId}`


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
            x1="10%"
            y1="5%"
            x2="90%"
            y2="95%"
          >

            <stop
              offset="0%"
              stopColor="#ff2b93"
            />

            <stop
              offset="48%"
              stopColor="#b72be7"
            />

            <stop
              offset="72%"
              stopColor="#d641c7"
            />

            <stop
              offset="100%"
              stopColor="#d9ef29"
            />

          </linearGradient>


          <linearGradient
            id={glowGradient}
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >

            <stop
              offset="0%"
              stopColor="#ff2b93"
              stopOpacity="0.9"
            />

            <stop
              offset="55%"
              stopColor="#a52be0"
              stopOpacity="0.8"
            />

            <stop
              offset="100%"
              stopColor="#d9ef29"
              stopOpacity="0.9"
            />

          </linearGradient>

        </defs>


        {/* EXTERIOR */}

        <polygon
          points="
            60,5
            105,30
            105,88
            60,114
            15,88
            15,30
          "
          fill="#050507"
          stroke={`url(#${glowGradient})`}
          strokeWidth="5"
          strokeLinejoin="round"
        />


        {/* SEGUNDO CONTORNO */}

        <polygon
          points="
            60,14
            96,35
            96,82
            60,103
            24,82
            24,35
          "
          fill="#08080b"
          stroke="#383840"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />


        {/* PUNTO SUPERIOR */}

        <circle
          cx="60"
          cy="22"
          r="4"
          fill="#d9ef29"
        />


        <circle
          cx="60"
          cy="22"
          r="7"
          fill="#d9ef29"
          opacity="0.10"
        />


        {/* G */}

        <path
          d="
            M84 40
            H57
            C43 40 34 49 34 61
            C34 74 43 83 57 83
            H75
            V70
            H59
            C51 70 47 67 47 61
            C47 55 51 51 59 51
            H84
            Z

            M71 62
            H91
            V88
            L79 95
            V74
            H71
            Z
          "
          fill={`url(#${accentGradient})`}
        />


        {/* DETALLES INFERIORES */}

        <rect
          x="31"
          y="96"
          width="32"
          height="4"
          rx="2"
          fill="#f5f5f2"
          opacity="0.92"
        />


        <rect
          x="68"
          y="96"
          width="21"
          height="4"
          rx="2"
          fill="#d9ef29"
        />


        {/* PUNTA */}

        <polygon
          points="
            48,119
            72,119
            60,135
          "
          fill="#050507"
          stroke="#ff2b93"
          strokeWidth="3"
          strokeLinejoin="round"
        />


        <polygon
          points="
            53,122
            67,122
            60,131
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