import React from 'react'

export class Card extends React.Component {
  render() {
    const { children, onClick } = this.props

    return (
      <article className="card color-background" onClick={onClick}>
        <div className="card-content">{children}</div>
      </article>
    )
  }
}
