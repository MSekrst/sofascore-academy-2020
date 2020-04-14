import React from 'react'
import { useSelector } from 'react-redux'

import './shopping-cart.css'
import { useBoolean } from '../../utils'

export function ShoppingCart() {
  const { value: isOpen, toggleValue: toggleIsOpen } = useBoolean()
  const { items, shoppingCart, unavailable } = useSelector(state => state)

  const visibleItems = shoppingCart.reduce((aggregator, id) => {
    if (unavailable.includes(id)) {
      return aggregator
    }
    aggregator.push(id)
    return aggregator
  }, [])

  const itemsInCart = visibleItems.length

  return (
    <div className="shopping-cart-wrapper" onClick={itemsInCart ? toggleIsOpen : () => {}}>
      <span className="material-icons md-36">shopping_cart</span>
      <span className="shopping-cart-text">
        {itemsInCart ? `${itemsInCart} ${itemsInCart === 1 ? 'item' : 'items'}` : 'Empty'}
      </span>
      {isOpen && (
        <div className="shopping-cart-contents background-color">
          {visibleItems.map(id => {
            const item = items.find(item => item.id === id)

            return <div key={item.id}>{item.name}</div>
          })}
        </div>
      )}
    </div>
  )
}
