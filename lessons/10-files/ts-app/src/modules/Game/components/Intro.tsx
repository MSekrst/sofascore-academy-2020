import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Input } from '../../../components'
import { GameContext } from '../context/GameContext'
import { Text } from '../../../components/Text/Text'

export function Intro() {
  const { username, setUsername } = useContext(GameContext)

  return (
    <>
      <Text>Game Intro</Text>
      <Text>Computer will imagine number between 0 and 100, including limits.</Text>
      <Text>Your task is to guess that number. Computer will respond with LOW or HIGH.</Text>
      <Text>When number is guessed you have won.</Text>

      <div>
        <Input value={username} placeholder="Username" onChange={setUsername} />
      </div>

      <Link to="/game/play">Start game</Link>
    </>
  )
}
