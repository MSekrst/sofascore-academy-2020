import React, { useState, useCallback } from 'react'
import { FilterInput } from '../FilterInput/FilterInput'

export function FruitPicker({ fruit }) {
  const [favoriteFruit, setFavoriteFruit] = useState([])

  const handleFruitAdd = useCallback(
    addedFruit => {
      if (!favoriteFruit.includes(addedFruit)) {
        const newFruit = [...favoriteFruit, addedFruit]
        setFavoriteFruit(newFruit)
      }
    },
    [favoriteFruit]
  )

  if (!fruit.length) {
    return <h2>No fruit :(</h2>
  }

  return (
    <div>
      <p>Favorite fruit:</p>
      {favoriteFruit.length ? (
        <div>
          {favoriteFruit.map(name => (
            <div key={name}>{name}</div>
          ))}
        </div>
      ) : (
        <p>None </p>
      )}
      <FilterInput
        options={fruit.map(fruit => ({ id: fruit.name, label: fruit.name }))}
        label="Pick favorite fruit"
        onSubmit={handleFruitAdd}
      />
    </div>
  )
}
