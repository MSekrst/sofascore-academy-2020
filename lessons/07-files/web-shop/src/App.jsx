import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import 'normalize.css'

import './base.css'
import { items } from './data/items'
import { setItems, removeUnavailable, addUnavailable } from './modules/Items'
import { Header, Main } from './modules/Layout'
import { Items } from './modules/Items'
import { Button } from './components'

export function App() {
  const dispatch = useDispatch()
  const unavailableItems = useSelector(state => state.unavailable)

  useEffect(() => {
    dispatch(setItems(items))
  }, [dispatch])

  return (
    <>
      <Header>
        <h1>Web Shop</h1>
      </Header>
      <Main>
        <p style={{ margin: '16px -8px' }}>
          <Button
            onClick={() =>
              unavailableItems.includes(1) ? dispatch(removeUnavailable(1)) : dispatch(addUnavailable(1))
            }
          >
            Toggle bread availability
          </Button>
          <Button
            onClick={() =>
              unavailableItems.includes(2) ? dispatch(removeUnavailable(2)) : dispatch(addUnavailable(2))
            }
          >
            Toggle milk availability
          </Button>
        </p>
        <Items />
      </Main>
    </>
  )
}
