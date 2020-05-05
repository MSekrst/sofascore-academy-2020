import React, { useRef, useEffect, useCallback } from 'react'
import { useState } from 'react'
import { Input, Button } from '../../components'
import { Redirect } from 'react-router-dom'

enum GameStatus {
  Booting = 'booting',
  Start = 'start',
  Correct = 'correct',
  Low = 'too-low',
  High = 'too-high',
}

function Status({ status, tries }: { tries: number; status: GameStatus }) {
  if (status === GameStatus.Start) {
    return null
  }

  if (status === GameStatus.Correct) {
    return <Redirect to={`/game/end/${tries}`} />
  }

  return (
    <p>
      Your guess is too{' '}
      <b>
        {status === GameStatus.High && 'HIGH'}
        {status === GameStatus.Low && 'LOW'}
      </b>
    </p>
  )
}

export function Guess() {
  const numberRef = useRef<number>()

  const [status, setGameStatus] = useState<GameStatus>(GameStatus.Booting)
  const [guess, setGuess] = useState<number>()
  const [tries, setTries] = useState<number>(0)

  useEffect(() => {
    numberRef.current = Math.round(Math.random() * 100)

    setGameStatus(GameStatus.Start)
  }, [])

  const submitGuess = useCallback(() => {
    // this ! operator is from TS - it tells compiler that variable is defined (not undefined or null)
    const targetNumber = numberRef.current!
    const currentGuess = guess!

    console.log({ targetNumber, currentGuess })

    if (currentGuess === targetNumber) {
      setGameStatus(GameStatus.Correct)
    }

    if (currentGuess > targetNumber) {
      setGameStatus(GameStatus.High)
    }

    if (currentGuess < targetNumber) {
      setGameStatus(GameStatus.Low)
    }

    setTries(tries => tries + 1)
  }, [guess])

  if (!numberRef || typeof numberRef.current === 'undefined') {
    return <p>Computer is thinking of a number</p>
  }

  return (
    <div>
      <Input value={guess} placeholder="Your guess" onChange={setGuess} />
      <Button onClick={submitGuess}>Guess</Button>

      <Status status={status} tries={tries} />
    </div>
  )
}
