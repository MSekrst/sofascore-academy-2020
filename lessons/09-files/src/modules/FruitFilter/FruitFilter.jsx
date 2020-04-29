import React, { useState, useCallback } from 'react'

import { getMatchingOptions } from './helpers'
import { Fruit } from '../Fruit/Fruit'

export function FruitFilter({ label, options, onSubmit }) {
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
      {matchingSuggestions.length > 0 ? (
        <div>
          {matchingSuggestions.map(fruitName => (
            <Fruit
              key={fruitName}
              name={fruitName}
              onClick={() => handleOnSubmit(fruitName)}
              actions={<span className="material-icons">add</span>}
            />
          ))}
        </div>
      ) : (
        <p>No suggestions</p>
      )}
    </div>
  )
}
