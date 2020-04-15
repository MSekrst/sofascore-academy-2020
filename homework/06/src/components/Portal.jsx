import React from 'react'
import ReactDOM from 'react-dom'

export class Portal extends React.Component {
  static element = document.getElementById('portal-root')

  render() {
    return ReactDOM.createPortal(this.props.children, Portal.element)
  }
}
