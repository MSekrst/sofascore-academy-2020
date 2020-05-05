import React from 'react'
import { Link, useParams } from 'react-router-dom'

export function End() {
  const { tries } = useParams()

  const numberOfTries = Number(tries)

  if (!numberOfTries) {
    return <p>Cheater</p>
  }

  return (
    <>
      <h2>Congratulation</h2>
      <p>
        you won the game in {numberOfTries} {numberOfTries > 1 ? 'tries' : 'try'}
      </p>

      <Link to="/hall-of-fame">Check Hall of Fame</Link>
    </>
  )
}
