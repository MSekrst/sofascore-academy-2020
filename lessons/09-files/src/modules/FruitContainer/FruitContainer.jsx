import React, { useState, useEffect } from 'react'

import { getFruit } from '../../api/repository'
import { FruitPicker } from '../FruitPicker/FruitPicker'

export function FruitContainer() {
  const [fruit, setFruit] = useState(null)
  const [error, setError] = useState(null)

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

  return (
    <div>
      <FruitPicker fruit={fruit} />
    </div>
  )
}
