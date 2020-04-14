import React, { useState, useCallback } from 'react'
import 'normalize.css'

import { items } from './data/items'
import { Header, Main } from './modules/Layout'
import { Items } from './modules/Items'
import { Button } from './components'
import './base.css'

export function App() {
  const [unavailableItems, setUnavailableItems] = useState([])
  const [shoppingCart, setShoppingCart] = useState([])

  const addToCart = useCallback(
    itemId => {
      if (shoppingCart.includes(itemId)) {
        return
      }

      setShoppingCart([...shoppingCart, itemId])
    },
    [shoppingCart]
  )

  const removeFromCart = useCallback(
    itemId => {
      const newCart = shoppingCart.filter(cartId => cartId !== itemId)

      setShoppingCart(newCart)
    },
    [shoppingCart]
  )

  const addToUnavailable = useCallback(
    itemId => {
      if (unavailableItems.includes(itemId)) {
        return
      }

      const newShoppingCart = shoppingCart.filter(cartId => cartId !== itemId)

      if (newShoppingCart.length !== shoppingCart.length) {
        setShoppingCart(newShoppingCart)
      }

      setUnavailableItems([...unavailableItems, itemId])
    },
    [unavailableItems, shoppingCart]
  )

  const removeFromUnavailable = useCallback(
    itemId => {
      const newUnavailable = unavailableItems.filter(unavailableId => unavailableId !== itemId)

      setUnavailableItems(newUnavailable)
    },
    [unavailableItems]
  )

  // TODO: can we preserve items in cart even when they are unavailable just in case they become available again

  return (
    <>
      <Header shoppingCart={shoppingCart}>
        <h1>Web Shop</h1>
      </Header>
      <Main>
        <p>
          <Button onClick={() => (unavailableItems.length ? removeFromUnavailable(1) : addToUnavailable(1))}>
            Toggle bread availability
          </Button>
        </p>
        <Items
          items={items}
          shoppingCart={shoppingCart}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
          unavailableItems={unavailableItems}
        />
      </Main>
    </>
  )
}
