export { store, persistor } from './store'

interface Result {
  username: string
  tries: number
  timestamp: number
}

export interface ReduxState {
  results: Result[]
}
