import { ADD_CART_ITEM, REMOVE_CART_ITEM } from './actions'
import { listReducerFactory } from './arrayListReducer'

export const cartReducer = listReducerFactory({ addActionType: ADD_CART_ITEM, removeActionType: REMOVE_CART_ITEM })
