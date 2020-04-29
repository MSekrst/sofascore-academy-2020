import React, { useState, useCallback } from 'react'
import styled from 'styled-components'

import { FruitFilter } from '../FruitFilter/FruitFilter'
import { Fruit } from '../Fruit/Fruit'

const FilterListWrapper = styled.div`
  width: 300px;
  margin: 0 auto;

  @media (min-width: 500px) {
    width: 500px;
  }

  @media (min-width: 650px) {
    width: 650px;
  }

  @media (min-width: 1050px) {
    width: 1050px;
  }
`

const Message = styled.div`
  text-align: center;
  font-size: 18px;
  font-weight: 500;

  ${props =>
    props.error &&
    `
      color: tomato;
      font-size: 24px;
      font-weight: 700;
  `}
`

const FavoritesList = styled.div`
  margin: 24px 0;
`

const Title = styled.h1`
  text-transform: uppercase;
  text-align: center;
`

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
    return <Message error>No fruit for fruit list</Message>
  }

  const nonFavoriteOptions = fruit.reduce((aggregator, candidateFruit) => {
    if (!favoriteFruit.includes(candidateFruit)) {
      aggregator.push(candidateFruit)
    }

    return aggregator
  }, [])

  return (
    <FilterListWrapper>
      <Title>Favorite fruit</Title>
      <FavoritesList>
        <FruitFilter
          options={favoriteFruit}
          label="Remove favorite fruit"
          onSubmit={handleRemoveFruit}
          actions={<span className="material-icons">clear</span>}
        />
      </FavoritesList>
      <FruitFilter
        options={nonFavoriteOptions}
        label="Add favorite fruit"
        onSubmit={handleFruitAdd}
        actions={<span className="material-icons">add</span>}
      />
    </FilterListWrapper>
  )
}
