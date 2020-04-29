import React, { useState, useCallback } from 'react'
import styled from 'styled-components'

import { getMatchingOptions } from './helpers'
import { Fruit } from '../Fruit/Fruit'

const FilterWrapper = styled.div`
  margin-top: 24px;

  > label {
    font-size: 20px;
    font-weight: 700;
  }

  > input {
    box-sizing: border-box;
    display: block;
    padding: 8px 16px;
    font-size: 20px;
    font-weight: 400;
    color: #404040;
    border: 1px solid #40404050;
    background-color: transparent;
    outline: none;
    margin: 16px 0;
    width: 100%;

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  }
`

const NoResults = styled.div`
  font-size: 18px;
  font-weight: 500;
  text-align: center;
`

export function FruitFilter({ label, options, onSubmit, actions }) {
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
  const hasItems = matchingSuggestions.length > 0

  return (
    <FilterWrapper>
      {label && (
        <>
          <label>{label}</label>
        </>
      )}

      <input
        placeholder="Filter term"
        aria-label={label}
        value={input}
        type="text"
        disabled={!input && !hasItems}
        onChange={handleInputChange}
      />
      {hasItems ? (
        <div>
          {matchingSuggestions.map(fruitName => (
            <Fruit key={fruitName} name={fruitName} onClick={() => handleOnSubmit(fruitName)} actions={actions} />
          ))}
        </div>
      ) : (
        <NoResults>No items</NoResults>
      )}
    </FilterWrapper>
  )
}
