import { combineReducers } from 'redux'

import { cartReducer, itemsReducer, unavailableReducer } from '../modules/Items'

export const rootReducer = combineReducers({
  items: itemsReducer,
  shoppingCart: cartReducer,
  unavailable: unavailableReducer,
})
