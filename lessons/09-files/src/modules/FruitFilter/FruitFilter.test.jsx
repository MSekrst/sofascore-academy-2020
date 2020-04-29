import React from 'react'
import { render, fireEvent } from '@testing-library/react'

import { FruitFilter } from './FruitFilter'
import { getMatchingOptions } from './helpers'

const label = 'Test label'
const action = 'Action test'
const options = ['Item A', 'Item B', 'Thing C']

describe('FruitFilter', () => {
  it('renders provided props', () => {
    const { getByText, getAllByText } = render(
      <FruitFilter label={label} options={options} onSubmit={() => {}} actions={<button>{action}</button>} />
    )

    expect(getByText(label)).toBeInTheDocument()
    expect(getAllByText(action).length).toBe(3)
    expect(getByText(options[0])).toBeInTheDocument()
    expect(getByText(options[1])).toBeInTheDocument()
    expect(getByText(options[2])).toBeInTheDocument()
  })

  it('filters options bt filter term', () => {
    const { getByText, queryByText, getByPlaceholderText } = render(
      <FruitFilter label={label} options={options} onSubmit={() => {}} />
    )

    fireEvent.change(getByPlaceholderText(/filter term/i), { target: { value: 'Item' } })

    expect(getByText(options[0])).toBeInTheDocument()
    expect(getByText(options[1])).toBeInTheDocument()
    expect(queryByText(options[2])).not.toBeInTheDocument()
  })

  it('calls onSubmit when suggestion clicked', () => {
    const onSubmit = jest.fn()

    const { getByText } = render(<FruitFilter label={label} options={options} onSubmit={onSubmit} />)

    fireEvent.click(getByText(options[2]))

    expect(onSubmit).toHaveBeenCalledTimes(1)
    expect(onSubmit).toHaveBeenCalledWith(options[2])
  })

  it('renders message when no items filtered', () => {
    const { getByText, queryByText, getByPlaceholderText } = render(
      <FruitFilter label={label} options={options} onSubmit={() => {}} />
    )

    fireEvent.change(getByPlaceholderText(/filter term/i), { target: { value: 'Random non matching term' } })

    expect(queryByText(options[0])).not.toBeInTheDocument()
    expect(queryByText(options[1])).not.toBeInTheDocument()
    expect(queryByText(options[2])).not.toBeInTheDocument()
    expect(getByText(/no items/i)).toBeInTheDocument()
  })

  it('renders message when no items provided', () => {
    const { getByText } = render(<FruitFilter label={label} options={[]} onSubmit={() => {}} />)

    expect(getByText(/no items/i)).toBeInTheDocument()
  })
})

describe('getMatchingOptions', () => {
  it('returns empty array for invalid options argument', () => {
    const ret = getMatchingOptions('testString', 'test')

    const isArray = ret instanceof Array

    expect(isArray).toBe(true)
    expect(ret.length).toBe(0)
  })

  it('returns filtered options', () => {
    const filtered = getMatchingOptions(options, 'item')

    expect(filtered.length).toBe(2)
    expect(filtered).toEqual(options.slice(0, 2))
  })
})
