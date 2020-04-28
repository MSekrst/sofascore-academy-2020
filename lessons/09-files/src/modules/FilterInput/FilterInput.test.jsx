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

  it('renders provided props', () => {})

  it('filters options', () => {})
})

describe('getMatchingOptions', () => {
  it('returns filtered options', () => {
    const filtered = getMatchingOptions(options, 'item')

    expect(filtered.length).toBe(2)
    expect(filtered).toEqual(options.slice(0, 2))
  })
})
