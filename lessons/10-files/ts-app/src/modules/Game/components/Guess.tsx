import React, { useRef, useEffect, useCallback } from 'react'
import { useState } from 'react'
import { Redirect } from 'react-router-dom'

import { Input, Button } from '../../../components'
import { useDispatch } from 'react-redux'
import { addResult } from '../redux/actions'

enum GameStatus {
  Booting = 'booting',
  Start = 'start',
  Correct = 'correct',
  Low = 'too-low',
  High = 'too-high',
}

function Status({ status, tries }: { tries: number; status: GameStatus }) {
  if (status === GameStatus.Start) {
    return <p>Good Luck</p>
  }

  if (status === GameStatus.Correct) {
    return <Redirect to={`/game/end/${tries}`} />
  }

  return (
    <div>
      Your guess is too{' '}
      <b>
        {status === GameStatus.High && 'HIGH'}
        {status === GameStatus.Low && 'LOW'}
      </b>
      <p>Tries: {tries}</p>
    </div>
  )
}

export function Guess() {
  const numberRef = useRef<number>()

  const [status, setGameStatus] = useState(GameStatus.Booting)
  const [guess, setGuess] = useState<number>()
  const [tries, setTries] = useState(0)

  useEffect(() => {
    numberRef.current = Math.round(Math.random() * 100)

    setGameStatus(GameStatus.Start)
  }, [])

  const dispatch = useDispatch()

  const submitGuess = useCallback(() => {
    // this ! operator is from TS - it tells compiler that variable is defined (not undefined or null)
    const targetNumber = numberRef.current!
    const currentGuess = guess!

    console.log({ targetNumber })

    if (currentGuess === targetNumber) {
      setGameStatus(GameStatus.Correct)

      dispatch(addResult('test', tries + 1))
    }

    if (currentGuess > targetNumber) {
      setGameStatus(GameStatus.High)
    }

    if (currentGuess < targetNumber) {
      setGameStatus(GameStatus.Low)
    }

    setTries(tries => tries + 1)
  }, [guess, dispatch, tries])

  if (!numberRef || typeof numberRef.current === 'undefined') {
    return <p>Computer is thinking of a number</p>
  }

  return (
    <div>
      {/* TODO: Enter to submit */}
      <Input value={guess} placeholder="Your guess" onChange={setGuess} />
      <Button onClick={submitGuess}>Guess</Button>

      <Status status={status} tries={tries} />
    </div>
  )
}
