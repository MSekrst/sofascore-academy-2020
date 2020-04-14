import { ADD_CART_ITEM, REMOVE_CART_ITEM } from './actions'

export function cartReducer(state = [], action) {
  switch (action.type) {
    case ADD_CART_ITEM: {
      const id = action.id

      if (state.includes(id)) {
        return state
      }

      return [...state, id]
    }

    case REMOVE_CART_ITEM: {
      const id = action.id

      const cart = state.filter(cartId => cartId !== id)

      if (cart.length === state.length) {
        return state
      }

      return cart
    }

    default:
      return state
  }
}
