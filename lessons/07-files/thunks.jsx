import React, { useState } from 'react'
import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import { Provider, useSelector, useDispatch } from 'react-redux'

// action types
const FETCH_STARTED = 'FETCH_STARTED'
const FETCH_SUCCESSFUL = 'FETCH_SUCCESSFUL'
const FETCH_FAILED = 'FETCH_FAILED'

const fetchStarted = () => ({ type: FETCH_STARTED })
const fetchSuccessful = user => ({ type: FETCH_SUCCESSFUL, user })
const fetchFailed = error => ({ type: FETCH_FAILED, error })

// action creators
function loginUser(username, password) {
  return async function (dispatch) {
    dispatch(fetchStarted())

    try {
      const response = await fetch('https://private-leagues-api.herokuapp.com/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      })

      if (response.status > 299) {
        throw Error('Invalid response')
      }

      const userData = await response.json()

      return dispatch(fetchSuccessful(userData))
    } catch (e) {
      return dispatch(fetchFailed(e))
    }
  }
}

const initialReduxState = {
  isLoading: false,
  error: null,
  user: null,
}

// reducer
function loginReducer(state = initialReduxState, action) {
  switch (action.type) {
    case FETCH_STARTED:
      return { ...state, isLoading: true, error: null }

    case FETCH_SUCCESSFUL:
      return { ...state, isLoading: false, error: null, user: action.user }

    case FETCH_FAILED:
      return { ...state, isLoading: false, error: action.error, user: null }

    default:
      return state
  }
}

// create Redux store
const store = createStore(loginReducer, applyMiddleware(thunk, logger))

// Main app component
export function LoginThunks() {
  return (
    <Provider store={store}>
      <Login />
    </Provider>
  )
}

function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const { isLoading, error, user } = useSelector(state => state)
  const dispatch = useDispatch()

  const handleUsernameChange = React.useCallback(e => {
    const username = e.currentTarget.value
    setUsername(username)
  }, [])

  const handlePasswordChange = React.useCallback(e => {
    const password = e.currentTarget.value
    setPassword(password)
  }, [])

  const handleSubmit = React.useCallback(
    async e => {
      // prevent default form submitting
      e.preventDefault()

      // do validation here

      dispatch(loginUser(username, password))
    },
    // React guarantees that dispatch will not change, action creators also cannot change
    [username, password, dispatch]
  )

  // login successful
  if (user) {
    return (
      <div>
        <h1>Welcome: {user.user.username}</h1>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Login</h1>
      {error && <div>{error.message}</div>}
      <label>
        Username:
        <input type="text" name="username" value={username} onChange={handleUsernameChange} />
      </label>
      <br />
      <label>
        Password:
        <input type="password" name="password" value={password} onChange={handlePasswordChange} />
      </label>
      <br />
      <button disabled={isLoading}>{isLoading ? 'Loading...' : 'Submit'}</button>
    </form>
  )
}
