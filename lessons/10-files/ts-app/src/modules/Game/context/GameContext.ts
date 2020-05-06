import React from 'react'

export const GameContext = React.createContext({
  username: '',
  tries: 0,
  setUsername: (username: string) => {},
  setTries: (tries: number) => {},
})
