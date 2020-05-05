import React from 'react'
import { Link } from 'react-router-dom'

export function Home() {
  return (
    <>
      <h1>Welcome to Guesser</h1>
      <p>
        Guesser game is really simple. Computer will imagine random number and your task is to guess it.
        <br />
        Taka as few guesses as possible.
      </p>

      <Link to="/game">Play game</Link>
    </>
  )
}
