import React, { useCallback } from 'react'

import './item.css'

export function Item({
  item: { id, name, price, image, description },
  addToCart,
  removeFromCart,
  isInCart,
  inUnavailable,
}) {
  const handleAddToCart = useCallback(() => {
    addToCart(id)
  }, [id, addToCart])

  const handleRemoveFromCart = useCallback(() => {
    removeFromCart(id)
  }, [id, removeFromCart])

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
