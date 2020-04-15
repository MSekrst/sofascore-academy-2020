import React, { useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import './shopping-cart.css'
import { removeItemFromCart } from '../Items'

function stopPropagation(event) {
  event.stopPropagation()
}

export function ShoppingCartItems({ visibleItems }) {
  const items = useSelector(state => state.items)
  const dispatch = useDispatch()

  const handleRemoveFromCart = useCallback(
    itemId => () => {
      dispatch(removeItemFromCart(itemId))
    },
    [dispatch]
  )

  return (
    <div className="shopping-cart-contents background-color">
      {visibleItems.map(id => {
        const { name, image, price } = items.find(item => item.id === id)

        return (
          // stop click propagation to avoid cart items close when clicked inside
          <div key={id} className="shopping-cart-item" onClick={stopPropagation}>
            <img className="shopping-cart-item-image" src={image} alt={name} />
            <div className="shopping-cart-item-main">
              <div className="shopping-cart-item-name">{name}</div>
              <div className="shopping-cart-item-price">{price}kn</div>
            </div>
            <div className="shopping-cart-item-remove" onClick={handleRemoveFromCart(id)}>
              <span className="material-icons">delete</span>
            </div>
          </div>
        )
      })}
    </div>
  )
}
