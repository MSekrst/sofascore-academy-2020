import { useState, useCallback } from 'react'

/**
 * Custom hook for managing boolean variables. Provides boolean `value` and setter methods.
 * Also provides `toggle` method that changes boolean value.
 *
 * @param {boolean} initialValue
 */
export function useBoolean(initialValue = false) {
  const [value, setValue] = useState(initialValue)

  const setTrue = useCallback(() => {
    setValue(true)
  }, [])

  const setFalse = useCallback(() => {
    setValue(false)
  }, [])

  const toggle = useCallback(
    valueArgument => {
      // if value provided use it, if not use state value
      const nextValue = typeof valueArgument === 'boolean' ? valueArgument : !value

      setValue(nextValue)
    },
    [value]
  )

  return {
    value,
    setTrue,
    setFalse,
    toggle,
  }
}
