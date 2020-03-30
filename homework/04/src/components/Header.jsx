import React from 'react'

export class Header extends React.Component {
  render() {
    return <header className="header color-background">{this.props.children}</header>
  }
}
