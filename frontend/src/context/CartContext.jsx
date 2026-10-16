import {
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react'

const CartContext = createContext(null)

export function CartProvider({ children }) {
  const [items, setItems] = useState(() => {
    try {
      const saved = localStorage.getItem('guglielmini-cart')

      return saved ? JSON.parse(saved) : []
    } catch {
      return []
    }
  })

  useEffect(() => {
    localStorage.setItem(
      'guglielmini-cart',
      JSON.stringify(items),
    )
  }, [items])

  function addToCart(pc) {
    setItems((current) => {
      const alreadyExists = current.some(
        (item) => item.id === pc.id,
      )

      if (alreadyExists) {
        return current
      }

      return [...current, pc]
    })
  }

  function removeFromCart(id) {
    setItems((current) =>
      current.filter((item) => item.id !== id),
    )
  }

  function clearCart() {
    setItems([])
  }

  const total = items.reduce(
    (sum, item) => sum + item.price,
    0,
  )

  const cartCount = items.length

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        clearCart,
        total,
        cartCount,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)

  if (!context) {
    throw new Error(
      'useCart debe utilizarse dentro de CartProvider',
    )
  }

  return context
}