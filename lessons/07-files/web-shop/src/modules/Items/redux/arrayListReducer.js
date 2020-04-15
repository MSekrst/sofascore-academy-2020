/**
 * Generic list reducer factory. Returns reducer for handling number lists.
 * Returned reducer can handle insert and delete of single item from the list/
 *
 * @param {Object} config Configuration object for created reducer. Contains action types and initial state.
 */
export function listReducerFactory({ initialState = [], addActionType, removeActionType }) {
  if (!addActionType || !removeActionType) {
    throw Error('ListReducerFactory config is invalid. Please check if `actionType` and `removeActionType` provided.')
  }

  return function (state = initialState, action) {
    switch (action.type) {
      case addActionType: {
        const id = action.id

        if (state.includes(id)) {
          return state
        }

        return [...state, id]
      }

      case removeActionType: {
        const id = action.id
        const filtered = state.filter(stateItemId => stateItemId !== id)

        if (filtered.length === state.length) {
          return state
        }

        return filtered
      }

      default:
        return state
    }
  }
}
