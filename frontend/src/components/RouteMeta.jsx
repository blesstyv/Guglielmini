import {
  useEffect,
} from 'react'

import {
  useLocation,
} from 'react-router-dom'

import {
  pcs,
} from '../data/pcs.js'


const defaultMeta = {
  title:
    'GUGLIELMINI | PCs, Hardware y Servicios',

  description:
    'Computadores armados, configurados y probados antes de publicarse. PCs disponibles, hardware, optimización, mantenimiento y upgrades.',
}


function getPageMeta(
  pathname,
) {
  if (pathname === '/') {
    return {
      title:
        'GUGLIELMINI | PCs armados, probados y disponibles',

      description:
        'PCs armados, configurados y sometidos a pruebas reales antes de publicarse. Conoce equipos disponibles, rendimiento y servicios GUGLIELMINI.',
    }
  }


  if (pathname === '/pcs') {
    return {
      title:
        'PCs disponibles | GUGLIELMINI',

      description:
        'Revisa los computadores disponibles en GUGLIELMINI, sus componentes, pruebas realizadas, rendimiento y posibilidades de actualización.',
    }
  }


  if (
    pathname.startsWith(
      '/pcs/',
    )
  ) {
    const slug =
      pathname
        .replace('/pcs/', '')
        .split('/')[0]


    const pc =
      pcs.find(
        (item) =>
          item.slug === slug,
      )


    if (pc) {
      return {
        title:
          `${pc.name} | GUGLIELMINI`,

        description:
          `${pc.shortDescription}. Equipo armado, configurado y probado antes de su publicación.`,
      }
    }
  }


  if (
    pathname === '/services'
  ) {
    return {
      title:
        'Servicios para PC | GUGLIELMINI',

      description:
        'Armado de computadores, optimización gamer, mantenimiento y upgrades de hardware con atención directa.',
    }
  }


  if (
    pathname ===
    '/proceso-armado'
  ) {
    return {
      title:
        'Proceso de armado y pruebas | GUGLIELMINI',

      description:
        'Conoce cómo GUGLIELMINI revisa, ensambla, configura y valida sus computadores antes de publicarlos.',
    }
  }


  if (
    pathname === '/about'
  ) {
    return {
      title:
        'Nosotros | GUGLIELMINI',

      description:
        'Conoce GUGLIELMINI, proyecto enfocado en computadores, hardware, optimización, pruebas y servicios tecnológicos.',
    }
  }


  if (
    pathname === '/contact'
  ) {
    return {
      title:
        'Contacto | GUGLIELMINI',

      description:
        'Contacta directamente con GUGLIELMINI para consultas sobre equipos, compras, servicios, soporte y hardware.',
    }
  }


  if (
    pathname === '/cart'
  ) {
    return {
      title:
        'Carrito | GUGLIELMINI',

      description:
        'Revisa tu selección de equipos y continúa la compra directamente por WhatsApp.',
    }
  }


  return {
    title:
      'Página no encontrada | GUGLIELMINI',

    description:
      defaultMeta.description,
  }
}


function setMeta(
  selector,
  attribute,
  value,
) {
  let element =
    document.head.querySelector(
      selector,
    )


  if (!element) {
    element =
      document.createElement(
        'meta',
      )

    const [
      attributeName,
      attributeValue,
    ] =
      attribute.split('=')


    element.setAttribute(
      attributeName,
      attributeValue,
    )

    document.head.appendChild(
      element,
    )
  }


  element.setAttribute(
    'content',
    value,
  )
}


function RouteMeta() {
  const {
    pathname,
  } = useLocation()


  useEffect(() => {
    const meta =
      getPageMeta(
        pathname,
      )


    document.title =
      meta.title


    setMeta(
      'meta[name="description"]',
      'name=description',
      meta.description,
    )


    setMeta(
      'meta[property="og:title"]',
      'property=og:title',
      meta.title,
    )


    setMeta(
      'meta[property="og:description"]',
      'property=og:description',
      meta.description,
    )


    setMeta(
      'meta[property="og:url"]',
      'property=og:url',
      window.location.href,
    )


    setMeta(
      'meta[property="og:image"]',
      'property=og:image',
      `${window.location.origin}/og-guglielmini.png`,
    )


    setMeta(
      'meta[name="twitter:title"]',
      'name=twitter:title',
      meta.title,
    )


    setMeta(
      'meta[name="twitter:description"]',
      'name=twitter:description',
      meta.description,
    )


    setMeta(
      'meta[name="twitter:image"]',
      'name=twitter:image',
      `${window.location.origin}/og-guglielmini.png`,
    )


    let canonical =
      document.head.querySelector(
        'link[rel="canonical"]',
      )


    if (!canonical) {
      canonical =
        document.createElement(
          'link',
        )

      canonical.setAttribute(
        'rel',
        'canonical',
      )

      document.head.appendChild(
        canonical,
      )
    }


    canonical.setAttribute(
      'href',
      `${window.location.origin}${pathname}`,
    )

  }, [pathname])


  return null
}


export default RouteMeta