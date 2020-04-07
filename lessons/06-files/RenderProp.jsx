import React from 'react'

function getIsMobile(width) {
  return width < 450
}

// render prop is function which has to be called with enhancements
function IsMobile({ render }) {
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

  // return render method provided via props with decoration arguments
  return render(isMobile)
}

export function Text({ color }) {
  return (
    // with Render prop, decoration is explicit and developers can name decorated arguments as wanted
    <IsMobile
      render={isMobile => (
        <div style={{ color }}>
          <p>Is mobile: {isMobile ? 'yes' : 'no'}</p>
        </div>
      )}
    />
  )
}
