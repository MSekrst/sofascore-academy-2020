/**
 * {
 *  items: []
 *  unavailable: []
 *  shoppingCart: []
 * }
 */

import { createStore, applyMiddleware } from 'redux'

import { rootReducer } from './reducer'
import logger from 'redux-logger'

const _store = createStore(rootReducer, applyMiddleware(logger))

export const store = _store
