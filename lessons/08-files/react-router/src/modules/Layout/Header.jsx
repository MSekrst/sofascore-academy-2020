import React from 'react'
import { NavLink } from 'react-router-dom'

/* NavLink is same as Link but it will set active class automatically to the active NavLink based on URL */

export function Header() {
  return (
    <header>
      {/* What will happen if we remove exact prop 🤔 */}
      <NavLink exact to="/">
        Home
      </NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/profile">Profile</NavLink>
    </header>
  )
}
