import React from 'react'
import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <header>
      <div>Guesser</div>
      <nav>
        <NavLink to="/game">New Game</NavLink>
        <NavLink to="/hall-of-fame">Hall of Fame</NavLink>
      </nav>
    </header>
  )
}
