import React from 'react'
import 'normalize.css'
import './base.css'

import { Accordion } from './components/Accordion'
import { Modal } from './components/Modal'

function RedText() {
  return <div style={{ padding: 24, backgroundColor: 'tomato' }}>Random text</div>
}

export function App() {
  return (
    <main>
      <h1>Components showcase</h1>
      <Accordion header={<button>Open accordion</button>} content={<RedText />} />
      <Accordion header={<div>Click for magic</div>} content={<RedText />} />

      <Modal trigger={<button>Open modal</button>} content={<>I am modal</>}></Modal>
      <Modal trigger={<button>Open modal</button>} content={<>I am modal toooooo</>}></Modal>
    </main>
  )
}
