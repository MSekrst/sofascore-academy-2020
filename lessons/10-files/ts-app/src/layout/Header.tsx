import React from 'react'
import { NavLink } from 'react-router-dom'

import styled from 'styled-components'
import { PRIMARY_COLOR_DARK, textColor } from '../utils'

const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  height: 70px;
  font-size: 18px;
  font-weight: bold;
  padding: 8px;
  background-color: ${PRIMARY_COLOR_DARK};
  ${textColor};

  a {
    color: inherit;
  }

  > nav {
    * + * {
      margin-left: 12px;
    }
  }

  .logo {
    display: none;
  }

  .active {
    ${textColor};
    padding: 8px;
    border-bottom: 4px solid;
  }

  @media (min-width: 600px) {
    justify-content: space-between;

    .logo {
      display: initial;
    }
  }
`

export function Header() {
  return (
    <StyledHeader>
      <div className="logo">G</div>
      <nav>
        <NavLink exact to="/">
          Home
        </NavLink>
        <NavLink to="/game">Play</NavLink>
        <NavLink to="/hall-of-fame">Hall of Fame</NavLink>
      </nav>
    </StyledHeader>
  )
}
