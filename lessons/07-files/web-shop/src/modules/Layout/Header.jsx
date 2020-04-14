import React from 'react'

import { ShoppingCart } from '../ShoppingCart'

import './layout.css'

export function Header({ children }) {
  return (
    <header className="header primary-bg text-color">
      <div>{children}</div>
      <div>
        <ShoppingCart />
      </div>
    </header>
  )
}
