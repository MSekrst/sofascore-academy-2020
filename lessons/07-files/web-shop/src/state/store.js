import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import { rootReducer } from './reducer'

/**
 * {
 *  items: [full items]
 *  unavailable: [item ids]
 *  shoppingCart: [item ids]
 * }
 */

//  redux-persist will save Redux state to localStorage. When user visits page again it will use saved state
const persistConfig = {
  key: 'webShop',
  storage,
  whitelist: ['shoppingCart', 'unavailable'],
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = createStore(persistedReducer, applyMiddleware(logger))

export const persistor = persistStore(store)
