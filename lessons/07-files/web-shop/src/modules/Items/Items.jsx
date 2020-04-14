import React from 'react'

import './items.css'
import { Item } from './Item'

export function Items({ items, shoppingCart, addToCart, removeFromCart, unavailableItems }) {
  return (
    <div>
      <h2>All Items</h2>
      <div className="items-container">
        {items.map(item => (
          <Item
            key={item.id}
            item={item}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
            isInCart={shoppingCart.includes(item.id)}
            inUnavailable={unavailableItems.includes(item.id)}
          />
        ))}
      </div>
    </div>
  )
}
