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

const InputFunction = React.forwardRef(({ type = 'text', placeholder = '', label = '' }, ref) => {
  return (
    <label>
      {label}
      <input ref={ref} type={type} placeholder={placeholder} />
    </label>
  )
})

class _InputClass extends React.Component {
  render() {
    const { type = 'text', placeholder = '', label = '', innerRef } = this.props

    return (
      <label>
        {label}
        <input ref={innerRef} type={type} placeholder={placeholder} />
      </label>
    )
  }
}

const InputClass = React.forwardRef((props, ref) => <_InputClass innerRef={ref} {...props} />)
