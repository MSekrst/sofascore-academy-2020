// import { createStore } from 'redux'
const createStore = require('redux').createStore

/**
 * Reducer function. Returns new redux state. Initial state will be 0.
 * Redux state based on this reducer will be basic number (not even object).
 * In majority of use cases, object will be used as redux state. State design is very important.
 *
 * @param {number} state current redux state
 * @param {Object} action dispatched action
 */
function counter(state = 0, action) {
  // switch case is common in reducers

  // get action type and based on type return next state
  switch (action.type) {
    // if action type is increment return value + 1
    case 'INCREMENT':
      return state + 1
    // if action type is decrement return value - 1
    case 'DECREMENT':
      return state - 1
    // default should always return state (no mutations done, so no need to change state reference)
    default:
      return state
  }
}

// Create a Redux store. Redux store has useful API.
// subscribe(fn) -> fun will be called when state changes
// dispatch(action) -> dispatches provided action
// getState() -> return current Redux state
let store = createStore(counter)

// on each state change, log new state
store.subscribe(() => console.log(store.getState()))

console.log('Initial state =', store.getState())

console.log('Will dispatch increment')
// dispatch increment action
store.dispatch({ type: 'INCREMENT' })
// 1

console.log('Will dispatch second increment')
store.dispatch({ type: 'INCREMENT' })
// 2

console.log('Will dispatch decrement')
store.dispatch({ type: 'DECREMENT' })
// 1

// This is example of standalone Redux. We will further use `react-redux` library with bindings for React. 
// Library will provide components (or hooks) for accessing state, dispatching, etc.