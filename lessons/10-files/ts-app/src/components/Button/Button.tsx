import React from 'react'
import styled from 'styled-components'

import { Children, Stylable, PRIMARY_COLOR, textColor, PRIMARY_COLOR_DARK } from '../../utils'

interface ButtonProps extends Children, Stylable {
  onClick?: () => void
  disabled?: boolean
}

const StyledButton = styled.button`
  padding: 8px 16px;
  font-size: 18px;
  font-weight: bold;
  text-transform: uppercase;
  background-color: ${PRIMARY_COLOR};
  transition: all 0.2s ease-in-out;
  ${textColor}
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: ${PRIMARY_COLOR_DARK};
  }

  > a {
    margin: -8px -16px;
  }

  &:disabled {
    background-color: transparent;
    opacity: 0.5;
    cursor: not-allowed;
  }
`

export function Button({ children, onClick = () => {}, ...rest }: ButtonProps) {
  return (
    <StyledButton {...rest} onClick={onClick}>
      {children}
    </StyledButton>
  )
}
