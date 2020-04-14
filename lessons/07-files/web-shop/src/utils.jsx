import { useState } from 'react'
import { useCallback } from 'react'

/**
 * Custom hook for managing boolean states. Provides state value and useful setters.
 * 
 * @param {boolean} initialValue initial hook value
 */
export function useBoolean(initialValue = false) {
  const [value, setValue] = useState(initialValue)

  const setTrue = useCallback(() => {
    setValue(true)
  }, [])

  const setFalse = useCallback(() => {
    setValue(false)
  }, [])

  const toggleValue = useCallback(() => {
    setValue(!value)
  }, [value])

  return { value, setValue, setTrue, setFalse, toggleValue }
}
