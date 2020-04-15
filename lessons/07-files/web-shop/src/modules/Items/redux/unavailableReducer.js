import { ADD_UNAVAILABLE_ITEM, REMOVE_UNAVAILABLE_ITEM } from './actions'

export function unavailableReducer(state = [], action) {
  switch (action.type) {
    case ADD_UNAVAILABLE_ITEM: {
      const id = action.id

      if (state.includes(id)) {
        return state
      }

      return [...state, id]
    }

    case REMOVE_UNAVAILABLE_ITEM: {
      const id = action.id

      const unavailable = state.filter(cartId => cartId !== id)

      if (unavailable.length === state.length) {
        return state
      }

      return unavailable
    }

    default:
      return state
  }
}
