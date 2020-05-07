import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { ReduxState } from '../../state'
import { Text } from '../../components'

const StyledTable = styled.table`
  text-align: center;
`

function Table({ results }: Pick<ReduxState, 'results'>) {
  return (
    <StyledTable>
      <thead>
        <tr>
          <th>Place</th>
          <th>Name</th>
          <th>Date</th>
          <th>Tries</th>
        </tr>
      </thead>
      <tbody>
        {results.map(({ timestamp, username, tries }, index) => (
          <tr>
            <td>{index + 1}</td>
            <td>{username}</td>
            <td>{timestamp}</td>
            <td>{tries}</td>
          </tr>
        ))}
      </tbody>
    </StyledTable>
  )
}

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
      <Text title>Hall Of Fame</Text>
      <Table results={sortedResults} />
      <Text>
        <Link to="/game">Play</Link>
      </Text>
    </>
  )
}
