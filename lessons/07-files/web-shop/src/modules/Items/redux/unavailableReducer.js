import { ADD_UNAVAILABLE_ITEM, REMOVE_UNAVAILABLE_ITEM } from './actions'
import { listReducerFactory } from './arrayListReducer'

export const unavailableReducer = listReducerFactory({
  addActionType: ADD_UNAVAILABLE_ITEM,
  removeActionType: REMOVE_UNAVAILABLE_ITEM,
})
