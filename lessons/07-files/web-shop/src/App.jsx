import React, { useEffect } from 'react'
import 'normalize.css'
import { useDispatch, useSelector } from 'react-redux'

import { items } from './data/items'
import { Header, Main } from './modules/Layout'
import { Items } from './modules/Items'
import { Button } from './components'
import './base.css'
import { setItems, removeUnavailable, addUnavailable } from './modules/Items/actions'

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
        <p>
          <Button
            onClick={() => (unavailableItems.length ? dispatch(removeUnavailable(1)) : dispatch(addUnavailable(1)))}
          >
            Toggle bread availability
          </Button>
        </p>
        <Items />
      </Main>
    </>
  )
}
