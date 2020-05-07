import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { PersistGate } from 'redux-persist/integration/react'

import { Header, Home } from './layout'
import { HallOfFame, Game } from './modules'
import { store, persistor } from './state'
import { GlobalStyles } from './utils'

function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <GlobalStyles />
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <BrowserRouter>{children}</BrowserRouter>
        </PersistGate>
      </Provider>
    </>
  )
}

function App() {
  return (
    <Providers>
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
    </Providers>
  )
}

export default App
