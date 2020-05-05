import React from 'react'
import { Switch, Route, useRouteMatch } from 'react-router-dom'

import { Intro } from './Intro'
import { Guess } from './Guess'
import { End } from './End'

export function Game() {
  const match = useRouteMatch()

  return (
    <Switch>
      <Route exact path={`${match.path}`}>
        <Intro />
      </Route>

      <Route path={`${match.path}/play`}>
        <Guess />
      </Route>

      <Route path={`${match.path}/end/:tries`}>
        <End />
      </Route>
    </Switch>
  )
}
