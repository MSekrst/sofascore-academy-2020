import React, { useState, useRef, useEffect, useCallback, useContext } from 'react'
import { useDispatch } from 'react-redux'
import { Redirect, useRouteMatch } from 'react-router-dom'

import { Input, Button, Text } from '../../../components'

import { addResult } from '../redux/actions'
import { GameContext } from '../context/GameContext'

enum GameStatus {
  Start = 'start',
  Correct = 'correct',
  Low = 'too-low',
  High = 'too-high',
}

function Status({ status }: { status: GameStatus }) {
  const match = useRouteMatch()

  if (status === GameStatus.Start) {
    return <Text>Good Luck</Text>
  }

  if (status === GameStatus.Correct) {
    return <Redirect to={`${match.path}/end`} />
  }

  return (
    <Text>
      Your guess is too{' '}
      <b>
        {status === GameStatus.High && 'HIGH'}
        {status === GameStatus.Low && 'LOW'}
      </b>
    </Text>
  )
}

export function Guess() {
  const numberRef = useRef<number>(Math.round(Math.random() * 100))

  const [status, setGameStatus] = useState(GameStatus.Start)
  const [guess, setGuess] = useState<number>()
  const { tries, setTries, username } = useContext(GameContext)

  const dispatch = useDispatch()

  console.log('Target = ', numberRef.current)

  const submitGuess = useCallback(() => {
    const targetNumber = numberRef.current
    // this ! operator is from TS - it tells compiler that variable is defined (not undefined or null)
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
    <>
      <Text>
        <Input value={guess} min={0} max={100} label="Guess" onChange={value => setGuess(Number(value))} />
      </Text>
      <Text>
        <Button disabled={typeof guess !== 'number'} onClick={submitGuess}>
          Guess
        </Button>
      </Text>

      <Status status={status} />
    </>
  )
}
