import React from 'react'
import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import { Provider, useSelector, useDispatch, connect } from 'react-redux'

// action type
const SET_COUNTER = 'SET_COUNTER'
// action creator
const setCounter = value => ({ type: SET_COUNTER, value })

function reducer(state = { counter: 0 }, action) {
  if (action.type === SET_COUNTER) {
    return { ...state, counter: action.value }
  }

  return state
}

const store = createStore(reducer, applyMiddleware(logger))

export function CounterApp() {
  return (
    <Provider store={store}>
      <Counters />
    </Provider>
  )
}

function Counters() {
  return (
    <div>
      <CountByOne />
      <CustomCount />
    </div>
  )
}

function CountByOne() {
  const counter = useSelector(state => state.counter)
  const dispatch = useDispatch()

  const handleCountChange = React.useCallback(
    newCount => () => {
      dispatch(setCounter(newCount))
    },
    [dispatch]
  )

  return (
    <div>
      <h3>CountByOne: {counter}</h3>
      <button onClick={handleCountChange(counter + 1)}>+ INCREMENT</button>
      <button onClick={handleCountChange(counter - 1)}>- DECREMENT</button>
    </div>
  )
}

class _CustomCount extends React.Component {
  constructor(props) {
    super(props)

    this.state = { count: '' }

    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleButtonClick = this.handleButtonClick.bind(this)
  }

  handleInputChange(e) {
    const count = Number(e.currentTarget.value)
    this.setState({ count })
  }

  handleButtonClick() {
    this.props.setCounter(this.state.count)
  }

  render() {
    const { count } = this.state
    const isValidCount = typeof count === 'number'

    return (
      <div>
        <h3>CustomCount: {this.props.counter}</h3>
        <label>
          Enter new count: <input type="number" value={isValidCount ? count : ''} onChange={this.handleInputChange} />
        </label>
        <button disabled={!isValidCount} onClick={this.handleButtonClick}>
          SET
        </button>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { counter: state.counter }
}

function mapDispatchToProps(dispatch) {
  return { setCounter: newValue => dispatch(setCounter(newValue)) }
}

const CustomCount = connect(mapStateToProps, mapDispatchToProps)(_CustomCount)
