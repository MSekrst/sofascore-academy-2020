import React from 'react'
import styled from 'styled-components'

import { Children, Stylable, PRIMARY_COLOR, textColor, PRIMARY_COLOR_DARK } from '../../utils'

interface ButtonProps extends Children, Stylable {
  onClick?: () => void
}

const StyledButton = styled.button`
  padding: 8px 16px;
  font-size: 18px;
  font-weight: bold;
  text-transform: uppercase;
  background-color: ${PRIMARY_COLOR};
  transition: background-color 0.2s ease-in-out;
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
`

export function Button({ children, onClick = () => {}, ...styles }: ButtonProps) {
  return (
    <StyledButton {...styles} onClick={onClick}>
      {children}
    </StyledButton>
  )
}
