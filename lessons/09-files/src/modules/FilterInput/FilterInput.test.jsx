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
  it('badly checks if label exists', () => {
    const { container } = render(<FilterInput label={label} options={options} onSubmit={() => {}} />)

    // this tests implementation details
    expect(container.querySelector('label')).not.toBe(null)
  })

  it('renders provided props', () => {
    const { getByText } = render(<FilterInput label={label} options={options} onSubmit={() => {}} />)

    expect(getByText(label)).toBeInTheDocument()
    expect(getByText(options[0].label)).toBeInTheDocument()
    expect(getByText(options[1].label)).toBeInTheDocument()
    expect(getByText(options[2].label)).toBeInTheDocument()
  })

  it('filters options', () => {
    const { getByText, queryByText, getByPlaceholderText } = render(
      <FilterInput options={options} onSubmit={() => {}} />
    )

    fireEvent.change(getByPlaceholderText(/Enter filter term/i), { target: { value: 'Item' } })

    expect(getByText(options[0].label)).toBeInTheDocument()
    expect(getByText(options[1].label)).toBeInTheDocument()
    expect(queryByText(options[2].label)).not.toBeInTheDocument()
  })
})

describe('getMatchingOptions', () => {
  it('returns filtered options', () => {
    const filtered = getMatchingOptions(options, 'item')

    expect(filtered.length).toBe(2)
    expect(filtered).toEqual(options.slice(0, 2))
  })
})
