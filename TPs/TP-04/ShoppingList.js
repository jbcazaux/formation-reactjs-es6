import React, { useEffect, useState } from 'react'
import Item from './Item'
import ShoppingItem from './ShoppingItem'
import { setItems, addItem } from './actions/items'

const ShoppingList = ({ title }) => {
  const [newItemLabel, setNewItemLabel] = useState('')
  const [newItemPrice, setNewItemPrice] = useState(0)

  useEffect(() => {
    // TODO: Créer une action grace à l'action creator 'setItems' puis la dispatcher pour que le store soit mis à jour
    setItems([new Item(1, 'pain', 0.95), new Item(2, 'gel douche', 2.85), new Item(3, 'cahier à spirales', 1.2)])
  }, [])

  const handleAddItem = event => {
    //TODO dispatcher l'action créée par l'action creator 'addItem'
  }

  return (
    <div>
      <h2>{title}</h2>
      <ul>
        {items.map(item => (
          <ShoppingItem key={item.id} item={item} />
        ))}
      </ul>
      <form onSubmit={handleAddItem}>
        <input type="text" placeholder="item" onChange={e => setNewItemLabel(e.target.value)} value={newItemLabel} />
        <input type="number" onChange={e => setNewItemPrice(parseFloat(e.target.value))} value={newItemPrice} />
        <button type="submit">add</button>
      </form>
    </div>
  )
}

export default ShoppingList
