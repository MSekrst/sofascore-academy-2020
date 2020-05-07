import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

import { Input, Text } from '../../../components'
import { Fade } from '../../../utils'

import { GameContext } from '../context/GameContext'

export function Intro() {
  const { username, setUsername } = useContext(GameContext)

  return (
    <>
      <Text title>Game Intro</Text>
      <Text>Computer will imagine number between 0 and 100.</Text>
      <Text>
        Guess that number. Computer will respond with <b>LOW</b> or <b>HIGH</b>.
      </Text>

      <Text>
        <Input value={username} label="Username" onChange={setUsername} />
      </Text>

      <Fade visible={!!username}>
        <Text>
          <Link to="/game/play">Start game</Link>
        </Text>
      </Fade>
    </>
  )
}
