import React from 'react'

import './shopping-cart.css'

export function ShoppingCart({ shoppingCart }) {
  const itemsInCart = shoppingCart.length

  return (
    // TODO: show items in shopping cart
    <div className="shopping-cart-wrapper">
      <span className="material-icons md-36">shopping_cart</span>
      <span className="shopping-cart-text">
        {itemsInCart ? `${itemsInCart} ${itemsInCart === 1 ? 'item' : 'items'}` : 'Empty'}
      </span>
    </div>
  )
}
