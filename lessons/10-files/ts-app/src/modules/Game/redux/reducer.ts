import { AnyAction } from 'redux'

import { GameResultActions } from './actions'

export function resultsReducer(state = [], action: AnyAction) {
  switch (action.type) {
    case GameResultActions.ADD:
      return [...state, { username: action.username, timestamp: action.timestamp, tries: action.tries }]

    default:
      return state
  }
}
