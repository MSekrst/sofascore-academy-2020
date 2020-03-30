import React from 'react'

import './base.css'
import './components/components.css'
import './modules/modules.css'

import { JokeContainer } from './modules/JokeContainer'
import { Header } from './components/Header'

function App() {
  return (
    <div>
      <Header>
        <h1>JOKES</h1>
      </Header>
      <main>
        <JokeContainer />
      </main>
    </div>
  )
}

export default App
