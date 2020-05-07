import React from 'react'
import { Link } from 'react-router-dom'

import { Text } from '../components'

export function Home() {
  return (
    <>
      <Text title>Welcome to Guesser</Text>

      <Text>
        Game is simple - Guess computer's number Computer will imagine random number and your task is to guess it.
      </Text>
      <Text>Take as few guesses as possible.</Text>

      <Text>
        <Link to="/game">Play game</Link>
      </Text>
    </>
  )
}
