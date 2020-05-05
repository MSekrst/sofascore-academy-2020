export enum GameResultActions {
  ADD = 'ADD_RESULT',
}

export const addResult = (username: string, tries: number) => ({
  type: GameResultActions.ADD,
  username,
  tries,
  timestamp: Date.now(),
})
