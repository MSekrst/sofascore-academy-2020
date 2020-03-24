import React from 'react'

class Input extends React.Component {
  render() {
    const { value, onChange } = this.props

    return (
      <input
        value={value}
        type="text"
        onChange={event => {
          onChange(event.currentTarget.value)
        }}
      />
    )
  }
}

export class Form extends React.Component {
  constructor(props) {
    super(props)

    this.state = { value: '' }

    this.updateInput = this.updateInput.bind(this)
  }

  updateInput(newValue) {
    this.setState({ value: newValue })
  }

  render() {
    const { value } = this.state

    return (
      <div>
        <Input value={value} onChange={this.updateInput} />
        <button onClick={() => alert(value)}>Submit</button>
      </div>
    )
  }
}
