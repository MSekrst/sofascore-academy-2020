import React from 'react'

import { Children, Stylable } from '../../utils'

interface ButtonProps extends Children, Stylable {
  onClick?: () => void
  variant?: 'primary' | 'link'
}

export function Button({ children, onClick = () => {}, variant = 'primary', ...styles }: ButtonProps) {
  return (
    // TODO: add styling by variant
    <button {...styles} value={variant} onClick={onClick}>
      {children}
    </button>
  )
}
