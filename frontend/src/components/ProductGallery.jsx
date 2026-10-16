import {
  useState,
} from 'react'

import {
  ChevronLeft,
  ChevronRight,
  Expand,
} from 'lucide-react'


function ProductGallery({
  images,
  name,
}) {
  const [current, setCurrent] =
    useState(0)


  function previous() {
    setCurrent(
      (value) =>
        value === 0
          ? images.length - 1
          : value - 1,
    )
  }


  function next() {
    setCurrent(
      (value) =>
        value ===
        images.length - 1
          ? 0
          : value + 1,
    )
  }


  return (
    <div className="interactive-gallery">

      <div className="gallery-stage">

        <img
          key={images[current]}
          src={images[current]}
          alt={`${name} - imagen ${
            current + 1
          }`}
        />


        <span className="gallery-counter">
          {current + 1}
          {' / '}
          {images.length}
        </span>


        <Expand
          className="gallery-expand-icon"
          size={18}
        />


        <button
          type="button"
          className="gallery-arrow gallery-arrow--left"
          onClick={previous}
          aria-label="Imagen anterior"
        >
          <ChevronLeft size={22} />
        </button>


        <button
          type="button"
          className="gallery-arrow gallery-arrow--right"
          onClick={next}
          aria-label="Imagen siguiente"
        >
          <ChevronRight size={22} />
        </button>

      </div>


      <div className="gallery-thumbnails">

        {images.map(
          (image, index) => (

            <button
              key={image}
              type="button"
              className={
                current === index
                  ? 'gallery-thumb gallery-thumb--active'
                  : 'gallery-thumb'
              }
              onClick={() =>
                setCurrent(index)
              }
            >

              <img
                src={image}
                alt=""
              />

            </button>

          ),
        )}

      </div>

    </div>
  )
}


export default ProductGallery