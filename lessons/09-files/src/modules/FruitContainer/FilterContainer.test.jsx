import React from 'react'
import { render, waitForElementToBeRemoved } from '@testing-library/react'

import { FruitContainer } from './FruitContainer'
import { mockedFruit } from '../../api/__mocks__/repository'

jest.mock('../../api/repository')

describe('FruitContainer', () => {
  it('shows loading message while fetching', async () => {
    const { getByText } = render(<FruitContainer />)

    expect(getByText(/Loading/i)).toBeInTheDocument()

    await waitForElementToBeRemoved(() => getByText(/Loading/i))
  })

  it('renders fetched fruit', async () => {
    const { getByText } = render(<FruitContainer />)

    await waitForElementToBeRemoved(() => getByText(/Loading/i))

    expect(getByText(mockedFruit[0])).toBeInTheDocument()
    expect(getByText(mockedFruit[1])).toBeInTheDocument()
    expect(getByText(mockedFruit[2])).toBeInTheDocument()
  })
})
