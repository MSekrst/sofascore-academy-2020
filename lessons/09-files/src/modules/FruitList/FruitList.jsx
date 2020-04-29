import React, { useState, useCallback } from 'react'
import { FruitFilter } from '../FruitFilter/FruitFilter'
import { Fruit } from '../Fruit/Fruit'

export function FruitList({ fruit }) {
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

  const handleRemoveFruit = useCallback(
    removedFruit => {
      const filteredFruit = favoriteFruit.filter(f => f !== removedFruit)

      setFavoriteFruit(filteredFruit)
    },
    [favoriteFruit]
  )

  if (!fruit.length) {
    return <h2>No fruit :(</h2>
  }

  const nonFavoriteOptions = fruit.reduce((aggregator, candidateFruit) => {
    if (!favoriteFruit.includes(candidateFruit)) {
      aggregator.push(candidateFruit)
    }

    return aggregator
  }, [])

  return (
    <div>
      <h3>Favorite fruit:</h3>
      {favoriteFruit.length ? (
        <div>
          {favoriteFruit.map(fruitName => (
            <Fruit
              key={fruitName}
              name={fruitName}
              onClick={() => handleRemoveFruit(fruitName)}
              actions={<span className="material-icons">clear</span>}
            />
          ))}
        </div>
      ) : (
        <p>None </p>
      )}
      <FruitFilter options={nonFavoriteOptions} label="Pick favorite fruit" onSubmit={handleFruitAdd} />
    </div>
  )
}
