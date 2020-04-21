import React, { useCallback } from 'react'

// Memoize ClickCounter to avoid unnecessary rerenders
export const ClickCounter = React.memo(function ClickCounterComponent() {
  if (!window.counter) {
    window.counter = 0
  }

  const handleCounterClick = useCallback(() => {
    window.counter += 1

    console.log('New counter value =', window.counter)
  }, [])

  return <button onClick={handleCounterClick}>Click counter</button>
})
