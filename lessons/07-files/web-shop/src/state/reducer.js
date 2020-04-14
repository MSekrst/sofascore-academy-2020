import { combineReducers } from 'redux'

import { cartReducer } from '../modules/Items/cartReducer'
import { itemsReducer } from '../modules/Items/itemsReducer'
import { unavailableReducer } from '../modules/Items/unavailableReducer'

export const rootReducer = combineReducers({
  items: itemsReducer,
  shoppingCart: cartReducer,
  unavailable: unavailableReducer,
})
