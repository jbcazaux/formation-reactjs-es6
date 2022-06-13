import React, { useEffect, useState } from 'react'
import Item from './Item'
import { setItems, addItem } from './slice/items'
import { useDispatch, useSelector } from 'react-redux'
import ShoppingItem from './ShoppingItem'

const ShoppingList = ({ title }) => {
  const [newItemLabel, setNewItemLabel] = useState('')
  const [newItemPrice, setNewItemPrice] = useState(0)
  const dispatch = useDispatch()
  const items = useSelector(state => state.items.value)

  useEffect(() => {
    const action = setItems([
      new Item(1, 'pain', 0.95),
      new Item(2, 'gel douche', 2.85),
      new Item(3, 'cahier à spirales', 1.2),
    ])
    dispatch(action)
  }, [])

  const handleAddItem = event => {
    event.preventDefault()
    const action = addItem(new Item(Date.now(), newItemLabel, newItemPrice))
    dispatch(action)
    setNewItemLabel('')
    setNewItemPrice(0)
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
