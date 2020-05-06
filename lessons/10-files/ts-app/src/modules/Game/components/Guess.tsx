import React, { useState, useRef, useEffect, useCallback, useContext } from 'react'
import { useDispatch } from 'react-redux'
import { Redirect, useRouteMatch } from 'react-router-dom'

import { Input, Button } from '../../../components'
import { addResult } from '../redux/actions'
import { GameContext } from '../context/GameContext'
import { Text } from '../../../components/Text/Text'

enum GameStatus {
  Booting = 'booting',
  Start = 'start',
  Correct = 'correct',
  Low = 'too-low',
  High = 'too-high',
}

function Status({ status }: { status: GameStatus }) {
  const match = useRouteMatch()

  if (status === GameStatus.Start) {
    return <p>Good Luck</p>
  }

  if (status === GameStatus.Correct) {
    return <Redirect to={`${match.path}/end`} />
  }

  return (
    <div>
      Your guess is too{' '}
      <b>
        {status === GameStatus.High && 'HIGH'}
        {status === GameStatus.Low && 'LOW'}
      </b>
    </div>
  )
}

export function Guess() {
  const numberRef = useRef<number>()

  const [status, setGameStatus] = useState(GameStatus.Booting)
  const [guess, setGuess] = useState<number>()
  const { tries, setTries, username } = useContext(GameContext)

  useEffect(() => {
    numberRef.current = Math.round(Math.random() * 100)

    setGameStatus(GameStatus.Start)
  }, [])

  const dispatch = useDispatch()

  console.log('Target = ', numberRef.current)

  const submitGuess = useCallback(() => {
    // this ! operator is from TS - it tells compiler that variable is defined (not undefined or null)
    const targetNumber = numberRef.current!
    const currentGuess = guess!
    const triesCounter = tries + 1

    if (currentGuess === targetNumber) {
      setGameStatus(GameStatus.Correct)

      dispatch(addResult(username, triesCounter))
    }

    if (currentGuess > targetNumber) {
      setGameStatus(GameStatus.High)
    }

    if (currentGuess < targetNumber) {
      setGameStatus(GameStatus.Low)
    }

    setTries(triesCounter)
  }, [guess, dispatch, tries, setTries, username])

  if (!username) {
    return <Redirect to="/game" />
  }

  if (!numberRef || typeof numberRef.current === 'undefined') {
    return <Text>Computer is thinking</Text>
  }

  return (
    <div>
      {/* TODO: Enter to submit */}
      <Input
        value={guess}
        placeholder="Number from 0..100"
        min={0}
        max={100}
        label="Your guess"
        onChange={value => setGuess(Number(value))}
      />
      <Button onClick={submitGuess}>Guess</Button>

      <Status status={status} />
    </div>
  )
}
