import React, { useEffect, useState } from 'react'
import ShoppingItem from './ShoppingItem'
import { fetchItems, addItem } from './actions/items'
import Item from './Item'

const ShoppingList = ({ title }) => {
  const [newItemLabel, setNewItemLabel] = useState('')
  const [newItemPrice, setNewItemPrice] = useState(0)

  useEffect(() => {
    // TODO: dispatcher l'action créée par fetchItems
  }, [])

  const createNewItem = e => {
    e.preventDefault()
    const action = addItem(new Item(Date.now(), newItemLabel, newItemPrice))
    // TODO : dispatcher l'action créée par addItem
    setNewItemLabel('')
    setNewItemPrice(0)
  }

  return (
    <div>
      <h2>{title}</h2>
      <ul>
        {/*
        TODO: itérer sur les items (que l'on a récupérés dans le store redux)
        {items.map(item => (
          <ShoppingItem key={item.id} item={item} />
        ))}
        */}
      </ul>
      <form onSubmit={createNewItem}>
        <input type="text" placeholder="item" onChange={e => setNewItemLabel(e.target.value)} value={newItemLabel} />
        <input type="number" onChange={e => setNewItemPrice(parseFloat(e.target.value))} value={newItemPrice} />
        <button type="submit">add</button>
      </form>
    </div>
  )
}

export default ShoppingList
