import React from 'react'

// action types
const SET_USERNAME = 'SET_USERNAME'
const SET_PASSWORD = 'SET_PASSWORD'
const FETCH_STARTED = 'FETCH_STARTED'
const FETCH_SUCCESSFUL = 'FETCH_SUCCESSFUL'
const FETCH_FAILED = 'FETCH_FAILED'
const VALIDATION_FAILED = 'VALIDATION_FAILED'

// action creators
const setUsername = username => ({ type: SET_USERNAME, username })
const setPassword = password => ({ type: SET_PASSWORD, password })
const fetchStarted = () => ({ type: FETCH_STARTED })
const fetchSuccessful = user => ({ type: FETCH_SUCCESSFUL, user })
const fetchFailed = error => ({ type: FETCH_FAILED, error })
const validationFailed = error => ({ type: VALIDATION_FAILED, error })

// reducer
function loginReducer(state, action) {
  switch (action.type) {
    case SET_USERNAME:
      return { ...state, username: action.username }

    case SET_PASSWORD:
      return { ...state, password: action.password }

    case FETCH_STARTED:
      return { ...state, isLoading: true, error: null }

    case FETCH_SUCCESSFUL:
      return { ...state, isLoading: false, error: null, user: action.user }

    case FETCH_FAILED:
      return { ...state, isLoading: false, error: action.error, user: null }

    case VALIDATION_FAILED:
      return { ...state, error: Error('Invalid credentials') }

    default:
      return { ...state, error: Error('Unexpected action') }
  }
}

// validation function -> real validation is more complex
function validateLogin(username, password) {
  if (!username || username.length < 5 || !password || password.length < 5) {
    return Error('Bad credentials format')
  }

  return null
}

// component
export function Login() {
  // login state is handled with useReducer
  const [state, dispatch] = React.useReducer(loginReducer, {
    username: '',
    password: '',
    isLoading: false,
    error: null,
    user: null,
  })

  const { username, password, isLoading, error, user } = state

  const handleUsernameChange = React.useCallback(e => {
    const username = e.currentTarget.value
    dispatch(setUsername(username))
  }, [])

  const handlePasswordChange = React.useCallback(e => {
    const password = e.currentTarget.value
    dispatch(setPassword(password))
  }, [])

  const handleSubmit = React.useCallback(
    async e => {
      // prevent default form submitting
      e.preventDefault()

      const validationError = validateLogin(username, password)

      if (validationError) {
        return dispatch(validationFailed(validationError))
      }

      // credentials are valid here

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
    },
    // React guarantees that dispatch will not change, action creators also cannot change
    [username, password]
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

// this example ignores desired separation of concerns as it would be more complex when separated correctly
