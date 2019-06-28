import React, { useEffect, useState } from 'react'
import Item from './Item'
import ShoppingItem from './ShoppingItem'
import { setItems, addItem } from './actions/items'
import { connect } from 'react-redux'

const ShoppingList = ({ title }) => {
  const [newItemLabel, setNewItemLabel] = useState('')
  const [newItemPrice, setNewItemPrice] = useState(0)

  useEffect(() => {
    // TODO: dispatch the setItems action, so a default list will be stored in the redux store
    setItems([new Item(1, 'pain', 0.95), new Item(2, 'gel douche', 2.85), new Item(3, 'cahier à spirales', 1.2)])
  }, [])

  const handleAddItem = event => {
    //TODO dispatch the addItem action
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShoppingList)
