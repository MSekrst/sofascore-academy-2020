import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { Header, Home } from './layout'
import { HallOfFame, Game } from './modules'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/game">
            <Game />
          </Route>

          <Route path="/hall-of-fame">
            <HallOfFame />
          </Route>

          <Route>
            <h1>404 - Page not found</h1>
          </Route>
        </Switch>
      </main>
    </BrowserRouter>
  )
}

export default App
