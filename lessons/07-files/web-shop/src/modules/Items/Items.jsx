import React from 'react'
import { useSelector } from 'react-redux'

import './items.css'
import { Item } from './Item'

export function Items() {
  const { items, unavailable: unavailableItems } = useSelector(state => state)

  return (
    <div>
      <h2>All Items</h2>
      <div className="items-container">
        {items.map(item => (
          <Item key={item.id} item={item} inUnavailable={unavailableItems.includes(item.id)} />
        ))}
      </div>
    </div>
  )
}
