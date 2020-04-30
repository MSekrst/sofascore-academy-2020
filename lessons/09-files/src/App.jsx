import React from 'react'
import { createGlobalStyle } from 'styled-components'

import { FruitContainer } from './modules/FruitContainer/FruitContainer'

const GlobalStyles = createGlobalStyle`
  body {
    font-family: 'Lato', sans-serif;
    background: whitesmoke;
    color: #404040;
    user-select: none;
  }
`

function App() {
  return (
    <>
      <GlobalStyles />
      <FruitContainer />
    </>
  )
}

export default App
