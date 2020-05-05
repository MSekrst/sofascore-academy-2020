// @flow

import React, { useState } from 'react'

import { Select } from './Select'

function App() {
  const [selected, setSelected] = useState('')

  const options = [
    {
      label: 'PropTypes',
      value: 'propTypes',
    },
    {
      label: 'Flow',
      value: 'flow',
    },
    {
      label: 'TypeScript',
      value: 'ts',
    },
  ]

  return (
    <>
      {/* TODO: add label */}
      <Select options={options} value={selected} onChange={setSelected} />
    </>
  )
}

export default App
