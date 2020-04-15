import React from 'react'
import { useSelector } from 'react-redux'

import './shopping-cart.css'
import { useBoolean } from '../../utils'
import { ShoppingCartItems } from './ShoppingCartItems'

const noop = () => {}

export function ShoppingCart() {
  const { value: isOpen, toggleValue: toggleIsOpen } = useBoolean()
  const { shoppingCart, unavailable } = useSelector(state => state)

  const visibleItems = shoppingCart.reduce((aggregator, id) => {
    if (unavailable.includes(id)) {
      return aggregator
    }
    aggregator.push(id)
    return aggregator
  }, [])

  const itemsInCart = visibleItems.length

  return (
    <div className={`shopping-cart-wrapper ${isOpen ? 'active' : ''}`} onClick={itemsInCart ? toggleIsOpen : noop}>
      <span className="material-icons md-36">shopping_cart</span>
      <span className="shopping-cart-text">
        {itemsInCart ? `${itemsInCart} ${itemsInCart === 1 ? 'item' : 'items'}` : 'Empty'}
      </span>
      {isOpen && <ShoppingCartItems visibleItems={visibleItems} />}
    </div>
  )
}
