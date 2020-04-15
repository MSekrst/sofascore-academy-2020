import { ADD_UNAVAILABLE_ITEM, REMOVE_UNAVAILABLE_ITEM } from './actions'
import { numberListReducerFactory } from '../../../utils'

export const unavailableReducer = numberListReducerFactory({
  addActionType: ADD_UNAVAILABLE_ITEM,
  removeActionType: REMOVE_UNAVAILABLE_ITEM,
})
