import React, { useState } from 'react'
import { Switch, Route, useRouteMatch } from 'react-router-dom'

import { GameContext } from '../context/GameContext'
import { Intro } from './Intro'
import { Guess } from './Guess'
import { End } from './End'

export function Game() {
  const [tries, setTries] = useState(0)
  const [username, setUsername] = useState('')
  const match = useRouteMatch()

  return (
    <GameContext.Provider value={{ tries, username, setTries, setUsername }}>
      <Switch>
        <Route exact path={`${match.path}`}>
          <Intro />
        </Route>

        <Route exact path={`${match.path}/play`}>
          <Guess />
        </Route>

        <Route path={`${match.path}/play/end`}>
          <End />
        </Route>
      </Switch>
    </GameContext.Provider>
  )
}
