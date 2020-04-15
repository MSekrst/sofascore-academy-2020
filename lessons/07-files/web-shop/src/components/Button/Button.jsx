import React from 'react'

import './button.css'

export function Button({ value, onClick, children, style, className = '' }) {
  return (
    <button style={style} className={`button primary-bg text-color ${className}`} value={value} onClick={onClick}>
      {children}
    </button>
  )
}
