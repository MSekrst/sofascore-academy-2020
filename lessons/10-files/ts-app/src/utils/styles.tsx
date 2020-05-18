import styled, { css, createGlobalStyle } from 'styled-components'

export const PRIMARY_COLOR = '#ab47bc'
export const PRIMARY_COLOR_LIGHT = '#df78ef'
export const PRIMARY_COLOR_DARK = '#790e8b'

export const BACKGROUND_COLOR = '#121212'
export const SURFACE_BACKGROUND_COLOR = 'rgba(255, 255, 255, 0.1)'
export const TEXT_COLOR = '#ffffff'

export const primaryColor = css`
  color: ${PRIMARY_COLOR};
`

export const backgroundColor = css`
  background-color: ${BACKGROUND_COLOR};
`

export const surfaceBackgroundColor = css`
  background-color: ${SURFACE_BACKGROUND_COLOR};
`

export const textColor = css`
  color: ${TEXT_COLOR};
`

export const Fade = styled.div<{ visible?: boolean }>`
  transition: opacity 0.2s ease-in-out;
  opacity: ${props => (props.visible ? 1 : 0)};

  ${props => !props.visible && `pointer-events: none;`}
`

export const GlobalStyles = createGlobalStyle`
  body {
    font-family: 'Lato', sans-serif;
    user-select: none;
    ${backgroundColor};
    ${textColor};
    margin: 0;
  }

  main {
    margin-top: 8px;
  }

  a {
    text-decoration: none;
    transition: color 0.2s ease-in-out;
    text-transform: uppercase;
    font-size: 18px;
    font-weight: bold;
    ${primaryColor};

    &:hover {
      text-decoration: none;
      color: ${PRIMARY_COLOR_LIGHT};
    }

    &:visited {
      text-decoration: none
    }
  }
`
