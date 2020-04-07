import React from 'react'

function getIsMobile(width) {
  return width < 450
}

function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState(getIsMobile(window.innerWidth))

  function resizeHandler(e) {
    const width = e.currentTarget.innerWidth
    const newIsMobile = getIsMobile(width)
    setIsMobile(newIsMobile)
  }

  React.useEffect(() => {
    window.addEventListener('resize', resizeHandler)

    return () => {
      window.removeEventListener('resize', resizeHandler)
    }
  }, [])

  // return enhancements that will be used in decorated components
  return isMobile
}

export function TextCustomHook({ color }) {
  const isMobile = useIsMobile()

  return (
    <div style={{ color }}>
      <p>Is mobile: {isMobile ? 'yes' : 'no'}</p>
    </div>
  )
}
