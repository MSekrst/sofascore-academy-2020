import React from 'react'
import ReactDOM from 'react-dom'

/**
 * This component simulates index.html (where we would usually add portal root, alongside app root (`root`))
 */
export function TopLevelPortal() {
  return (
    <>
      {/* portal will be rendered here */}
      <div id="portal-root" />

      {/* app will be rendered here */}
      <div id="app-root">
        <App />
      </div>
    </>
  )
}

/**
 * With CRA this would be App.js
 */
function App() {
  const [isModalVisible, setIsModalVisible] = React.useState(false)

  const onButtonClick = React.useCallback(() => {
    setIsModalVisible(!isModalVisible)
  }, [isModalVisible])

  return (
    <div>
      <h1>Welcome to the Portal app</h1>
      <button onClick={onButtonClick}>Toggle Modal</button>
      {isModalVisible && (
        <Modal>
          <div style={{ border: '1px solid tomato' }}>
            <h1>I am the Modal</h1>
            <button onClick={onButtonClick}>Close</button>
          </div>
        </Modal>
      )}
    </div>
  )
}

/**
 * Note how Modal will be rendered outside hierarchy in the DOM, but will be kept in hierarchy in Virtual DOM
 */
function Modal({ children }) {
  // const markup = <div style={{ position: 'fixed', top: 200, background: 'whitesmoke' }}>{children}</div>

  return children

  // const portalRoot = document.getElementById('portal-root')

  // return ReactDOM.createPortal(markup, portalRoot)
}
