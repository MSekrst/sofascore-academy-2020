import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import { App } from './App'
import { store, persistor } from './state'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* PersistGate will delay render until persisted state is loaded */}
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
