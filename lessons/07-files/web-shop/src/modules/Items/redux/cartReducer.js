import { ADD_CART_ITEM, REMOVE_CART_ITEM } from './actions'
import { numberListReducerFactory } from '../../../utils'

export const cartReducer = numberListReducerFactory({
  addActionType: ADD_CART_ITEM,
  removeActionType: REMOVE_CART_ITEM,
})
