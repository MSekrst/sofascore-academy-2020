import React from 'react'
import { render, fireEvent } from '@testing-library/react'

import { FruitList } from './FruitList'

describe('FruitList', () => {
  const fruit = ['Orange', 'Blueberry', 'Strawberry']

  it('displays error message when no fruit provided', () => {
    const { getByText } = render(<FruitList fruit={[]} />)

    expect(getByText(/no fruit/i)).toBeInTheDocument()
  })

  it('adds and removes fruit from the favorites', () => {
    const { getByText, getAllByText, queryByText, getByLabelText } = render(<FruitList fruit={fruit} />)

    expect(getAllByText(fruit[0]).length).toBe(1) // only one item rendered (in all fruit list)

    fireEvent.click(getByText(fruit[0])) // add to the favorite list
    expect(getAllByText(fruit[0]).length).toBe(1) // only one item rendered (in favorite list)

    fireEvent.change(getByLabelText(/remove favorite fruit/i), { target: { value: fruit[1] } })
    expect(queryByText(fruit[0])).not.toBeInTheDocument() // when favorites list filtered, favorite fruit is hidden

    fireEvent.change(getByLabelText(/remove favorite fruit/i), { target: { value: fruit[0] } })
    fireEvent.click(getByText(fruit[0])) // remove from the favorite list
    expect(getAllByText(fruit[0]).length).toBe(1) // only one item rendered (in all fruit list)
  })
})
