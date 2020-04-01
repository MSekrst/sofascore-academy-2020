import React from 'react'

export class EventPooling extends React.Component {
  constructor(props) {
    super(props)

    this.state = { e: null, lastEventType: 'not-set' }
  }

  handleEvent = e => {
    // console.log of whole event will not work because console.log takes reference to an object not an object copy
    console.log('In handler - Whole event:', { e })

    console.log('In event handler - direct:', e.type) // works

    this.setState({ e, lastEventType: e.type }) // store event

    const type = e.type // copy property

    setTimeout(() => {
      console.log('In async callback - direct:', e.type) // won't work
      console.log('In async callback - variable:', type) // works
    }, 0)
  }

  render() {
    const { e, lastEventType } = this.state

    console.log('In render - direct:', e && e.type) // why would you store event in state 😂

    console.log('In render - variable:', lastEventType)

    return (
      <div>
        <button onClick={this.handleEvent}>CLICK ME</button>
      </div>
    )
  }
}
