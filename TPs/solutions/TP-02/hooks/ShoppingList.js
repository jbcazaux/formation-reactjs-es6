import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ShoppingItem from './ShoppingItem'

export default function ShoppingList({ title }) {
  const [items, setItems] = useState([])

  useEffect(() => {
    axios
      .get('./items.json')
      .then(resp => resp.data)
      .then(items => {
        setItems(items)
      })
  }, [])

  return (
    <div>
      <h2>{title}</h2>
      <ul>
        {items.map(item => (
          <ShoppingItem key={item.id} item={item} />
        ))}
      </ul>
    </div>
  )
}
