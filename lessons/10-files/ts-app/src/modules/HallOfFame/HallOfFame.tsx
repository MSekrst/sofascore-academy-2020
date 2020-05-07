import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { ReduxState } from '../../state'
import { Text } from '../../components'

export function HallOfFame() {
  const results = useSelector((state: ReduxState) => state.results)

  if (!results.length) {
    return <Text>No results yet</Text>
  }

  const sortedResults = results.sort((a, b) => {
    if (a.tries === b.tries) {
      return a.timestamp - b.timestamp
    }

    return a.tries - b.tries
  })

  return (
    <>
      <Text>HallOfFame</Text>
      <div>
        {sortedResults.map(({ username, tries, timestamp }) => (
          <div key={`${username}-${timestamp}`}>
            {tries} - {username} - {new Date(timestamp).toDateString()}
          </div>
        ))}
      </div>
      <Text>
        Qualify by playing <Link to="/game">here</Link>
      </Text>
    </>
  )
}
