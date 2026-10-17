import {
  Menu,
  Search,
  ShoppingCart,
  X,
} from 'lucide-react'

import {
  useEffect,
  useState,
} from 'react'

import {
  Link,
  NavLink,
  useNavigate,
} from 'react-router-dom'

import BrandLogo
  from '../BrandLogo.jsx'

import useCart
  from '../../hooks/useCart.js'
import '../../styles/navigation-footer.css'


const navigationItems = [
  {
    to: '/pcs',
    label: 'PCs disponibles',
  },
  {
    to: '/services',
    label: 'Servicios',
  },
  {
    to: '/proceso-armado',
    label: 'Proceso de armado',
  },
  {
    to: '/about',
    label: 'Nosotros',
  },
  {
    to: '/contact',
    label: 'Contacto',
  },
]


function Navbar() {
  const [
    menuOpen,
    setMenuOpen,
  ] = useState(false)

  const [
    search,
    setSearch,
  ] = useState('')


  const navigate =
    useNavigate()


  const {
    cartCount,
  } = useCart()


  useEffect(() => {
    if (!menuOpen) {
      document.body.style.overflow =
        ''

      return undefined
    }


    document.body.style.overflow =
      'hidden'


    return () => {
      document.body.style.overflow =
        ''
    }
  }, [menuOpen])


  function submitSearch(event) {
    event.preventDefault()


    const value =
      search.trim()


    if (!value) {
      navigate('/pcs')
      setMenuOpen(false)

      return
    }


    navigate(
      `/pcs?q=${encodeURIComponent(
        value,
      )}`,
    )


    setSearch('')
    setMenuOpen(false)
  }


  function closeMenu() {
    setMenuOpen(false)
  }


  function toggleMenu() {
    setMenuOpen(
      (current) =>
        !current,
    )
  }


  return (
    <header className="navbar">

      <div className="container navbar-main">

        <Link
          to="/"
          className="navbar-logo"
          onClick={closeMenu}
          aria-label="Ir al inicio de GUGLIELMINI"
        >

          <BrandLogo />

        </Link>


        <form
          className="navbar-search"
          onSubmit={submitSearch}
          role="search"
        >

          <input
            type="search"
            placeholder="Busca tu próximo PC..."
            value={search}
            onChange={
              (event) =>
                setSearch(
                  event.target.value,
                )
            }
            aria-label="Buscar computadores"
          />


          <button
            type="submit"
            aria-label="Buscar"
          >

            <Search
              size={18}
            />

          </button>

        </form>


        <Link
          to="/cart"
          className="navbar-cart"
          onClick={closeMenu}
          aria-label={
            cartCount > 0
              ? `Ver carrito con ${cartCount} producto`
              : 'Ver carrito'
          }
        >

          <ShoppingCart
            size={22}
          />


          {cartCount > 0 && (

            <span>
              {cartCount}
            </span>

          )}

        </Link>


        <button
          type="button"
          className="mobile-menu-button"
          onClick={toggleMenu}
          aria-label={
            menuOpen
              ? 'Cerrar menú'
              : 'Abrir menú'
          }
          aria-expanded={menuOpen}
        >

          {menuOpen ? (

            <X
              size={24}
            />

          ) : (

            <Menu
              size={24}
            />

          )}

        </button>

      </div>


      <nav
        className={
          menuOpen
            ? 'main-navigation main-navigation--open'
            : 'main-navigation'
        }
        aria-label="Navegación principal"
      >

        <div className="container navigation-content">

          {navigationItems.map(
            (item) => (

              <NavLink
                key={item.to}
                to={item.to}
                onClick={closeMenu}
                className={
                  ({ isActive }) =>
                    isActive
                      ? 'active'
                      : ''
                }
              >

                {item.label}

              </NavLink>

            ),
          )}

        </div>

      </nav>

    </header>
  )
}


export default Navbar