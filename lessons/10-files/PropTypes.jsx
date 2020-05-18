import React, { useState, useCallback } from 'react'
import PropTypes from 'prop-types'

function Select({ label, options, value, onChange }) {
  const handleChange = useCallback(
    e => {
      onChange(e.target.value)
    },
    [onChange]
  )

  return (
    <>
      {label && <label htmlFor={label}>{label}</label>}
      <select id={`select-${label}`} value={value} onChange={handleChange}>
        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </>
  )
}

// PropTypes definition
Select.propTypes = {
  label: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    })
  ).isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired, // notice how function arguments and return types cannot be defined
}

export function PropTypesApp() {
  const [selected, setSelected] = useState('')

  const options = [
    {
      label: 'PropTypes',
      value: 'propTypes',
    },
    {
      label: 'Flow',
      value: 'flow',
    },
    {
      label: 'TypeScript',
      value: 'ts',
    },
  ]

  return (
    <>
      {/* TODO: add label */}
      <Select options={options} value={selected} onChange={setSelected} />
    </>
  )
}
