import React from 'react'

import './button.css'

export function Button({ value, onClick, children }) {
  return (
    <button className="button primary-bg text-color" value={value} onClick={onClick}>
      {children}
    </button>
  )
}
