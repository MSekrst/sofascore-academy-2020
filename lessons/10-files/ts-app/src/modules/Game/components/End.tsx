import React, { useContext } from 'react'
import { Link, Redirect } from 'react-router-dom'

import { Text } from '../../../components'

import { GameContext } from '../context/GameContext'

export function End() {
  const { tries } = useContext(GameContext)

  const numberOfTries = Number(tries)

  if (!numberOfTries) {
    return <Redirect to="/game" />
  }

  return (
    <>
      <Text>Congratulation</Text>
      <Text>
        you won the game in {numberOfTries} {numberOfTries > 1 ? 'tries' : 'try'}
      </Text>

      <Link to="/hall-of-fame">Check Hall of Fame</Link>
    </>
  )
}
