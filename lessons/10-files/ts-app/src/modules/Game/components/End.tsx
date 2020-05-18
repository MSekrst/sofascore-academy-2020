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
      <Text title>
        <span style={{ fontWeight: 400 }}>You won in </span>
        {numberOfTries} {numberOfTries > 1 ? 'tries' : 'try'}
      </Text>

      <Text>
        <Link to="/hall-of-fame">Hall of Fame</Link>
      </Text>
    </>
  )
}
