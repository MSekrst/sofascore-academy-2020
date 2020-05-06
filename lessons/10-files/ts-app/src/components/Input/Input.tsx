import React, { useCallback, ChangeEvent } from 'react'

import { Stylable } from '../../utils'

interface InputProps extends Stylable {
  value?: string | number
  label?: string
  type?: 'text' | 'number'
  placeholder: string
  onChange: (value: string) => void
  min?: number
  max?: number
}

export function Input({ label, type, value, placeholder, onChange, min, max, ...styles }: InputProps) {
  const inputLabel = label || placeholder
  const inputType = type || typeof value === 'string' ? 'text' : 'number'

  const handleInputChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const newValue = e.currentTarget.value

      onChange(newValue)
    },
    [onChange]
  )

  const inputAttributes = { type: inputType, value: value || '', placeholder, onChange: handleInputChange, min, max }

  return (
    <label {...styles}>
      {inputLabel}
      <input {...inputAttributes} />
    </label>
  )
}
