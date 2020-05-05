import React, { useCallback, ChangeEvent } from 'react'

interface InputProps {
  value?: number
  label?: string
  placeholder: string
  onChange: (value: number) => void
}

export function Input({ label, value, placeholder, onChange }: InputProps) {
  const inputLabel = label || placeholder

  const handleInputChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const newValue = Number(e.currentTarget.value)

      onChange(newValue)
    },
    [onChange]
  )

  return (
    <label>
      {inputLabel}
      <input
        type="number"
        min={0}
        max={100}
        value={value || ''}
        placeholder={placeholder}
        onChange={handleInputChange}
      />
    </label>
  )
}
