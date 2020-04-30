import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { Fruit } from './Fruit'

describe('Fruit', () => {
  const fruitName = 'Test fruit'
  const actionsText = 'Test actions'

  it('renders provided props', () => {
    const { getByText } = render(<Fruit name={fruitName} onClick={() => {}} actions={<button>{actionsText}</button>} />)

    expect(getByText(fruitName)).toBeInTheDocument()
    expect(getByText(actionsText)).toBeInTheDocument()
  })

  it('calls onClick when fruit clicked', () => {
    const onClick = jest.fn()

    const { getByText } = render(<Fruit name={fruitName} onClick={onClick} />)

    fireEvent.click(getByText(fruitName))

    expect(onClick).toHaveBeenCalledTimes(1)
    expect(onClick).toHaveBeenCalledWith(fruitName)
  })
})
