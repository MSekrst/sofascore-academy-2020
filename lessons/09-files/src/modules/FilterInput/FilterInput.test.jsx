import React from 'react'
import { render, fireEvent } from '@testing-library/react'

import { FilterInput } from './FilterInput'
import { getMatchingOptions } from './helpers'

const label = 'Test label'
const options = [
  { id: 1, label: 'Item A' },
  { id: 2, label: 'Item B' },
  { id: 3, label: 'Thing C' },
]

describe('FilterInput', () => {
  it('renders provided props', () => {
    const { getByText } = render(<FilterInput label={label} options={options} onSubmit={() => {}} />)

    expect(getByText(label)).toBeInTheDocument()
    expect(getByText(options[0].label)).toBeInTheDocument()
    expect(getByText(options[1].label)).toBeInTheDocument()
    expect(getByText(options[2].label)).toBeInTheDocument()
  })

  it('filters options', () => {
    const { getByText, queryByText, getByPlaceholderText } = render(
      <FilterInput label={label} options={options} onSubmit={() => {}} />
    )

    fireEvent.change(getByPlaceholderText(/Enter filter term/i), { target: { value: 'Item' } })

    expect(getByText(options[0].label)).toBeInTheDocument()
    expect(getByText(options[1].label)).toBeInTheDocument()
    expect(queryByText(options[2].label)).not.toBeInTheDocument()
  })

  it('calls onSubmit on suggestion click', () => {
    const onSubmit = jest.fn()

    const { getByText } = render(<FilterInput label={label} options={options} onSubmit={onSubmit} />)

    fireEvent.click(getByText(options[2].label))

    expect(onSubmit).toHaveBeenCalledTimes(1)
    expect(onSubmit).toHaveBeenCalledWith(options[2].label)
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
