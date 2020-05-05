import React from 'react'
import { Link } from 'react-router-dom'

export function Intro() {
  return (
    <>
      <h2>Game Intro</h2>
      <p>Computer will imagine number between 0 and 100, including limits.</p>
      <p>Your task is to guess that number. Computer will respond with Lesser and Greater.</p>
      <p>When number is guessed you have won.</p>

      <Link to="/game/play">Start game</Link>
    </>
  )
}
