import React from 'react'

function Greeting({ name }) {
  return (
    <p>
      Hello: <b>{name.toUpperCase()}</b>
    </p>
  )
}

export function Motivation() {
  return (
    <div>
      <Greeting name="Sofa Academy" />
    </div>
  )
}
