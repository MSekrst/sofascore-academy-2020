import React from 'react'

export class Checkbox extends React.Component {
  constructor(props) {
    super(props)

    this.handleOnChange = this.handleOnChange.bind(this)
  }

  handleOnChange() {
    const { onChange, value } = this.props

    onChange(value)
  }

  render() {
    const { onChange, value, label } = this.props

    return (
      <label className="checkbox-container" key={value}>
        <input className="checkbox" type="checkbox" onClick={onChange} />
        <span className="checkbox-text">{label}</span>
      </label>
    )
  }
}
