import React from 'react'

// TODO: Add redux
// TODO: Add logger

export function CounterApp() {
  const [counter, setCounter] = React.useState(0)

  return (
    <div>
      <h3>Main count: {counter}</h3>
      <Counters counter={counter} setCounter={setCounter} />
    </div>
  )
}

function Counters({ counter, setCounter }) {
  return (
    <div>
      <CountByOne counter={counter} setCounter={setCounter} />
      <CustomCount counter={counter} setCounter={setCounter} />
    </div>
  )
}

function CountByOne({ counter, setCounter }) {
  const handleCountChange = React.useCallback(
    newCount => () => {
      setCounter(newCount)
    },
    [setCounter]
  )

  return (
    <div>
      <h3>CountByOne: {counter}</h3>
      <button onClick={handleCountChange(counter + 1)}>+ INCREMENT</button>
      <button onClick={handleCountChange(counter - 1)}>- DECREMENT</button>
    </div>
  )
}

class CustomCount extends React.Component {
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
