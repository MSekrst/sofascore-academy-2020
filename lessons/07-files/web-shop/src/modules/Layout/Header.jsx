import React from 'react'

import { ShoppingCart } from '../ShoppingCart'

import './layout.css'

export function Header({ children, shoppingCart }) {
  return (
    <header className="header primary-bg text-color">
      <div>{children}</div>
      <div>
        <ShoppingCart shoppingCart={shoppingCart} />
      </div>
    </header>
  )
}
