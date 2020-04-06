import React from 'react'

export function Form() {
  const usernameRef = React.useRef()
  const passwordRef = React.useRef()

  // note how ref is different, depending on component type (functional, or class)
  console.log({ usernameRef, passwordRef })

  // extract value from refs on submit, etc.

  return (
    <div>
      <InputFunction ref={usernameRef} label="E-Mail" placeholder="someone@gmail.com" />
      <br />
      <InputClass ref={passwordRef} label="Password" type="password" placeholder="6 chars minimum" />
    </div>
  )
}

const InputFunction = ({ type = 'text', placeholder = '', label = '' }) => {
  return (
    <label>
      {label}
      <input type={type} placeholder={placeholder} />
    </label>
  )
}

class InputClass extends React.Component {
  render() {
    const { type = 'text', placeholder = '', label = '' } = this.props

    return (
      <label>
        {label}
        <input type={type} placeholder={placeholder} />
      </label>
    )
  }
}
