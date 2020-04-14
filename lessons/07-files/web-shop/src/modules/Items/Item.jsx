import React, { useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import './item.css'
import { addItemToCart, removeItemFromCart } from './actions'

export function Item({ item: { id, name, price, image, description }, inUnavailable }) {
  const isInCart = useSelector(state => state.shoppingCart.includes(id))
  const dispatch = useDispatch()

  const handleAddToCart = useCallback(() => {
    dispatch(addItemToCart(id))
  }, [id, dispatch])

  const handleRemoveFromCart = useCallback(() => {
    dispatch(removeItemFromCart(id))
  }, [id, dispatch])

  return (
    <div className="item background-color">
      <img className="item-image" src={image} alt={name} />
      <h3 className="item-name">{name}</h3>
      <p className="item-description">{description}</p>
      <div className="item-actions-wrapper">
        <span>
          <span className="item-price">{price}</span>
          <span className="item-currency">kn</span>
        </span>

        {inUnavailable ? (
          <span className="item-unavailable">Out of stock</span>
        ) : (
          <button className="item-add-button primary" onClick={isInCart ? handleRemoveFromCart : handleAddToCart}>
            {isInCart ? (
              <>
                <span className="material-icons">remove_shopping_cart</span>
                <span>Remove</span>
              </>
            ) : (
              <>
                <span className="material-icons">add_shopping_cart</span>
                <span>Add</span>
              </>
            )}
          </button>
        )}
      </div>
    </div>
  )
}
