import React, { useState, useCallback } from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

import './base.css'
import { Header } from './modules/Layout/Header'
import { Home } from './modules/Home/Home'
import { About } from './modules/About/About'
import { Profile } from './modules/Profile/Profile'
import { ClickCounter } from './modules/ClickCounter/ClickCounter'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const toggleLogin = useCallback(() => {
    setIsLoggedIn(previous => !previous)
  }, [])

  return (
    <BrowserRouter>
      <Header />
      <main>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          {/* this is example of protected route */}
          <ProtectedRoute isLoggedIn={isLoggedIn} path="/profile">
            <Profile />
          </ProtectedRoute>
          {/* wildcard route, always matched, must be last */}
          <Route path="*">
            <h1>404 - page not found</h1>
          </Route>
        </Switch>
        <ClickCounter />
        <br />
        <br />
        <label>
          <input type="checkbox" value={isLoggedIn} onChange={toggleLogin} />
          Is logged in
        </label>
      </main>
    </BrowserRouter>
  )
}

/**
 * Component that will show provided children (page) only to logged in user. If user is not logged in, redirect will happen.
 */
function ProtectedRoute({ children, isLoggedIn, ...routeProps }) {
  // in real app isLoggedIn would come from provider or from the redux state

  // in real app redirect would be to the login page
  return isLoggedIn ? <Route {...routeProps}>{children}</Route> : <Redirect to="/" />
}

export default App
