import React from 'react'
import { render, fireEvent } from '@testing-library/react'

import { FruitFilter } from './FruitFilter'
import { getMatchingOptions } from './helpers'

const label = 'Test label'
const options = ['Item A', 'Item B', 'Thing C']

describe('FruitFilter', () => {
  it('renders provided props', () => {
    const { getByText } = render(<FruitFilter label={label} options={options} onSubmit={() => {}} />)

    expect(getByText(label)).toBeInTheDocument()
    expect(getByText(options[0])).toBeInTheDocument()
    expect(getByText(options[1])).toBeInTheDocument()
    expect(getByText(options[2])).toBeInTheDocument()
  })

  it('filters options', () => {
    const { getByText, queryByText, getByPlaceholderText } = render(
      <FruitFilter label={label} options={options} onSubmit={() => {}} />
    )

    fireEvent.change(getByPlaceholderText(/filter term/i), { target: { value: 'Item' } })

    expect(getByText(options[0])).toBeInTheDocument()
    expect(getByText(options[1])).toBeInTheDocument()
    expect(queryByText(options[2])).not.toBeInTheDocument()
  })

  it('calls onSubmit on suggestion click', () => {
    const onSubmit = jest.fn()

    const { getByText } = render(<FruitFilter label={label} options={options} onSubmit={onSubmit} />)

    fireEvent.click(getByText(options[2]))

    expect(onSubmit).toHaveBeenCalledTimes(1)
    expect(onSubmit).toHaveBeenCalledWith(options[2])
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
