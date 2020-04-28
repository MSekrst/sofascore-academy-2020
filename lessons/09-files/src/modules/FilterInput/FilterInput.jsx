import React, { useState, useCallback } from 'react'

import { getMatchingOptions } from './helpers'

export function FilterInput({ label, options, onSubmit }) {
  const [input, setInput] = useState('')

  const handleInputChange = useCallback(e => {
    setInput(e.target.value)
  }, [])

  const handleOnSubmit = useCallback(
    value => {
      onSubmit(value)
    },
    [onSubmit]
  )

  const matchingSuggestions = getMatchingOptions(options, input)

  return (
    <div>
      {label && <label>{label}</label>}
      <input
        placeholder="Enter filter term"
        aria-label="Filter input"
        value={input}
        type="text"
        onChange={handleInputChange}
      />
      {matchingSuggestions.length > 0 && (
        <div>
          {matchingSuggestions.map(o => (
            <div key={o.id} onClick={() => handleOnSubmit(o.label)}>
              {o.label}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
