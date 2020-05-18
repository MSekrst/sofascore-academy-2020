import React, { useCallback, ChangeEvent, useRef } from 'react'
import styled from 'styled-components'

import { Stylable, textColor } from '../../utils'

interface InputProps extends Stylable {
  value?: string | number
  label: string
  type?: 'text' | 'number'
  onChange: (value: string) => void
  min?: number
  max?: number
}

interface Placeholder {
  isPlaceholder?: boolean
}

const InputWrapper = styled.div<Placeholder>`
  display: inline-block;
  position: relative;

  > label {
    position: absolute;
    opacity: 0.6;
    font-weight: 300;
    transition: all 0.2s ease-in-out;
    margin-left: 4px;

    ${props =>
      props.isPlaceholder
        ? `
          top: 6px;
      `
        : `
          top: -10px;
          font-size: 12px;
          margin-left: 3px;
    `}
  }
`

const StyledInput = styled.input`
  background-color: transparent;
  ${textColor};
  min-width: 100px;
  border: none;
  border-bottom: 1px solid;
  padding: 8px 4px;
  font-size: 16px;
  outline: none;
  transition: border 0.2s ease-in-out;
`

export function Input({ label, type, value, onChange, min, max, ...styles }: InputProps) {
  const idRef = useRef<string>(`input-Math.random().toString(36).substring(5)`)
  const id = idRef.current

  const inputType = type || typeof value === 'string' ? 'text' : 'number'

  const handleInputChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const newValue = e.currentTarget.value

      onChange(newValue)
    },
    [onChange]
  )

  const inputAttributes = {
    type: inputType,
    value: value || '',
    onChange: handleInputChange,
    min,
    max,
  }

  return (
    <InputWrapper isPlaceholder={typeof value === 'undefined' || value === ''} {...styles}>
      <label htmlFor={id}>{label}</label>
      <StyledInput id={id} {...inputAttributes} />
    </InputWrapper>
  )
}
