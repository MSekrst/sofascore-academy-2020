import React from 'react'

export class Button extends React.Component {
  render() {
    const { onClick, children } = this.props

    return (
      <button className="button color-primary" onClick={onClick}>
        {children}
      </button>
    )
  }
}
