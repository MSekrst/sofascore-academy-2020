import { SET_ITEMS } from './actions'

export function itemsReducer(state = [], action) {
  if (action.type === SET_ITEMS) {
    return [...state, ...action.items]
  }

  return state
}
