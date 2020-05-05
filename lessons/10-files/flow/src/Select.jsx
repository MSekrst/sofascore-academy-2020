// @flow

import React, { useCallback } from 'react'

// NOTE: VSCode is written in TypeScript and uses TypeScript for intellisense. This means that by default JS files would
// be parsed by TS. Ts will not recognize flow annotations so they will be reported as errors.
// ("Type aliases can only be used in TypeScript files.ts(8008)").
//
// To force VSCode to work properly, you should configure VSCode to avoid validating JS files. It is also recommended to
// install Flow extension if flow will be used to see errors in editor (search Flow Language Support in extension marketplace).
//
// This SO thread solves problem, but you might get less correct intellisense
// https://stackoverflow.com/questions/48852007/type-aliases-can-only-be-used-in-a-ts-file/51034421

type SelectProps = {
  label: string,
  // Flow will recognize optional props if they are declared in defaultProps
  value: string,
  onChange: (selectedValue: string) => void,
  options: Array<{
    label: string,
    value: string,
  }>,
}

// define defaults for optional props (e.g. `label = ''`)
export function Select({ label = '', options, value, onChange }: SelectProps) {
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

// other way of adding default value for optional props
Select.defaultProps = {
  label: '',
}
