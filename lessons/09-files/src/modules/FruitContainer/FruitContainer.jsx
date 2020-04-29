import React, { useState, useEffect } from 'react'

import { getFruit } from '../../api/repository'
import { FruitList } from '../FruitList/FruitList'

export function FruitContainer() {
  const [fruit, setFruit] = useState()
  const [error, setError] = useState()

  useEffect(() => {
    const fetchFruit = async () => {
      const data = await getFruit()

      if (data.error) {
        setError(data.error)
      } else {
        setFruit(data)
      }
    }

    fetchFruit()
  }, [])

  if (!fruit) {
    return <p>Loading...</p>
  }

  if (error) {
    return <p>Error occurred!</p>
  }

  return <FruitList fruit={fruit} />
}
