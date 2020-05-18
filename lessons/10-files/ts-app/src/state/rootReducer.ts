import { combineReducers } from 'redux'
import { resultsReducer } from '../modules'

export const rootReducer = combineReducers({ results: resultsReducer })
