import React from 'react'
import { Route, Link } from 'react-router-dom'

export function About() {
  return (
    <>
      <h1>About</h1>

      <Link to={`/about/1`}>Go to page 1</Link>
      <Link to={`/about/2`}>Go to page 2</Link>
      <br />
      {/* render number only if provided */}
      {/* we use component to specify rendered component, this component will receive route props */}
      <Route path="/about/:page" component={AboutNumber} />
    </>
  )
}

// component has router props
function AboutNumber(props) {
  const page = props.match.params.page

  return (
    <div style={{ margin: 16 }}>
      Number is <b>{page}</b>
    </div>
  )
}
