import React from 'react'
import styled from 'styled-components'

import noImage from './images/noImage.png'

function getFruitImage(fruitName) {
  try {
    // import won't work when nested
    return require(`./images/${fruitName.toLowerCase()}.png`)
  } catch (e) {
    return noImage
  }
}

const FruitItem = styled.div`
  display: flex;
  align-items: center;
  padding: 8px 16px;
  background-color: white;
  border-radius: 4px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }

  & + & {
    margin-top: 8px;
  }

  > img {
    width: 60px;
    height: 60px;
  }
`

const FruitName = styled.div`
  font-size: 24px;
  font-weight: 700;
  margin-left: 16px;
  flex: 1 1 120px;
`

export function Fruit({ name, onClick, actions }) {
  const image = getFruitImage(name)

  return (
    <FruitItem onClick={() => onClick(name)} role="button">
      <img src={image} alt={name} />
      <FruitName aria-label={name}>{name}</FruitName>
      {actions && <div aria-label="Fruit actions">{actions}</div>}
    </FruitItem>
  )
}
